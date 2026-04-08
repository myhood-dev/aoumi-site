import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-slate-100 bg-slate-50/50">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Left */}
          <div className="space-y-3">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-400">
              Aoumi Inc.
            </p>
            <p className="text-xs leading-relaxed text-slate-500">
              人の創造的な挑戦の可能性を信じて。
            </p>
          </div>

          {/* Right links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <Link href="/" className="transition-colors hover:text-slate-700">
              Top
            </Link>
            <Link
              href="/news"
              className="transition-colors hover:text-slate-700"
            >
              News
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-slate-700"
            >
              About
            </Link>
            <a
              href="mailto:info@aoumi.art"
              className="transition-colors hover:text-slate-700"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-slate-100 pt-6 text-[11px] text-slate-400 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Aoumi Inc. All rights reserved.</p>
          <a
            href="mailto:info@aoumi.art"
            className="underline-offset-4 transition-colors hover:text-slate-600 hover:underline"
          >
            info@aoumi.art
          </a>
        </div>
      </div>
    </footer>
  );
}
