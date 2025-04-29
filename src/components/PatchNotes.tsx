import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PatchItem {
  type: 'added' | 'fixed' | 'improved' | 'removed';
  service: 'backend' | 'frontend' | 'devops' | 'database';
  content: string;
}

interface PatchVersion {
  version: string;
  date: string;
  title: string;
  summary: string;
  items: PatchItem[];
}

export const patchNotes: PatchVersion[] = [
  {
    version: "v1.0.0b - B1",
    date: "2025-04-29",
    title: "First official release notes of NeoMedSys",
    summary: "Initial beta release focusing on core backend functionality and improving validation processes. This update introduces user management features and fixes critical validation issues.",
    items: [
      { type: "added", service: "backend", content: "Remove user from project endpoint" },
      { type: "improved", service: "backend", content: "Validation endpoint for better logging and response" },
      { type: "fixed", service: "frontend", content: "Bug where it didn't handle the validation of images properly with respect to shape size." },
    ]
  },
];

const typeColors = {
  added: "bg-gradient-to-br from-green-900/40 to-green-500/20 text-green-300 border-2 border-green-400/50 shadow-[0_0_15px_rgba(34,197,94,0.3)] font-cyber tracking-wider uppercase",
  fixed: "bg-gradient-to-br from-blue-900/40 to-blue-500/20 text-blue-300 border-2 border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] font-cyber tracking-wider uppercase",
  improved: "bg-gradient-to-br from-[#003333]/40 to-cyber-neon/20 text-cyber-neon border-2 border-cyber-neon/50 shadow-[0_0_15px_rgba(0,255,255,0.3)] font-cyber tracking-wider uppercase",
  removed: "bg-gradient-to-br from-red-900/40 to-red-500/20 text-red-300 border-2 border-red-400/50 shadow-[0_0_15px_rgba(239,68,68,0.3)] font-cyber tracking-wider uppercase",
};

const typeLabels = {
  added: "ADDED",
  fixed: "FIXED",
  improved: "IMPROVED",
  removed: "REMOVED",
};

const serviceColors = {
  backend: "bg-gradient-to-tl from-purple-900/30 via-purple-800/20 to-purple-700/10 text-purple-300 border border-purple-400/30 font-cyber-alt tracking-wide",
  frontend: "bg-gradient-to-tl from-amber-900/30 via-amber-800/20 to-amber-700/10 text-amber-300 border border-amber-400/30 font-cyber-alt tracking-wide",
  devops: "bg-gradient-to-tl from-orange-900/30 via-orange-800/20 to-orange-700/10 text-orange-300 border border-orange-400/30 font-cyber-alt tracking-wide",
  database: "bg-gradient-to-tl from-cyan-900/30 via-cyan-800/20 to-cyan-700/10 text-cyan-300 border border-cyan-400/30 font-cyber-alt tracking-wide",
};

const serviceLabels = {
  backend: "BACKEND",
  frontend: "FRONTEND",
  devops: "DEVOPS",
  database: "DATABASE",
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
              <div className="pt-2 space-y-4">
                <div>
                  <h4 className="font-cyber text-xs text-cyber-neon/70 mb-2 tracking-wider">&gt; SUMMARY</h4>
                  <p className="text-white/70 font-cyber-alt border-l-2 border-cyber-neon/30 pl-4 py-2 bg-gradient-to-r from-cyber-neon/5 to-transparent">
                    {patch.summary}
                  </p>
                </div>
                <div>
                  <h4 className="font-cyber text-xs text-cyber-neon/70 mb-2 tracking-wider">&gt; CHANGES</h4>
                  <div className="space-y-3">
                    {patch.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className={cn(
                          "px-3 py-1.5 rounded-md text-xs font-bold min-w-[100px] text-center",
                          typeColors[item.type]
                        )}>
                          {typeLabels[item.type]}
                        </div>
                        <div className={cn(
                          "px-3 py-1 rounded-sm text-xs font-medium min-w-[100px] text-center",
                          serviceColors[item.service]
                        )}>
                          {serviceLabels[item.service]}
                        </div>
                        <p className="text-white/80 pt-0.5">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PatchNotes;
