export type ThemeMode = 'sepia' | 'newsprint' | 'night' | 'broadside';

export type PhotoFilter = 'halftone' | 'vintage' | 'modern';

export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Front Page' | 'Lead Story' | 'Investigative' | 'Tech & Science' | 'Editorial' | 'Special Report';
  author: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  image?: string;
  caption?: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  demoUrl?: string;
  githubUrl?: string;
  architectureNotes?: string[];
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  subtitle: string;
  skills: {
    name: string;
    level: number; // 1-100
    ticker: string; // e.g. $REACT
    change: string; // e.g. +14.2%
    isUp: boolean;
    experienceYears: number;
    highlight: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  headline: string;
  achievements: string[];
  technologies: string[];
}

export interface ClassifiedAd {
  id: string;
  title: string;
  category: string;
  priceTag?: string;
  description: string;
  contactEmail: string;
  badge?: string;
}

export interface CrosswordClue {
  number: number;
  direction: 'across' | 'down';
  clue: string;
  answer: string;
  startRow: number;
  startCol: number;
}

export interface LetterToEditor {
  id: string;
  sender: string;
  role: string;
  organization: string;
  location: string;
  date: string;
  content: string;
  rating?: number;
}
