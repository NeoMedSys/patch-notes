import { PatchVersion } from "@/types/patch-notes";

export const patch: PatchVersion = {
  version: "v1.2.0b - B1",
  date: "2025-05-13",
  title: "",
  summary: [
    { content: "In this patch we include some quality of life updates in addition to some fixes.", type: "highlight" },
  ],
  // additionalNotes: [
  //   {
  //     title: "Development Updates",
  //     items: [
  //       "We will now start pushing updates every Tuesday.",
  //       "We are currently working to implement the project templates into the viewer, we know many are waiting for this so will try to get it done as soon as possible."
  //     ]
  //   }
  // ],
  isUpcoming: false,
  authors: {
    patch: [
      { 
        id: 'martin',
      },
      { 
        id: 'pontus',
      }
    ],
    closingRemarks: [
      {
        id: 'katarina',
        remarks: "No cake without work."
      }
    ]
  },
  items: [
    { 
      tags: [
        { label: "added", variant: "emerald" },
        { label: "frontend", variant: "amber" },
        { label: "ui", variant: "cyan" }
      ],
      content: "" 
    },
  ]
};