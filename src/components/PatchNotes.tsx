import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { authors, Author } from "@/data/authors";

interface PatchItem {
  type: 'added' | 'fixed' | 'improved' | 'removed';
  service: 'backend' | 'frontend' | 'devops' | 'database';
  content: string;
}

interface SummaryItem {
  content: string;
  type?: 'highlight' | 'warning' | 'info';
}

interface NoteSection {
  title: string;
  items: string[];
}

interface PatchVersion {
  version: string;
  date: string;
  title: string;
  summary: SummaryItem[];
  additionalNotes?: NoteSection[];
  isUpcoming?: boolean;
  authorIds: string[];
  items: PatchItem[];
}

export const patchNotes: PatchVersion[] = [
  {
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
      { type: "added", service: "frontend", content: "Sorting for patient names and protocol columns" },
      { type: "fixed", service: "backend", content: "Fatty model had wrong order on labels in the database" },
      { type: "fixed", service: "backend", content: "Template had an issue on the pacs computer with env variables making it not work properly."},
      { type: "fixed", service: "backend", content: "A problem with validation which was too strict with regards to unnecessary info"},
      { type: "improved", service: "frontend", content: "Optimized the datalist in the viewer, improved loading times and reduced memory usage." },
    ]
  },
  {
    version: "v1.0.0b - B1",
    date: "2025-04-30",
    title: "First official release notes of NeoMedSys",
    summary: [
      { content: "Initial beta release focusing on core backend functionality and improving validation processes.", type: "highlight" },
      { content: "This release includes the addition of a new button for removing users from projects." }
    ],
    additionalNotes: [
      {
        title: "Team Updates",
        items: [
          "Half of the development team is currently on vacation.",
          "While we will maintain basic support through Slack, please expect slower rollouts and response times.",
          "Regular development pace will resume by mid-May.",
          "We have also done a lot of data migration, if there are any other projects that needs to be migrated please give us a message on slack"
        ]
      }
    ],
    authorIds: ['martin'],
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
    <div className="w-full max-w-[2000px] mx-2 md:mx-4 overflow-x-hidden">
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
            <AccordionTrigger className="px-4 py-4 hover:no-underline group">
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left gap-2">
                <div className="flex items-center gap-4">
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
            <AccordionContent className="px-4 pb-4">
              <div className="pt-2 grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6">
                {/* Left Column - Authors, Summary and Notes */}
                <div className="space-y-4 max-w-full">
                  <div className="flex flex-wrap items-start gap-3 p-3 bg-gradient-to-r from-cyber-neon/10 to-transparent rounded-md border border-cyber-neon/20">
                    {patch.authorIds.map((authorId) => {
                      const author = authors[authorId];
                      return (
                        <div key={authorId} className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src={author.avatarUrl} alt={author.name} />
                            <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="text-sm font-cyber text-white/90">{author.name}</span>
                            <Badge 
                              variant="secondary" 
                              className="relative mt-1 w-fit font-cyber tracking-wider uppercase bg-gradient-to-r from-[#1a2e3d] to-[#0f172a] text-white/90 border border-cyber-neon/20 shadow-sm"
                            >
                              {author.role}
                            </Badge>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="max-w-full">
                    <h4 className="font-cyber text-xs text-cyber-neon/70 mb-2 tracking-wider">&gt; SUMMARY</h4>
                    <div className="space-y-2">
                      {patch.summary.map((summaryItem, summaryIndex) => (
                        <p key={summaryIndex} className={cn(
                          "text-white/70 font-cyber-alt border-l-2 pl-4 py-2 bg-gradient-to-r from-cyber-neon/5 to-transparent",
                          summaryItem.type === "highlight" ? "border-cyber-neon/30" : "",
                          summaryItem.type === "warning" ? "border-orange-400/30" : "",
                          summaryItem.type === "info" ? "border-blue-400/30" : ""
                        )}>
                          {summaryItem.content}
                        </p>
                      ))}
                    </div>
                  </div>
                  {patch.additionalNotes && (
                    <div className="max-w-full">
                      <h4 className="font-cyber text-xs text-cyber-neon/70 mb-2 tracking-wider">&gt; ADDITIONAL NOTES</h4>
                      {patch.additionalNotes.map((noteSection, noteIndex) => (
                        <div key={noteIndex} className="space-y-2">
                          <h5 className="text-sm font-cyber-alt text-cyber-neon/70">{noteSection.title}</h5>
                          <ul className="list-disc pl-6 space-y-1">
                            {noteSection.items.map((noteItem, itemIndex) => (
                              <li key={itemIndex} className="text-white/70 font-cyber-alt">{noteItem}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Column - Changes */}
                <div className="max-w-full">
                  <h4 className="font-cyber text-xs text-cyber-neon/70 mb-4 tracking-wider">&gt; CHANGES</h4>
                  <div className="space-y-6">
                    {patch.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex flex-col sm:flex-row items-start gap-2 p-3 bg-gradient-to-r from-cyber-neon/5 to-transparent rounded-md">
                        <div className="flex flex-wrap items-center gap-2 min-w-[170px] shrink-0">
                          <div className={cn(
                            "px-2 py-1 rounded-md text-xs font-bold min-w-[80px] text-center",
                            typeColors[item.type]
                          )}>
                            {typeLabels[item.type]}
                          </div>
                          <div className={cn(
                            "px-2 py-1 rounded-sm text-xs font-medium min-w-[80px] text-center",
                            serviceColors[item.service]
                          )}>
                            {serviceLabels[item.service]}
                          </div>
                        </div>
                        <p className="text-white/80 py-1 flex-1">{item.content}</p>
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
