export interface Author {
  id: string;
  name: string;
  role: string;
  avatarUrl?: string;
}

export const authors: Record<string, Author> = {
  martin: {
    id: 'martin',
    name: "Martin Soria Røvang",
    role: "DEVELOPER",
    avatarUrl: "/users/martin.png"
  },
  pontus: {
    id: 'pontus',
    name: "Pontus Hagerth",
    role: "DEVELOPER",
    avatarUrl: "/users/pontus.png"
  }
};