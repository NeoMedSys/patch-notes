import { PatchVersion } from "@/types/patch-notes";

export const patch: PatchVersion = {
  version: "v1.5.1b - B1",
  date: "2025-05-28",
  title: "",
  summary: [
    { content: "Some optimization and a hotfix for forced logout.", type: "highlight" },
  ],
  additionalNotes: [
    {
      title: "Development Updates",
      items: [
        "We added some QoL features and fixes",
      ]
    }
  ],
  isUpcoming: false,
  authors: {
    patch: [
      { 
        id: 'martin',
      },
      { 
        id: 'pontus',
      },

    ],
    closingRemarks: [
      {
        id: 'martin',
        remarks: "Horses love grass"
      },
    ]
  },
  items: [
    { 
      tags: [
        { label: "added", variant: "emerald" },
        { label: "fixed", variant: "orange" },
        { label: "viewer", variant: "cyan" },
      ],
      content: "UX cleanup in viewer",
      items: [
        "Smoother painting in the viewer",
        "Quicker save mask",

      ],
    },
    {
      tags: [
        { label: "platform", variant: "cyan" },
      ],
      content: "Added longer timeout for forced logout.",
      items: [],
    },
  ]
};