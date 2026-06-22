"use client";

import { useState } from "react";
import Preloader from "./ui/preloader";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Preloader
          onComplete={() => {
            window.dispatchEvent(new CustomEvent("preloader-complete"));

            setLoading(false);
          }}
        />
      )}

      <main
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </main>
    </>
  );
}
