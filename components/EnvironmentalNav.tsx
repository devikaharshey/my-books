export function EnvironmentalNav() {
  const linkBase =
    "font-mono text-[10px] tracking-[0.4em] uppercase font-bold text-ink hover:text-ember transition-colors duration-500";
  return (
    <nav
      aria-label="Site navigation"
      className="fixed inset-0 pointer-events-none z-40 flex flex-col justify-between p-6 md:p-8"
    >
      <div className="flex justify-between items-start pointer-events-auto">
        <a href="#hero" className={`${linkBase} flex flex-col gap-2`}>
          <span>[ I ]</span>
          <span className="rotate-90 origin-left mt-4">Introduction</span>
        </a>
        <a href="#anthologies" className={`${linkBase} flex flex-col items-end gap-2`}>
          <span>[ II ]</span>
          <span className="-rotate-90 origin-right mt-4">Anthologies</span>
        </a>
      </div>

      <div className="flex justify-between items-end pointer-events-auto">
        <a href="#books" className={`${linkBase} flex flex-col-reverse gap-2`}>
          <span>[ III ]</span>
          <span className="-rotate-90 origin-left mb-4">Bookshelf</span>
        </a>
        <a href="#footer" className={`${linkBase} flex flex-col-reverse items-end gap-2`}>
          <span>[ IV ]</span>
          <span className="rotate-90 origin-right mb-4">Contact</span>
        </a>
      </div>
    </nav>
  );
}
