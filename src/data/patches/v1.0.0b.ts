import { PatchVersion } from "@/types/patch-notes";

export const patch: PatchVersion = {
  version: "v1.0.0b - B1",
  date: "2025-04-30",
  title: "First official release notes of NeoMedSys",
  summary: [
    { content: "Initial beta release focusing on core backend functionality and improving validation processes.", type: "highlight" },
    { content: "This release includes the addition of a new button for removing users from projects." }
  ],
  additionalNotes: [
    {
      title: "Team Updates",
      items: [
        "Half of the development team is currently on vacation.",
        "While we will maintain basic support through Slack, please expect slower rollouts and response times.",
        "Regular development pace will resume by mid-May.",
        "We have also done a lot of data migration, if there are any other projects that needs to be migrated please give us a message on slack"
      ]
    }
  ],
  authors: {
    patch: [
      { 
        id: 'martin',
        remarks: "Initial implementation of user management features and validation improvements"
      }
    ],
    closingRemarks: [
      {
        id: 'pontus',
        remarks: "This marks our first beta release. While there are still some known issues, the core functionality is stable and ready for testing. The team has done an excellent job implementing the critical features."
      }
    ]
  },
  items: [
    { tags: [{ label: "added", variant: "default" }, { label: "backend", variant: "default" }], content: "Remove user from project endpoint" },
    { tags: [{ label: "added", variant: "default" }, { label: "frontend", variant: "default" }], content: "Remove user from project button" },
    { tags: [{ label: "improved", variant: "default" }, { label: "backend", variant: "default" }], content: "Validation endpoint for better logging and response" },
    { tags: [{ label: "improved", variant: "default" }, { label: "frontend", variant: "default" }], content: "You will now open series as a new tab using the open button" },
    { tags: [{ label: "fixed", variant: "default" }, { label: "backend", variant: "default" }], content: "Bug where it didn't handle the validation of images properly with respect to shape size." }
  ]
};