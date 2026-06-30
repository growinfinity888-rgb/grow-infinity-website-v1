export interface Service {
  id: string;
  slug: string;
  title: string;
  category: 'Formation' | 'Corporate Services' | 'Financial' | 'Visas';
  shortDesc: string;
  iconName: string;
  
  // AEO & RAG Fields
  summary: string;
  definition: string;
  whoIsItFor: string[];
  benefits: string[];
  requirements: string[];
  documents: string[];
  baseCost: string;
  timeline: string;
  commonMistakes: string[];
  whyGrowInfinity: string[];
  
  relatedServices: string[]; // slugs
  relatedLocations: string[]; // country/city names
  externalReferences: string[];
  faqs: { question: string; answer: string }[];
}

export interface CountryData {
  id: string;
  name: string;
  slug: string;
  capital: string;
  currency: string;
  timeline: string;
  rating: string;
  description: string;
  benefits: string[];
  taxRate: string;
  minCapital: string;
  locations: string[]; // e.g. ["Dubai", "Abu Dhabi", "Sharjah"]
  popularStructure: string;
}

export interface Article {
  slug: string;
  category: 'Business Setup' | 'Corporate Tax' | 'Golden Visa' | 'Accounting' | 'Business Banking' | 'Compliance' | 'Saudi Arabia' | 'Qatar' | 'India';
  title: string;
  summary: string;
  content: string; // Markdown or rich HTML text
  author: string;
  date: string;
  readTime: string;
  
  // LLM / RAG chunking structure
  ragSummary: string;
  entityFocus: string[];
  keyTakeaways: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  logoText: string;
  content: string;
  rating: number;
  setupType: string;
  location: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Setup' | 'Tax' | 'Visa' | 'Banking' | 'Compliance';
}
