import logo from "@/assets/logo.png";

export function AppHeader() {
  return (
    <header className="w-full border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-3">
        <img src={logo} alt="MiCita Salud" className="w-8 h-8" />
        <span className="font-heading font-bold text-foreground text-lg tracking-tight">
          MiCita<span className="text-primary">Salud</span>
        </span>
      </div>
    </header>
  );
}
