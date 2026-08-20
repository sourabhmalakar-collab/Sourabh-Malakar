export interface Project {
  id: string;
  title: string;
  category: string;
  categorySlug: 'food' | 'product' | 'levitation' | 'beverage' | 'commercial';
  client: string;
  year: string;
  heroImage: string;
  thumbnailImage: string;
  tagline: string;
  overview: string;
  creativeApproach: string;
  lightingStrategy: string;
  gallery: {
    url: string;
    caption: string;
    aspect?: 'landscape' | 'portrait' | 'square';
  }[];
  behindTheScenes: {
    url: string;
    title: string;
    description: string;
  }[];
  techSpecs: {
    camera: string;
    lens: string;
    lighting: string;
    shutter: string;
    aperture: string;
    iso: string;
  };
  deliverables: string[];
  results: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  idealFor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  projectType: string;
}

export interface BTSItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technique: string;
  equipment: string;
}

export interface InquiryFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  projectType: string;
  timeline: string;
  budgetRange: string;
  message: string;
}
