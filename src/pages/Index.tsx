
import Header from "@/components/Header";
import PatchNotes from "@/components/PatchNotes";

const Index = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Header 
          title="NeoMedSys PATCH NOTES"
          subtitle="Tracking updates and improvements for NeoMedSys"
        />
        
        <div className="relative mb-8">
          <div className="absolute -top-6 left-0 text-xs text-cyber-neon/80 font-cyber">
            &gt; displaying_all_patches
          </div>
        </div>
        
        <PatchNotes />
        
        <footer className="mt-16 text-center text-sm text-white/50 font-cyber">
          <p>NeoMedSys © 2025</p>
          <p className="mt-2 text-xs"></p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
