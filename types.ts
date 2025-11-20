
export interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
  description: string;
  category: 'Lake' | 'Mountain' | 'Estate';
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export enum Page {
  HOME = 'HOME',
  GALLERY = 'GALLERY',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT'
}

export interface NavItem {
  label: string;
  page: Page;
}

// AIStudio Window Interface Augmentation
declare global {
  interface AIStudio {
    hasSelectedApiKey(): Promise<boolean>;
    openSelectKey(): Promise<void>;
  }

  interface Window {
    aistudio?: AIStudio;
  }
}
