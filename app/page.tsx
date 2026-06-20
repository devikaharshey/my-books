import { Anthologies } from "@/components/Anthologies";
import { Bookshelf } from "@/components/Bookshelf";
import { EnvironmentalNav } from "@/components/EnvironmentalNav";
import { FooterLetter } from "@/components/FooterLetter";
import { HeroScene } from "@/components/HeroScene";
import { SmoothScroll } from "@/components/SmoothScroll";

import { anthologies } from "@/data/anthologies";
import { books } from "@/data/books";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-parchment">
      <SmoothScroll />

      <EnvironmentalNav />

      <HeroScene />

      <Bookshelf books={books} />

      <Anthologies anthologies={anthologies} books={books} />

      <FooterLetter />
    </main>
  );
}
