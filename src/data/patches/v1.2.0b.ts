import { PatchVersion } from "@/types/patch-notes";

export const patch: PatchVersion = {
  version: "v1.2.0b - B1",
  date: "2025-05-13",
  title: "",
  summary: [
    { content: "In this patch we include some quality of life updates in addition to some fixes.", type: "highlight" },
  ],
  additionalNotes: [
    {
      title: "Development Updates",
      items: [
        "We continue to do some additional migrations and small uploads of data.",
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
      { 
        id: 'elakkyen',
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
        { label: "fixed", variant: "sky" },
        { label: "backend", variant: "amber" },
      ],
      content: "Fixed an issue with the process order for models"
    },
    { 
      tags: [
        { label: "added", variant: "emerald" },
        { label: "model", variant: "cyan" },
      ],
      content: "Added Viola 3.1.0 model"
    },
    
    { 
      tags: [
        { label: "updated", variant: "orange" },
        { label: "viewer", variant: "slate" },
      ],
      content: "Added slice indicators for labels. You can now see which slices have been labeled and you can also click them to jump to the slice."
    },
    { 
      tags: [
        { label: "improved", variant: "orange" },
        { label: "no-dicom-etl", variant: "sky" },
      ],
      content: "Fixed importing data to NeoMedSys, adaptation to new database tables"
    },
  ]
};