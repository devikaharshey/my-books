"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { Book } from "@/data/books";

interface BookshelfProps {
  books: Book[];
}

export function Bookshelf({ books }: BookshelfProps) {
  const featuredBooks = useMemo(
    () =>
      [...books]
        .filter((b) => b.is_featured)
        .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0)),
    [books],
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const active = activeIndex !== null ? featuredBooks[activeIndex] : null;

  if (!featuredBooks.length) {
    return (
      <section id="books" className="py-20 sm:py-24 lg:py-32 border-t border-ink/10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="bookshelf-reveal mb-10 sm:mb-14 text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic text-ink leading-none">
            Personal Works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-ink/75 text-sm sm:text-base leading-relaxed">
            A collection of bound stories, poetry, and reflections written over the years.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="books"
      className="
        py-20 sm:py-24 lg:py-32
        border-t border-ink/10
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="bookshelf-reveal mb-10 sm:mb-14 text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic text-ink leading-none">
            Personal Works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-ink/75 text-sm sm:text-base leading-relaxed">
            A collection of bound stories, poetry, and reflections written over the years.
          </p>
        </motion.div>

        {/* BOOK SPINES */}
        <div
          className="
            bookshelf-reveal
            flex items-end gap-1.5
            h-65 sm:h-75 md:h-90
            overflow-x-auto overflow-y-hidden
            pb-4
            scrollbar-thin
          "
        >
          {featuredBooks.map((book, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.button
                key={book.id}
                layout={false}
                onClick={() => setActiveIndex((prev) => (prev === index ? null : index))}
                whileHover={{
                  y: -4,
                }}
                animate={{
                  scaleY: isActive ? 1.08 : 1,
                  scaleX: isActive ? 1.04 : 1,
                  opacity: isActive ? 1 : 0.82,
                  y: isActive ? -6 : 0,
                }}
                transition={{
                  duration: 0.22,
                  ease: "easeOut",
                }}
                className="
                  relative
                  w-14.5 sm:w-16 md:w-18
h-[74%]
                  border border-black/10
                  overflow-hidden
                  flex items-center justify-center
                  origin-bottom
                  shrink-0
                  will-change-transform
                  transform-gpu
                "
                style={{
                  background: book.spine_color ?? "linear-gradient(to bottom, #2b2b2b, #1a1a1a)",
                }}
              >
                {/* Spine texture */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />

                {/* Spine title */}
                <span
                  className="
                    rotate-180
                    [writing-mode:vertical-rl]
                    text-[9px] sm:text-[10px]
                    tracking-[0.25em]
                    uppercase
                    font-mono
                    font-bold
                    text-parchment/85
                    px-1
                    select-none
                  "
                >
                  {book.title}
                </span>

                {/* Top dot */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-ember shadow-[0_0_10px_var(--ember)]" />
              </motion.button>
            );
          })}
        </div>

        {/* ACTIVE BOOK */}
        <AnimatePresence initial={false}>
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{
                duration: 0.28,
                ease: "easeOut",
              }}
              className="
                bookshelf-reveal
                grid
                grid-cols-1
                lg:grid-cols-[minmax(240px,340px)_1fr]
                gap-8 md:gap-10 lg:gap-14
                items-start
                mt-8 sm:mt-10
              "
            >
              {/* BOOK COVER */}
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.28,
                  ease: "easeOut",
                }}
                className="
                  polaroid
                  w-fit
                  max-w-55
                  sm:max-w-65
                  md:max-w-75
                  lg:max-w-85
                  -rotate-2
                  will-change-transform
                  transform-gpu
                  mx-auto lg:mx-0
                "
              >
                {active.cover_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={active.cover_url}
                    alt={active.title}
                    loading="lazy"
                    className="
                      block
                      w-auto
                      h-auto
                      max-h-105
                      sm:max-h-125
                      md:max-h-140
                      max-w-full
                      object-contain
                    "
                  />
                ) : (
                  <div className="w-60 h-80 bg-secondary flex items-center justify-center text-ink/30 font-display italic">
                    No cover available
                  </div>
                )}
              </motion.div>

              {/* DETAILS */}
              <div className="space-y-6 sm:space-y-7 max-w-3xl">
                <div className="space-y-4">
                  {active.classification && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-ember">
                      {active.classification}
                    </span>
                  )}

                  <h3 className="font-display text-4xl sm:text-5xl md:text-6xl italic text-ink leading-none">
                    {active.title}
                  </h3>

                  {active.subtitle && (
                    <p className="font-display italic text-base sm:text-lg text-ink/65">
                      {active.subtitle}
                    </p>
                  )}
                </div>

                {active.description && (
                  <p className="text-black/80 leading-relaxed text-sm sm:text-[15px] md:text-base">
                    {active.description}
                  </p>
                )}

                {active.featured_quote && (
                  <blockquote className="border-l border-ember/30 pl-4 sm:pl-5 font-display italic text-lg sm:text-xl text-ink/80 leading-relaxed">
                    &quot;{active.featured_quote}&quot;
                  </blockquote>
                )}

                {(active.genres ?? []).length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {(active.genres ?? []).map((genre) => (
                      <span
                        key={genre}
                        className="
                          text-[10px]
                          font-mono
                          uppercase
                          tracking-[0.25em]
                          border border-ink/10
                          px-3 py-2
                          text-ink/60
                          bg-card/50
                        "
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                )}

                {/* PURCHASE LINKS */}
                {active.purchase_links && (
                  <div className="flex flex-wrap gap-3 pt-2 sm:pt-4">
                    {Object.entries(active.purchase_links).map(([platform, url]) => {
                      if (!url) return null;

                      const labelMap: Record<string, string> = {
                        amazon: "Amazon",
                        flipkart: "Flipkart",
                        notionpress: "NotionPress",
                        writerspocket: "WritersPocket",
                        other: "Purchase",
                      };

                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="
                              text-[10px] sm:text-xs
                              font-mono
                              uppercase
                              tracking-[0.25em]
                              text-ember
                              border border-ember/30
                              px-3 sm:px-4
                              py-2.5 sm:py-3
                              hover:bg-ember/10
                              transition-colors
                            "
                        >
                          {labelMap[platform] ?? platform}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
