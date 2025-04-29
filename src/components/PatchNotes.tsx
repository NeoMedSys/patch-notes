
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PatchItem {
  type: 'added' | 'fixed' | 'improved' | 'removed';
  content: string;
}

interface PatchVersion {
  version: string;
  date: string;
  title: string;
  items: PatchItem[];
}

export const patchNotes: PatchVersion[] = [
  {
    version: "v1.0.0b - B1",
    date: "2025-04-29",
    title: "First official release notes of NeoMedSys",
    items: [
      { type: "added", content: "Remove user from project endpoint" },
      { type: "improved", content: "Validation endpoint for better logging and response" },
      { type: "fixed", content: "Bug where it didn't handle the validation of images properly with respect to shape size." },
    ]
  },
];

const typeColors = {
  added: "bg-green-500/20 text-green-500 border-green-500/50",
  fixed: "bg-blue-500/20 text-blue-500 border-blue-500/50",
  improved: "bg-cyber-neon/20 text-cyber-neon border-cyber-neon/50",
  removed: "bg-red-500/20 text-red-500 border-red-500/50",
};

const typeLabels = {
  added: "ADDED",
  fixed: "FIXED",
  improved: "IMPROVED",
  removed: "REMOVED",
};

const PatchNotes = () => {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="space-y-6">
        {patchNotes.map((patch, index) => (
          <AccordionItem
            key={patch.version}
            value={patch.version}
            className={cn(
              "cyber-panel rounded-md overflow-hidden",
              index === 0 ? "border-cyber-neon/50" : "border-opacity-30"
            )}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline group">
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left gap-2">
                <div className="flex items-center">
                  <span className={cn(
                    "font-cyber text-xl md:text-2xl mr-3",
                    index === 0 ? "cyber-text-glow" : "text-white"
                  )}>
                    {patch.version}
                  </span>
                  {index === 0 && (
                    <Badge className="bg-cyber-neon text-cyber-darker font-bold">LATEST</Badge>
                  )}
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <h3 className="text-lg font-cyber-alt font-medium text-white/90">
                    {patch.title}
                  </h3>
                  <span className="text-sm text-muted-foreground font-cyber">
                    {patch.date}
                  </span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="pt-2 space-y-3">
                {patch.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div className={cn(
                      "px-2 py-1 rounded border text-xs font-bold min-w-[100px] text-center",
                      typeColors[item.type]
                    )}>
                      {typeLabels[item.type]}
                    </div>
                    <p className="text-white/80 pt-0.5">{item.content}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PatchNotes;
