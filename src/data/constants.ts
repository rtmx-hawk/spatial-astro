import { Project, TeamMember, NavItem } from './types';

export const COLORS = {
  earthyGreen: '#777c62',
  softCream: '#f0ece2',
  coolGrey: '#bbbcb8',
  warmSand: '#d9c7b0',
  goldenTan: '#b99668',
  taupe: '#beb8b0',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Studio', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Keowee Sanctuary",
    location: "Lake Keowee, SC",
    image: "/assets/spacejoy-9M66C_w_ToM-unsplash.jpg",
    description: "A modern sanctuary blending slate stone with warm oak interiors and panoramic water views.",
    category: "Lake"
  },
  {
    id: 2,
    title: "Highlands Cliffside",
    location: "Highlands, NC",
    image: "/assets/jason-wang-5MG8cQbw-T8-unsplash.jpg",
    description: "Mountain texture meets minimalist luxury in this estate perched above the canopy.",
    category: "Mountain"
  },
  {
    id: 3,
    title: "Asheville Modern",
    location: "Asheville, NC",
    image: "/assets/jason-wang-NxAwryAbtIw-unsplash.jpg",
    description: "Floor-to-ceiling glass framing the Blue Ridge Mountains with bespoke leather furnishings.",
    category: "Mountain"
  },
  {
    id: 4,
    title: "Oconee Waters",
    location: "Lake Oconee, GA",
    image: "/assets/inside-weather-Uxqlfigh6oE-unsplash.jpg",
    description: "Expansive outdoor living spaces designed for sunset views and lakeside leisure.",
    category: "Lake"
  },
  {
    id: 5,
    title: "Blue Ridge Estate",
    location: "Blue Ridge, GA",
    image: "/assets/spacejoy-h2_3dL9yLpU-unsplash.jpg",
    description: "Timeless stone grandeur with contemporary interior finishes and woven textures.",
    category: "Estate"
  },
  {
    id: 6,
    title: "Tocas Creek",
    location: "Upstate SC",
    image: "/assets/kam-idris-_HqHX3LBN18-unsplash.jpg",
    description: "A renovation focusing on natural light and organic material palettes.",
    category: "Estate"
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Elena Vance",
    role: "Principal Architect",
    bio: "Bringing 20 years of European design sensibility to the Blue Ridge Mountains.",
    image: "/assets/lisa-anna-3g4dEs9pZh4-unsplash.jpg"
  },
  {
    name: "Julian Thorne",
    role: "Lead Interior Designer",
    bio: "Specializing in textile sourcing and bespoke furniture design.",
    image: "/assets/minh-pham-OtXADkUh3-I-unsplash.jpg"
  }
];

export const HERO_IMAGES = [
  "/assets/spacejoy-9M66C_w_ToM-unsplash.jpg",
  "/assets/spacejoy-h2_3dL9yLpU-unsplash.jpg",
  "/assets/kam-idris-_HqHX3LBN18-unsplash.jpg"
];

export const CALLOUT_IMAGE = "/assets/aaron-huber-G7sE2S4Lab4-unsplash.jpg";
