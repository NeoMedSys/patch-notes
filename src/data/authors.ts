export type AuthorType = 'patch' | 'closing-remarks' | 'review';

export interface Author {
  id: string;
  name: string;
  role: string;
  type: AuthorType;
  avatarUrl?: string;
  remarks?: string;
}

export const authors: Record<string, Author> = {
  martin: {
    id: 'martin',
    name: "Martin Soria Røvang",
    role: "DEVELOPER",
    type: "patch",
    avatarUrl: "/users/martin.png"
  },
  pontus: {
    id: 'pontus',
    name: "Pontus Hagerth",
    role: "DEVELOPER",
    type: "review",
    avatarUrl: "/users/pontus.png",
    remarks: "All changes have been tested and validated in the staging environment. The performance improvements are particularly noteworthy."
  },
  closingRemarks: {
    id: 'closingRemarks',
    name: "Closing Remarks",
    role: "DEVELOPER",
    type: "closing-remarks",
    remarks: "Thank you for your continued support and feedback."
  }
};