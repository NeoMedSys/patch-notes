import { PatchVersion } from "@/types/patch-notes";

export const patch: PatchVersion = {
  version: "v1.4.0b - B1",
  date: "2025-05-14",
  title: "",
  summary: [
    { content: "UX cleanup in viewer with consolidated segmentation tools and new features", type: "highlight" },
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
        remarks: "After rain comes sunshine, and after another week of development we are back with a new patch."
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
        "Segmentation tools consolidated under the brush tool",
        "Fill and 3D fill, now with shortcuts to almost all settings",
        "Post-processing for fills and labels: fill holes and remove islands",
        "Shortcuts cheat sheet under help in viewerheader",
        "Gradient background in threshold histogram to make it more obvious what the segmentation target is",
        "3D object remove, remove connected objects (shortcut: ctrl+left mouse button)",
        "'Fill' as its own tool in toolbar. Now activated under brush."

      ],
      images: [
        {
          src: "/images/v1.40b/shortcuts.png",
          alt: "Shortcuts cheat sheet",
          caption: "New shortcuts cheat sheet available under help in the viewer header."
        }
      ]
    },
  ]
};