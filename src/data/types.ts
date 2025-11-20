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

export interface NavItem {
  label: string;
  href: string;
}
