/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroScene() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const polaroidRef = useRef<HTMLDivElement | null>(null);
  const dotsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    const runAnimation = () => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        tl.from(".hero-tag", {
          y: -20,
          rotate: -4,
          opacity: 0,
          duration: 0.7,
        })
          .from(
            headingRef.current?.querySelectorAll("span") || [],
            {
              yPercent: 100,
              opacity: 0,
              stagger: 0.12,
              duration: 0.9,
            },
            "-=0.3",
          )
          .from(
            paraRef.current,
            {
              y: 20,
              opacity: 0,
              duration: 0.7,
            },
            "-=0.5",
          )
          .from(
            polaroidRef.current,
            {
              y: 30,
              rotate: 3,
              opacity: 0,
              scale: 0.96,
              duration: 0.8,
            },
            "-=0.5",
          )
          .from(
            arrowRef.current,
            {
              opacity: 0,
              x: -10,
              duration: 0.5,
            },
            "-=0.4",
          );
      }, sectionRef);
    };

    window.addEventListener("preloader-complete", runAnimation);

    return () => {
      window.removeEventListener("preloader-complete", runAnimation);

      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden border-b border-border
      px-5 sm:px-6 md:px-10 lg:px-20
      py-24 sm:py-28 lg:py-20
      bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url('/hero-grid-bg.png')` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-background/10 backdrop-[2px]" />

      {/* Decorative dots */}
      <div
        ref={dotsRef}
        className="absolute top-6 right-4 sm:top-10 sm:right-8 md:right-16 flex gap-2 items-center z-20"
      >
        {["bg-ember", "bg-ember/70", "bg-gold", "bg-gold/70", "bg-gold/40"].map(
          (cls, i) => (
            <span
              key={i}
              className={`floating-dot size-2.5 sm:size-3 rounded-full ${cls}`}
            />
          ),
        )}
      </div>

      {/* Sticker */}
      <div
        className="hero-tag absolute
  top-20 right-3
  sm:right-8 sm:top-24
  md:right-24 md:top-28
  z-20 rotate-6"
      >
        <div
          className="tape px-4 sm:px-5 md:px-6 py-2 relative shadow-lg"
          style={{
            clipPath:
              "polygon(8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%, 0 50%)",
          }}
        >
          <span className="font-display italic text-ink text-xs sm:text-sm md:text-lg tracking-wide whitespace-nowrap">
            ★ books & anthologies ★
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-ember mb-6 sm:mb-8">
          @devika.harshey
        </p>

        <h1
          ref={headingRef}
          className="font-display leading-[0.9] tracking-tight
          text-5xl xs:text-6xl sm:text-7xl
          md:text-8xl lg:text-[8rem] xl:text-[9rem]
          max-w-6xl"
        >
          <span className="block italic text-gold">Words of</span>

          <span className="block text-ink/85 mt-1 sm:mt-2">Devika Harshey</span>
        </h1>

        <div
          className="mt-10 sm:mt-12
          grid grid-cols-1 md:grid-cols-[1fr_auto]
          gap-10 md:gap-12 items-end max-w-6xl"
        >
          <p
            ref={paraRef}
            className="max-w-xl text-ink/70 leading-relaxed
            text-sm sm:text-base md:text-lg
            font-display italic whitespace-pre-line"
          >
            A collection of books, anthologies, and literary works by Devika
            Harshey.
          </p>

          {/* Polaroid */}
          <div
            ref={polaroidRef}
            className="
    polaroid
    w-40 sm:w-44 md:w-52 lg:w-56
    shrink-0 mx-auto md:mx-0
    relative will-change-transform
    rotate-[-4deg]
  "
          >
            <div className="aspect-square w-full overflow-hidden">
              <img
                src="/polaroid.png"
                alt="Writing desk with lavender stationery"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            <p
              className="
      absolute bottom-2 left-0 right-0
      text-center
      font-mono text-[8px] sm:text-[9px]
      tracking-[0.28em] uppercase
      text-ink/50
    "
            >
              a life in pages
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          ref={arrowRef}
          className="mt-14 sm:mt-16 flex items-center gap-4 sm:gap-6"
        >
          <svg
            width="80"
            height="24"
            viewBox="0 0 80 24"
            fill="none"
            className="text-ember shrink-0 w-16 sm:w-20"
            aria-hidden
          >
            <path
              d="M2 12 C 20 4, 40 20, 70 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M62 6 L72 12 L62 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>

          <span
            className="font-mono text-[9px] sm:text-[10px]
            tracking-[0.32em] uppercase text-ink/50"
          >
            explore the collection
          </span>
        </div>
      </div>
    </section>
  );
}
