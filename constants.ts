
import { Project, TeamMember, NavItem, Page } from './types';

export const COLORS = {
  earthyGreen: '#777c62',
  softCream: '#f0ece2',
  coolGrey: '#bbbcb8',
  warmSand: '#d9c7b0',
  goldenTan: '#b99668',
  taupe: '#beb8b0',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', page: Page.HOME },
  { label: 'Gallery', page: Page.GALLERY },
  { label: 'Studio', page: Page.ABOUT },
  { label: 'Contact', page: Page.CONTACT },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Keowee Sanctuary",
    location: "Lake Keowee, SC",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
    description: "A modern sanctuary blending slate stone with warm oak interiors and panoramic water views.",
    category: "Lake"
  },
  {
    id: 2,
    title: "Highlands Cliffside",
    location: "Highlands, NC",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
    description: "Mountain texture meets minimalist luxury in this estate perched above the canopy.",
    category: "Mountain"
  },
  {
    id: 3,
    title: "Asheville Modern",
    location: "Asheville, NC",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
    description: "Floor-to-ceiling glass framing the Blue Ridge Mountains with bespoke leather furnishings.",
    category: "Mountain"
  },
  {
    id: 4,
    title: "Oconee Waters",
    location: "Lake Oconee, GA",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop",
    description: "Expansive outdoor living spaces designed for sunset views and lakeside leisure.",
    category: "Lake"
  },
  {
    id: 5,
    title: "Blue Ridge Estate",
    location: "Blue Ridge, GA",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
    description: "Timeless stone grandeur with contemporary interior finishes and woven textures.",
    category: "Estate"
  },
  {
    id: 6,
    title: "Tocas Creek",
    location: "Upstate SC",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2187&auto=format&fit=crop",
    description: "A renovation focusing on natural light and organic material palettes.",
    category: "Estate"
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Elena Vance",
    role: "Principal Architect",
    bio: "Bringing 20 years of European design sensibility to the Blue Ridge Mountains.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop"
  },
  {
    name: "Julian Thorne",
    role: "Lead Interior Designer",
    bio: "Specializing in textile sourcing and bespoke furniture design.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop"
  }
];
