"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

const messages = [
  "gathering pages...",
  "arranging anthologies...",
  "opening the collection...",
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const msg1 = setTimeout(() => setMessageIndex(1), 3000);

    const msg2 = setTimeout(() => setMessageIndex(2), 6000);

    const finish = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 9000);

    return () => {
      clearTimeout(msg1);
      clearTimeout(msg2);
      clearTimeout(finish);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-9999 overflow-hidden bg-[#F8F4EF]"
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
        >
          {/* GRID */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(184,168,219,0.12) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(184,168,219,0.12) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          {/* SMALL DECORATIVE LABEL */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute left-10 top-10 text-[10px] uppercase tracking-[0.35em] text-[#D89B77]"
          >
            Words & Anthologies
          </motion.div>

          {/* PAPER STACK */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-80 w-60">
              {/* Back Sheet */}
              <motion.div
                initial={{
                  x: -250,
                  y: -120,
                  rotate: -12,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  rotate: -6,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-sm border border-[#ebe4da] bg-[#faf7f2] shadow-lg"
              />

              {/* Middle Sheet */}
              <motion.div
                initial={{
                  x: 250,
                  y: 140,
                  rotate: 12,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  rotate: 4,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.25,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-sm border border-[#ebe4da] bg-[#fbf8f4] shadow-xl"
              />

              {/* Front Sheet */}
              <motion.div
                initial={{
                  y: -280,
                  rotate: 8,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  rotate: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-sm border border-[#ebe4da] bg-[#fffdfa] shadow-2xl"
              >
                {/* Tape */}
                <div className="absolute left-1/2 -top-2.5 h-5 w-20 -translate-x-1/2 rotate-2 bg-[#d7d0e8]/70 backdrop-blur-sm" />

                {/* Paper Content */}
                <div className="flex h-full flex-col justify-between p-8">
                  <div>
                    <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#D89B77]">
                      Manuscript
                    </p>

                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="font-serif text-3xl leading-none"
                    >
                      <span className="block text-[#B8A8DB]">Words of</span>

                      <span className="mt-2 block text-[#5B5267]">Devika</span>

                      <span className="block text-[#5B5267]">Harshey</span>
                    </motion.h1>
                  </div>

                  <div>
                    <div className="mb-4 h-px bg-[#ece5dc]" />

                    <motion.p
                      key={messageIndex}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="text-[11px] uppercase tracking-[0.25em] text-[#D89B77]"
                    >
                      {messages[messageIndex]}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Dots */}
          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="absolute right-10 top-10 flex gap-2"
          >
            <div className="h-2 w-2 rounded-full bg-[#D89B77]" />
            <div className="h-2 w-2 rounded-full bg-[#B8A8DB]" />
            <div className="h-2 w-2 rounded-full bg-[#5B5267]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
