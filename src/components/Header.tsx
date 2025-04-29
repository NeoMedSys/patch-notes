
import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Header = ({ title, subtitle, className }: HeaderProps) => {
  return (
    <header className={cn("text-center mb-10", className)}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl cyber-text-glow font-bold mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl md:text-2xl text-white/70 font-cyber-alt max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-cyber-neon to-transparent"></div>
      </div>
    </header>
  );
};

export default Header;
