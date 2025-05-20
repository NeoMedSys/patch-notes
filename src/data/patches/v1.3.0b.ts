import { PatchVersion } from "@/types/patch-notes";

export const patch: PatchVersion = {
  version: "v1.3.0b - B1",
  date: "2025-05-20",
  title: "",
  summary: [
    { content: "We are now going to go towards longer period of development between patches. We will be hotfixing things that need immediate attention, but will focus more on bigger features. We will now be patching every month instead.", type: "highlight" },
  ],
  additionalNotes: [
    {
      title: "Development Updates",
      items: [
        "We added some QoL features and fixes",
      ]
    }
  ],
  isUpcoming: true,
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
      },
      { 
        id: 'katarina',
      }
    ],
    closingRemarks: [
      {
        id: 'jon',
        remarks: ""
      }
    ]
  },
  items: [
    { 
      tags: [
        { label: "fixed", variant: "sky" },
        { label: "backend", variant: "amber" },
      ],
      content: "Integration for keycloak."
    },
    { 
      tags: [
        { label: "update", variant: "orange" },
        { label: "model", variant: "cyan" },
      ],
      content: "Updated Viola 3.1.0 model, it had some issues in the code.",
    },
    { 
      tags: [
        { label: "added", variant: "emerald" },
        { label: "fixed", variant: "orange" },
        { label: "viewer", variant: "cyan" },
      ],
      items: [
        "Window thresholding by pressing and holding the middle mouse button",
        "Clicking a label in the label list will now toggle highlight the border of the segmentation in the viewer.",
        "Fixed issue where there was a limited amount of images that could be loaded in before reaching a maximum memory limit.",
        "When using windowing preset, the preset name is displayed instead of custom as it was before.",
      ],
      images: [
        {
          src: "/images/v1.30b/highlight.png",
          alt: "Highlighting segmentation",
          caption: "Clicking a label in the label list will now toggle highlight the border of the segmentation in the viewer."
        },
        {
          src: "/images/v1.30b/labelist_highlight.png",
          alt: "Label list highlight",
          caption: "You can see the label list highlight in the viewer.",
        },
      ],
    },
  ]
};