import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { authors } from "@/data/authors";
import { patchNotes } from "@/data/patches";
import type { Tag } from "@/types/patch-notes";

const getTagStyles = (tag: Tag) => {
  const variantMap = {
    emerald: "bg-emerald-500/10 border-emerald-400/50 text-emerald-300",
    sky: "bg-sky-500/10 border-sky-400/50 text-sky-300",
    cyan: "bg-cyan-500/10 border-cyan-400/50 text-cyan-300",
    red: "bg-red-500/10 border-red-400/50 text-red-300",
    purple: "bg-purple-500/10 border-purple-400/50 text-purple-300",
    amber: "bg-amber-500/10 border-amber-400/50 text-amber-300",
    orange: "bg-orange-500/10 border-orange-400/50 text-orange-300",
    slate: "bg-slate-500/10 border-slate-400/50 text-slate-300",
    default: "bg-cyber-darker border-cyber-neon/30 text-cyber-neon"
  };

  const baseStyles = "inline-flex items-center justify-center px-2 py-1 rounded text-[9px] font-bold shadow-sm backdrop-blur-sm transition-colors border tracking-wide";
  const variantStyle = tag.variant ? variantMap[tag.variant] : variantMap.default;
  
  return cn(baseStyles, variantStyle);
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
                  <h4 className="font-cyber text-xs text-cyber-neon/70 mb-3 tracking-wider">&gt; CHANGES</h4>
                  <div className="space-y-3">
                    {patch.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex flex-col gap-2 p-3 bg-gradient-to-r from-cyber-neon/5 to-transparent rounded-md border border-cyber-neon/10">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {item.tags.map((tag, tagIndex) => (
                            <div key={tagIndex} className={getTagStyles(tag)}>
                              {tag.label.toUpperCase()}
                            </div>
                          ))}
                        </div>
                        <p className="text-white/80 text-sm">{item.content}</p>
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
