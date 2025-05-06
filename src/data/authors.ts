export type AuthorType = 'patch' | 'closing-remarks' | 'review';

export type Role = 'ML-LEAD'| 'DEVELOPER' | 'LEAD' | 'PROJECT_MANAGER' | 'REVIEWER' | 'QA' | 'ARCHITECT';

export interface Author {
  id: string;
  name: string;
  roles: Role[];
  type: AuthorType;
  avatarUrl?: string;
  remarks?: string;
}

export const authors: Record<string, Author> = {
  martin: {
    id: 'martin',
    name: "Martin Soria Røvang",
    roles: ["ML-LEAD", "DEVELOPER"],
    type: "patch",
    avatarUrl: "/users/martin.png"
  },
  pontus: {
    id: 'pontus',
    name: "Pontus Hagerth",
    roles: ["DEVELOPER"],
    type: "review",
    avatarUrl: "/users/pontus.png",
  },
  jon: {
    id: 'jon',
    name: "Jon E. Nesvold",
    roles: ["DEVELOPER", "LEAD"],
    type: "review",
    avatarUrl: "/users/jon.png",
  },
    elakkyen: {
      id: 'elakkyen',
      name: "Elakkyen Murugesu ",
      roles: ["DEVELOPER"],
      type: "review",
      avatarUrl: "/users/elakkyen.png",
    },
    katarina: {
      id: 'katarina',
      name: "Katarina  Kubinova",
      roles: ["DEVELOPER"],
      type: "review",
      avatarUrl: "/users/katarina.png",
    }
};