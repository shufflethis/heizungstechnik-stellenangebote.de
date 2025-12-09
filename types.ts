export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Ausbildung';
  salary: string;
  description: string;
  postedDate: string;
  tags: string[];
}

export interface ArticleSection {
  title: string;
  content: string; // HTML-like string or pure text
}

export interface NavItem {
  label: string;
  path: string;
}