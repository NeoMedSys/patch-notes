import { PatchVersion } from "@/types/patch-notes";

export const patch: PatchVersion = {
  version: "v1.1.0b - B1",
  date: "2025-05-05",
  title: "Small fixes",
  summary: [
    { content: "In this patch we focused on quality of life improvements and small fixes.", type: "highlight" },
    { content: "In the new version we have stricted handling of things like bodyparts and such, but the migrated data did not go through this process (because it's not really the official way of adding data). But we have manually fixes some issues with this in some projects." }
  ],
  additionalNotes: [
    {
      title: "Development Updates",
      items: [
        "We will now start pushing updated every Tuesday.",
        "We are currently working to implement the project templates into the viewer, we know many are waiting for this so will try to get it done as soon as possible."
      ]
    }
  ],
  isUpcoming: true,
  authorIds: ['martin'],
  items: [
    { 
      tags: [
        { label: "added", variant: "emerald" },
        { label: "frontend", variant: "amber" },
        { label: "ui", variant: "cyan" }
      ],
      content: "Sorting for patient names and protocol columns" 
    },
    { 
      tags: [
        { label: "fixed", variant: "sky" },
        { label: "backend", variant: "purple" },
        { label: "database", variant: "cyan" }
      ],
      content: "Fatty model had wrong order on labels in the database" 
    },
    { 
      tags: [
        { label: "fixed", variant: "sky" },
        { label: "backend", variant: "purple" },
        { label: "critical", variant: "red" }
      ],
      content: "Template had an issue on the pacs computer with env variables making it not work properly."
    },
    { 
      tags: [
        { label: "fixed", variant: "sky" },
        { label: "backend", variant: "purple" },
        { label: "validation", variant: "orange" }
      ],
      content: "A problem with validation which was too strict with regards to unnecessary info"
    },
    { 
      tags: [
        { label: "improved", variant: "cyan" },
        { label: "backend", variant: "amber" },
        { label: "performance", variant: "emerald" }
      ],
      content: "Optimized the datalist in the viewer, improved loading times and reduced memory usage." 
    },
    { 
      tags: [
        { label: "added", variant: "cyan" },
        { label: "backend", variant: "amber" },
        { label: "frontend", variant: "emerald" }
      ],
      content: "Threshold and windowing settings can now be saved in the viewer and will be set for the project." 
    }
  ]
};