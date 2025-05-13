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
      },
      { 
        id: 'katarina',
        remarks: "Patience bring roses 🌹"
      }
    ],
    closingRemarks: [
      {
        id: 'jon',
        remarks: "We are finally starting to see some stability issues resolved and some long awaited features are starting to be implemented. Thanks for all the patience and support! :)"
      }
    ]
  },
  items: [
    { 
      tags: [
        { label: "fixed", variant: "sky" },
        { label: "backend", variant: "amber" },
      ],
      content: "Fixed an issue with the process order for models in neoml/gingerbread format"
    },
    { 
      tags: [
        { label: "added", variant: "emerald" },
        { label: "model", variant: "cyan" },
      ],
      content: "Added Viola 3.1.0 model",
      image: {
        src: "/images/viola.png",
        alt: "Viola model",
        caption: "The new Viola 3.1.0 model offers improved performance"
      }
    },
    
    { 
      tags: [
        { label: "added", variant: "emerald" },
        { label: "improved", variant: "orange" },
        { label: "viewer", variant: "slate" },
      ],
      items: [
        "Added slice indicators for labels. You can now see which slices have been labeled and you can also click them to jump to the slice.",
        "Ghost label interaction. If you miss a label making the label list non-consecutive, you can now click the label to create a new.",
        "Now working template in the viewer. You can now remap labels and we have better indicator for misaligned labels.",
      ],
      images: [
        {
          src: "/images/ghost.png",
          alt: "Ghost label interaction",
          caption: "New ghost label interaction allows you to create a new label if you miss one"
        },
        {
          src: "/images/slice_indicators.png",
          alt: "Slice indicators",
          caption: "Slice indicators show which slices have been labeled following the same label color palette."
        },
        {
          src: "/images/remapping.png",
          alt: "Remapping labels",
          caption: "New remapping labels feature allows you to remap labels in the viewer"
        },
        {
          src: "/images/template.png",
          alt: "Template in the viewer",
          caption: "New template in the viewer allows for template control in the viewer"
        },
      ]
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