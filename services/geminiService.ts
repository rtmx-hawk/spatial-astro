
import { GoogleGenAI } from "@google/genai";

// Helper to validate API key availability
export const checkApiKey = async (): Promise<boolean> => {
  if (window.aistudio && window.aistudio.hasSelectedApiKey) {
    return await window.aistudio.hasSelectedApiKey();
  }
  return false;
};

export const openApiKeySelection = async (): Promise<void> => {
  if (window.aistudio && window.aistudio.openSelectKey) {
    await window.aistudio.openSelectKey();
  }
};

export const generateVeoVideo = async (prompt: string): Promise<string | null> => {
  if (!process.env.API_KEY) {
    // If we don't have a key in env, try to prompt via the studio bridge if available
    // But usually process.env.API_KEY is injected.
    // If it's missing, we might throw to trigger the UI catch block.
    throw new Error("API_KEY_MISSING");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    console.log("Starting Veo generation with prompt:", prompt);
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '1080p',
        aspectRatio: '16:9'
      }
    });

    while (!operation.done) {
      console.log("Veo generation in progress...");
      await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5 seconds
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    
    if (!downloadLink) {
        console.error("No video URI returned");
        return null;
    }

    // Fetch the actual video bytes to create a local blob URL for smooth playback
    const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
    
    if (!videoResponse.ok) {
        throw new Error(`Failed to fetch video content: ${videoResponse.statusText}`);
    }

    const blob = await videoResponse.blob();
    return URL.createObjectURL(blob);

  } catch (error: any) {
    console.error("Error generating Veo video:", error);
    // Re-throw if it's an API key issue so the UI can prompt re-selection
    if (error.message?.includes('API key expired') || error.toString().includes('API key expired') || error.toString().includes('400')) {
        throw new Error("API_KEY_EXPIRED");
    }
    return null;
  }
};
