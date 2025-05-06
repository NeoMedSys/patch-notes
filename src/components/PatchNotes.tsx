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
  additionalNotes?: string;
  isUpcoming?: boolean;
  items: PatchItem[];
}

export const patchNotes: PatchVersion[] = [
  {
    version: "v1.1.0b - B1",
    date: "2025-05-05",
    title: "Small fixes",
    summary: "In this patch we focused on quality of life improvements and small fixes. In the new version we have stricted handling of things like bodyparts and such, but the migrated data did not go through this process (because it's not really the official way of adding data).",
    additionalNotes: "There are some issues where some migrated images won't open in the viewer, this is because of faulty ratio handling with dimension of 1 (slices), we are looking into this.. We will now also start pushing updated every Tuesday.",
    isUpcoming: true,
    items: [
      { type: "added", service: "frontend", content: "Sorting for patient names and protocol columns" },
      { type: "fixed", service: "backend", content: "Fatty model having wrong order on labels in the database" },
      { type: "fixed", service: "backend", content: "Template had an issue on the pacs computer with env variables making it not work properly."},
      { type: "fixed", service: "frontend", content: "A problem with validation which was too strict with regards to unnecessary info"},
    ]
  },
  {
    version: "v1.0.0b - B1",
    date: "2025-04-30",
    title: "First official release notes of NeoMedSys",
    summary: "Initial beta release focusing on core backend functionality and improving validation processes. This release includes the addition of a new button for removing users from projects.",
    additionalNotes: "Half of the development team is currently on vacation. While we will maintain basic support through Slack, please expect slower rollouts and response times. Regular development pace will resume by mid-May. We have also done a lot of data migration, if there are any other projects that needs to be migrated please give us a message on slack",
    items: [
      { type: "added", service: "backend", content: "Remove user from project endpoint" },
      { type: "added", service: "frontend", content: "Remove user from project button" },
      { type: "improved", service: "backend", content: "Validation endpoint for better logging and response" },
      { type: "improved", service: "frontend", content: "You will now open series as a new tab using the open button" },
      { type: "fixed", service: "backend", content: "Bug where it didn't handle the validation of images properly with respect to shape size." },
    ]
  },
];

const typeColors = {
  added: "bg-gradient-to-br from-green-900/40 to-green-500/20 text-green-300 border-2 border-green-400/50 font-cyber tracking-wider uppercase",
  fixed: "bg-gradient-to-br from-blue-900/40 to-blue-500/20 text-blue-300 border-2 border-blue-400/50 font-cyber tracking-wider uppercase",
  improved: "bg-gradient-to-br from-[#003333]/40 to-cyber-neon/20 text-cyber-neon border-2 border-cyber-neon/50 font-cyber tracking-wider uppercase",
  removed: "bg-gradient-to-br from-red-900/40 to-red-500/20 text-red-300 border-2 border-red-400/50 font-cyber tracking-wider uppercase",
};

const typeLabels = {
  added: "ADDED",
  fixed: "FIXED",
  improved: "IMPROVED",
  removed: "REMOVED",
  upcoming: "UPCOMING",
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
              index === 0 ? "border-cyber-neon/50" : "border-opacity-30",
              patch.isUpcoming ? "border-orange-400/50" : ""
            )}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline group">
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left gap-2">
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "font-cyber text-xl md:text-2xl",
                    index === 0 ? "cyber-text-glow" : "text-white",
                    patch.isUpcoming ? "text-orange-400" : ""
                  )}>
                    {patch.version}
                  </span>
                  {index === 0 && !patch.isUpcoming && (
                    <Badge className="bg-cyber-neon text-cyber-darker font-bold">LATEST</Badge>
                  )}
                  {patch.isUpcoming && (
                    <Badge className="bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold">UPCOMING</Badge>
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
                {patch.additionalNotes && (
                  <div>
                    <h4 className="font-cyber text-xs text-cyber-neon/70 mb-2 tracking-wider">&gt; ADDITIONAL NOTES</h4>
                    <p className="text-white/70 font-cyber-alt border-l-2 border-cyber-neon/30 pl-4 py-2 bg-gradient-to-r from-cyber-neon/5 to-transparent">
                      {patch.additionalNotes}
                    </p>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PatchNotes;
