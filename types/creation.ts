export interface CreationMetric {
  label: string;
  value: string;
}

export interface CreationBreakdown {
  title: string;
  description: string;
  highlights: string[];
}

export interface Creation {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  heroImage: string;
  overview: string;
  detailedBreakdown: CreationBreakdown[];
  technologies: string[];
  metrics?: CreationMetric[];
  liveUrl?: string;
  githubUrl?: string;
  publishedDate?: string;
}
