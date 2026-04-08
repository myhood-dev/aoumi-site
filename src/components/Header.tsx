"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

type Props = {
  activePage?: "top" | "news" | "about";
};

const scrollNavItems = [
  { label: "MyHood", target: "myhood" },
  { label: "Frontline", target: "frontline" },
  { label: "Why", target: "why" },
];

export default function Header({ activePage = "top" }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setOpen(false);
    if (activePage !== "top") {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const linkClass =
    "relative py-1 text-slate-500 transition-colors duration-200 hover:text-slate-900 after:absolute after:inset-x-0 after:bottom-0 after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-300 hover:after:scale-x-100";
  const activeClass =
    "relative py-1 text-slate-900 font-semibold after:absolute after:inset-x-0 after:bottom-0 after:h-[1.5px] after:scale-x-100 after:bg-slate-900";

  return (
    <header
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${scrolled ? "bg-white/90 shadow-sm shadow-slate-200/60 backdrop-blur-xl" : "bg-white/60 backdrop-blur-md"}
      `}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/aoumi-logo-top.svg"
            alt="Aoumi Inc."
            width={30}
            height={20}
            className="h-7 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-slate-600 md:text-xs">
            Aoumi Inc.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-[13px] font-medium md:flex">
          {scrollNavItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleScrollTo(item.target)}
              className={linkClass}
            >
              {item.label}
            </button>
          ))}
          <Link
            href="/news"
            className={activePage === "news" ? activeClass : linkClass}
          >
            News
          </Link>
          <Link
            href="/about"
            className={activePage === "about" ? activeClass : linkClass}
          >
            About
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-[1.5px] w-5 bg-slate-700 transition-all duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-[1.5px] w-5 bg-slate-700 transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[1.5px] w-5 bg-slate-700 transition-all duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`
          fixed inset-0 top-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden
          ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
        `}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8 text-lg font-medium text-slate-700">
          {scrollNavItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleScrollTo(item.target)}
              className="transition-colors hover:text-slate-900"
            >
              {item.label}
            </button>
          ))}
          <Link
            href="/news"
            onClick={() => setOpen(false)}
            className="transition-colors hover:text-slate-900"
          >
            News
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="transition-colors hover:text-slate-900"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
