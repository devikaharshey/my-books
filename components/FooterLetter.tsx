"use client";

import { useRef, useState } from "react";

export function FooterLetter() {
  const formRef = useRef<HTMLFormElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  const [message, setMessage] = useState("");

  const handleInput = () => {
    setMessage(editorRef.current?.innerText ?? "");
  };

  const handleSubmit = () => {
    setTimeout(() => {
      if (editorRef.current) {
        editorRef.current.innerHTML = "";
      }
      setMessage("");
      formRef.current?.reset();
    }, 100);
  };

  return (
    <footer id="footer" className="py-32 md:py-48 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full mx-auto p-10 md:p-14 bg-card text-card-foreground shadow-(--shadow-cathedral) relative">
        {/* Tape strips */}
        <span className="tape absolute -top-3 left-10 w-20 h-6 -rotate-6" aria-hidden />
        <span className="tape absolute -top-3 right-14 w-16 h-6 rotate-[4deg]" aria-hidden />

        <div className="flex justify-between items-start mb-10">
          <div className="font-mono text-[10px] uppercase tracking-tighter text-ink/60">
            write to devika
          </div>

          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-ember" />
            <span className="size-2 rounded-full bg-gold" />
            <span className="size-2 rounded-full bg-gold/50" />
          </div>
        </div>

        <p className="font-display italic text-3xl mb-6 text-ink">To the reader,</p>

        <p className="font-display text-lg leading-relaxed mb-10 text-ink/80 whitespace-pre-line">
          Whether my words found you at the right moment, or you&apos;d like to collaborate on something
          beautiful — I&apos;d love to hear from you. Poetry, publishing, or simply a thought you&apos;d like
          to share.
        </p>

        <form
          ref={formRef}
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="access_key" value="54a541fc-9c46-426f-b462-94a711dd3de5" />

          <input type="hidden" name="subject" value="New message from your site" />

          <input type="hidden" name="redirect" value="false" />

          {/* Hidden field actually submitted */}
          <input type="hidden" name="message" value={message} readOnly />

          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full bg-transparent border-b border-ink/20 outline-none py-3 font-mono text-sm text-ink placeholder:text-ink/40"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full bg-transparent border-b border-ink/20 outline-none py-3 font-mono text-sm text-ink placeholder:text-ink/40"
          />

          {/* Custom editor */}
          <div className="relative">
            <div
              ref={editorRef}
              contentEditable
              suppressContentEditableWarning
              onInput={handleInput}
              data-placeholder="Write your message…"
              className="
                min-h-30
                w-full
                bg-transparent
                border-b
                border-ink/20
                py-3
                font-mono
                text-sm
                text-ink
                leading-relaxed
                outline-none
                transition-colors
                whitespace-pre-wrap
                wrap-break-word
              "
              style={{
                caretColor: "black",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={!message.trim()}
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-ember
              hover:text-ink
              transition-colors
              disabled:opacity-40
              disabled:pointer-events-none
            "
          >
            Send a message ↗
          </button>
        </form>

        <div className="mt-10 text-right">
          <span className="font-display italic text-3xl text-gold">— Devika Harshey</span>
        </div>
      </div>

      <style>{`
        [contenteditable][data-placeholder]:empty::before {
          content: attr(data-placeholder);
          color: color-mix(in srgb, currentColor 40%, transparent);
          pointer-events: none;
        }
      `}</style>
    </footer>
  );
}
