"use client";

import { useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import type { Anthology } from "@/data/anthologies";
import type { Book } from "@/data/books";

interface AnthologiesProps {
  anthologies: Anthology[];
  books: Book[];
}

export function Anthologies({ anthologies, books }: AnthologiesProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const groupedAnthologies = useMemo(() => {
    const grouped = anthologies.reduce(
      (acc, anthology) => {
        const publisher = anthology.publisher || "Independent";
        if (!acc[publisher]) acc[publisher] = [];
        acc[publisher].push(anthology);
        return acc;
      },
      {} as Record<string, Anthology[]>,
    );
    return Object.entries(grouped);
  }, [anthologies]);

  const getEntries = (anthologyId: string) =>
    books.filter((book) => book.anthology_id === anthologyId);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".anthology-card");

    const cleanups: (() => void)[] = [];

    cards.forEach((el) => {
      let bounds = el.getBoundingClientRect();

      const refreshBounds = () => {
        bounds = el.getBoundingClientRect();
      };

      const move = (e: MouseEvent) => {
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        const xPct = x / bounds.width - 0.5;
        const yPct = y / bounds.height - 0.5;

        const rotateY = xPct * 14;
        const rotateX = yPct * -14;

        gsap.to(el, {
          rotateX,
          rotateY,
          y: -14,
          scale: 1.02,
          boxShadow: "0 28px 70px rgba(0,0,0,.16), 0 8px 24px rgba(0,0,0,.10)",
          duration: 0.35,
          ease: "power2.out",
        });

        const sheen = el.querySelector<HTMLElement>(".card-sheen");
        if (sheen) {
          gsap.to(sheen, {
            opacity: 0.12 + Math.abs(xPct) * 0.18,
            x: `${xPct * 60}%`,
            y: `${yPct * 60}%`,
            duration: 0.35,
            ease: "power2.out",
          });
        }
      };

      const enter = () => {
        refreshBounds();
        gsap.to(el, {
          z: 20,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      const leave = () => {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          y: 0,
          z: 0,
          scale: 1,
          boxShadow: "0 15px 60px rgba(0,0,0,.08)",
          duration: 0.7,
          ease: "elastic.out(1, 0.6)",
        });

        const sheen = el.querySelector<HTMLElement>(".card-sheen");
        if (sheen) {
          gsap.to(sheen, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      };

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);

      cleanups.push(() => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [groupedAnthologies]);

  return (
    <section
      ref={sectionRef}
      id="anthologies"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ backgroundImage: `url('/anthologies-dotted-bg.png')` }}
    >
      {/* ================================================== */}
      {/* SCRAPBOOK / JOURNAL BACKGROUND */}
      {/* ================================================== */}

      {/* Base paper colour */}
      <div className="absolute inset-0 -z-50 bg-[#f5f0e6]" />

      {/* Fine dot grid — primary texture */}
      <div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(100,75,45,.22) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Coarser dot grid — depth layer */}
      <div
        className="absolute inset-0 -z-39"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(100,75,45,.10) 1.8px, transparent 1.8px)",
          backgroundSize: "80px 80px",
          backgroundPosition: "10px 10px",
        }}
      />

      {/* Horizontal ruled lines — faint notebook lines */}
      <div
        className="absolute inset-0 -z-38"
        style={{
          backgroundImage: "linear-gradient(rgba(80,60,35,.045) 1px, transparent 1px)",
          backgroundSize: "100% 32px",
        }}
      />
      {/* Vignette — paper edges darker */}
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(60,40,20,.06)_100%)]" />

      {/* Coffee ring stain — decorative, top-right */}
      <div
        className="pointer-events-none absolute -right-10 top-16 hidden h-36 w-36 opacity-[0.045] lg:block"
        style={{
          borderRadius: "50%",
          border: "12px solid #7a5c3a",
          filter: "blur(2px)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-4 top-20 hidden h-24 w-24 opacity-[0.03] lg:block"
        style={{
          borderRadius: "50%",
          border: "8px solid #7a5c3a",
          filter: "blur(1px)",
        }}
      />

      <div className="mx-auto max-w-425 px-6 md:px-10 lg:px-16">
        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto mb-24 max-w-4xl text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic text-[#2b2118] leading-none">
            Anthologies
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[#635547]">
            Published collaborations, poetry anthologies, literary projects and collective editions.
          </p>
        </motion.div>

        {/* ================================================== */}
        {/* PUBLISHERS */}
        {/* ================================================== */}

        <div className="space-y-32">
          {groupedAnthologies.map(([publisher, publisherAnthologies]) => (
            <section key={publisher}>
              {/* Publisher title */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-10 flex items-center gap-5"
              >
                <div className="h-px flex-1 bg-[#c7b299]/50" />
                <h3 className="font-display text-2xl text-[#3b3025] md:text-4xl">{publisher}</h3>
                <div className="h-px flex-1 bg-[#c7b299]/50" />
              </motion.div>

              {/* CARDS */}
              <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
                {publisherAnthologies.map((anthology, index) => {
                  const entries = getEntries(anthology.id);

                  /*
                   * Slight random-ish rotation per card so it looks hand-placed.
                   * Alternates and uses index to vary; stays subtle (±2.5°).
                   */
                  const restRotation = index % 3 === 0 ? -1.5 : index % 3 === 1 ? 1 : -0.75;

                  return (
                    <motion.article
                      key={anthology.id}
                      initial={{
                        opacity: 0,
                        y: 90,
                        rotate: index % 2 === 0 ? -4 : 4,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        rotate: restRotation,
                      }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: 0.85,
                        delay: index * 0.11,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="anthology-card group relative cursor-default rounded-[28px]"
                      style={{
                        transformStyle: "preserve-3d",
                        willChange: "transform",
                      }}
                    >
                      {/* Card surface */}
                      <div
                        className="
                          relative
                          rounded-[28px]
                          border
                          border-[#eed9bb]
                          bg-[#f6ebdb]
                          p-7
                          shadow-[0_15px_60px_rgba(0,0,0,.08)]
                          transition-none
                        "
                      >
                        {/* Sheen overlay — GSAP-driven on hover */}
                        <div
                          className="card-sheen pointer-events-none absolute inset-0 rounded-[28px] opacity-0"
                          style={{
                            background:
                              "radial-gradient(circle at center, rgba(255,255,255,.9) 0%, transparent 65%)",
                          }}
                        />

                        {/* Fine paper dot texture */}
                        <div
                          className="pointer-events-none absolute inset-0 opacity-[0.035]"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle, #000 0.6px, transparent 0.6px)",
                            backgroundSize: "12px 12px",
                          }}
                        />

                        {/* Masking tape strip */}
                        <div
                          className={`
                            absolute
                            top-0
                            h-7
                            w-20
                            -translate-y-1/2
                            bg-[#f6e9b2]
                            opacity-75
                            shadow-[inset_0_0_0_0.5px_rgba(0,0,0,.06)]
                            ${index % 2 === 0 ? "left-6 rotate-[-5deg]" : "right-6 rotate-[5deg]"}
                          `}
                        >
                          {/* Tape grain lines */}
                          <div
                            className="absolute inset-0 opacity-40"
                            style={{
                              backgroundImage:
                                "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(180,140,60,.15) 3px, rgba(180,140,60,.15) 4px)",
                            }}
                          />
                        </div>

                        {/* Card content */}
                        <div className="relative pt-2">
                          {/* Tags */}
                          <div className="mb-5 flex flex-wrap gap-2">
                            {anthology.publication_type && (
                              <span className="rounded-full border border-[#d9ccb8] bg-[#f5f0e6] px-3 py-1 text-xs text-[#7a6249]">
                                {anthology.publication_type}
                              </span>
                            )}
                            {anthology.year && (
                              <span className="rounded-full border border-[#d9ccb8] bg-[#f5f0e6] px-3 py-1 text-xs text-[#7a6249]">
                                {anthology.year}
                              </span>
                            )}
                          </div>

                          <h4 className="font-display text-3xl text-[#2c2319]">
                            {anthology.title}
                          </h4>

                          {anthology.description && (
                            <p className="mt-4 leading-relaxed text-[#635547]">
                              {anthology.description}
                            </p>
                          )}

                          {entries.length > 0 && (
                            <div className="mt-7">
                              <div className="mb-3 text-xs uppercase tracking-[0.25em] text-[#8d7860]">
                                Included Works
                              </div>

                              <div className="space-y-2">
                                {entries.map((entry) => (
                                  <div
                                    key={entry.id}
                                    className="rounded-2xl border border-[#e6dac7] bg-[#faf6ef] px-4 py-3 text-sm text-[#4a3b2c]"
                                  >
                                    {entry.title}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Card drop shadow layer — separate element so it doesn't 3D-transform */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-x-4
                          -bottom-3
                          -z-10
                          h-full
                          rounded-[28px]
                          bg-[#d9ccb8]/60
                          blur-[2px]
                        "
                        aria-hidden
                      />
                    </motion.article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
