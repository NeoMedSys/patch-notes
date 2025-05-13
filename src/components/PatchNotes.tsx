import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { authors, AuthorType } from "@/data/authors";
import { patchNotes } from "@/data/patches";
import type { Tag, AuthorContribution } from "@/types/patch-notes";
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { Download } from "lucide-react";

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

const AuthorSection = ({ type, authors: authorContributions }: { type: AuthorType; authors: AuthorContribution[] }) => {
  const gradientMap = {
    'patch': 'from-cyber-neon/10 to-transparent border-cyber-neon/20',
    'review': 'from-emerald-500/10 to-transparent border-emerald-500/20',
    'closing-remarks': 'from-purple-500/10 to-transparent border-purple-500/20'
  };

  const titleMap = {
    'patch': 'PATCH AUTHORS',
    'review': 'REVIEWED BY',
    'closing-remarks': 'CLOSING REMARKS'
  };

  const glowMap = {
    'patch': 'shadow-[0_0_15px_rgba(0,255,170,0.5)] hover:shadow-[0_0_25px_rgba(0,255,170,0.7)]',
    'review': 'shadow-[0_0_15px_rgba(52,211,153,0.4)] hover:shadow-[0_0_25px_rgba(52,211,153,0.6)]',
    'closing-remarks': 'shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]'
  };

  return (
    <div className={cn(
      "p-3 bg-gradient-to-r rounded-md border",
      gradientMap[type]
    )}>
      <h4 className="font-cyber text-xs text-cyber-neon/70 mb-2 tracking-wider">&gt; {titleMap[type]}</h4>
      <div className="flex flex-col gap-4">
        {authorContributions.map((contribution) => {
          const author = authors[contribution.id];
          return (
            <div key={contribution.id} className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Avatar className={`transition-shadow duration-300 ${glowMap[type]}`}>
                  <AvatarImage src={author.avatarUrl} alt={author.name} />
                  <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-cyber text-white/90">{author.name}</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {author.roles.map((role, index) => (
                      <Badge 
                        key={index}
                        variant="secondary" 
                        className="relative w-fit font-cyber tracking-wider uppercase bg-gradient-to-r from-[#1a2e3d] to-[#0f172a] text-white/90 border border-cyber-neon/20 shadow-sm"
                      >
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              {contribution.remarks && (
                <div className="pl-12 relative">
                  <div className="absolute text-cyber-neon/20 newspaper-quote text-7xl -left-2 -top-6">“</div>
                  <p className="text-base md:text-lg text-white/70 font-cyber-alt border-l-2 pl-3 py-3 bg-gradient-to-r from-cyber-neon/5 to-transparent relative leading-relaxed">
                    {contribution.remarks}
                    <span className="absolute text-cyber-neon/20 newspaper-quote text-7xl -right-4 -bottom-8">”</span>
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PatchNotes = () => {
  const patchRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleDownload = async (version: string, isCompact: boolean = false) => {
    const element = patchRefs.current[version];
    if (!element) return;

    try {
      // Create a temporary container that mimics the website layout
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.left = '-9999px';
      container.style.width = isCompact ? '600px' : '100%';
      container.style.maxWidth = isCompact ? '600px' : '2000px';
      container.style.padding = '1rem';
      container.className = 'cyber-panel';
      document.body.appendChild(container);

      // Create a wrapper to maintain the website's layout
      const wrapper = document.createElement('div');
      wrapper.className = 'p-4 bg-black min-h-screen';
      wrapper.style.width = '100%';
      wrapper.style.maxWidth = isCompact ? '600px' : '1400px';
      wrapper.style.margin = '0 auto';
      container.appendChild(wrapper);

      // Clone the element into our wrapper
      const cloneElement = element.cloneNode(true) as HTMLDivElement;
      
      if (isCompact) {
        // For compact version, modify the clone to show only essential information
        const nonEssentialSections = cloneElement.querySelectorAll('.space-y-4');
        nonEssentialSections.forEach(section => {
          if (section.querySelector('[type="closing-remarks"]')) {
            section.remove();
          }
        });

        // Remove additional notes section in compact mode
        const additionalNotes = cloneElement.querySelector('div[class*="ADDITIONAL NOTES"]')?.parentElement;
        if (additionalNotes) {
          additionalNotes.remove();
        }

        // Adjust the grid layout for compact view
        cloneElement.className = cloneElement.className.replace('grid-cols-1 lg:grid-cols-[350px_1fr]', 'grid-cols-1');
        
        // Add compact mode specific styles
        const style = document.createElement('style');
        style.textContent = `
          .compact-view {
            font-size: 0.9em;
          }
          .compact-view .space-y-4 { margin-bottom: 1rem; }
          .compact-view p { margin: 0.5rem 0; }
        `;
        wrapper.appendChild(style);
        cloneElement.classList.add('compact-view');
      }

      // Find and clone the title section
      const accordionItem = element.closest('.cyber-panel');
      if (accordionItem) {
        const titleSection = accordionItem.querySelector('.flex.flex-col.md\\:flex-row.md\\:items-center.justify-between')?.cloneNode(true) as HTMLDivElement;
        if (titleSection) {
          // Remove the download buttons if they exist
          const downloadButtons = titleSection.querySelectorAll('button');
          downloadButtons.forEach(button => button.remove());

          // Ensure the title section maintains its layout
          const titleContainer = document.createElement('div');
          titleContainer.className = 'mb-6 px-4 w-full border-b border-cyber-neon/20 pb-4';
          titleContainer.appendChild(titleSection);

          // Add the title section to the wrapper
          wrapper.appendChild(titleContainer);
        }
      }

      // Add the main content
      wrapper.appendChild(cloneElement);

      // Take the screenshot with proper dimensions and higher quality settings
      const canvas = await html2canvas(wrapper, {
        backgroundColor: '#000',
        scale: isCompact ? 2 : 3, // Increased scale for better quality
        logging: false,
        width: wrapper.offsetWidth,
        height: wrapper.offsetHeight,
        onclone: (clonedDoc) => {
          // Ensure all Tailwind classes are applied in the cloned document
          const styleSheets = Array.from(document.styleSheets);
          styleSheets.forEach(styleSheet => {
            try {
              if (styleSheet.cssRules) {
                const newStyleSheet = clonedDoc.createElement('style');
                Array.from(styleSheet.cssRules).forEach(rule => {
                  newStyleSheet.appendChild(clonedDoc.createTextNode(rule.cssText));
                });
                clonedDoc.head.appendChild(newStyleSheet);
              }
            } catch (e) {
              console.warn('Could not copy styles', e);
            }
          });
        }
      });

      // Clean up
      document.body.removeChild(container);

      // Create and trigger download with PNG format
      const link = document.createElement('a');
      link.download = `neomedsis-${version}-patch-notes${isCompact ? '-thumb' : ''}.png`;
      link.href = canvas.toDataURL('image/png'); // Using PNG format for better quality
      link.click();
    } catch (error) {
      console.error('Failed to generate image:', error);
    }
  };

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
                <div className="flex items-center gap-4 flex-wrap">
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
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-cyber-neon hover:text-cyber-neon/80 hover:bg-cyber-neon/10"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDownload(patch.version, false);
                      }}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Full Image
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-cyber-neon hover:text-cyber-neon/80 hover:bg-cyber-neon/10"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDownload(patch.version, true);
                      }}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Thumbnail
                    </Button>
                  </div>
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
              <div 
                ref={(el) => patchRefs.current[patch.version] = el}
                className="pt-2 grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6"
              >
                {/* Left Column - Authors, Summary and Notes */}
                <div className="space-y-4 max-w-full">
                  {/* Authors Sections */}
                  <div className="space-y-4">
                    {patch.authors.patch && <AuthorSection type="patch" authors={patch.authors.patch} />}
                    {patch.authors.review && <AuthorSection type="review" authors={patch.authors.review} />}
                  </div>

                  {/* Summary Section */}
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

                  {/* Additional Notes Section */}
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

                  {/* Closing Remarks Section */}
                  {patch.authors.closingRemarks && (
                    <AuthorSection type="closing-remarks" authors={patch.authors.closingRemarks} />
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
                        {item.content && (
                          <p className="text-white/80 text-sm">{item.content}</p>
                        )}
                        {item.items && item.items.length > 0 && (
                          <ul className="list-disc pl-6 space-y-1">
                            {item.items.map((listItem, listItemIndex) => (
                              <li key={listItemIndex} className="text-white/80 text-sm">{listItem}</li>
                            ))}
                          </ul>
                        )}
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
