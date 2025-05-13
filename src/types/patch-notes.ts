export interface Tag {
  label: string;
  variant?: 'default' | 'emerald' | 'sky' | 'cyan' | 'red' | 'purple' | 'amber' | 'orange' | 'slate';
}

export interface PatchImage {
  src: string;
  alt: string;
  caption?: string;
  width?: number; // optional width in pixels
  height?: number; // optional height in pixels
}

export interface PatchItem {
  tags: Tag[];
  content?: string;
  items?: string[];
  image?: PatchImage; // Single image (for backward compatibility)
  images?: PatchImage[]; // Support for multiple images
}

export interface SummaryItem {
  content: string;
  type?: 'highlight' | 'warning' | 'info';
}

export interface NoteSection {
  title: string;
  items: string[];
}

export interface AuthorContribution {
  id: string;
  remarks?: string;
}

export interface PatchAuthors {
  patch: AuthorContribution[];
  review?: AuthorContribution[];
  closingRemarks?: AuthorContribution[];
}

export interface PatchVersion {
  version: string;
  date: string;
  title: string;
  summary: SummaryItem[];
  additionalNotes?: NoteSection[];
  isUpcoming?: boolean;
  authors: PatchAuthors;
  items: PatchItem[];
}