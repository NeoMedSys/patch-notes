export interface Tag {
  label: string;
  variant?: 'default' | 'emerald' | 'sky' | 'cyan' | 'red' | 'purple' | 'amber' | 'orange' | 'slate';
}

export interface PatchItem {
  tags: Tag[];
  content: string;
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