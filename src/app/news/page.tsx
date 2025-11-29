import Image from "next/image";
import Link from "next/link";

type NewsItem = {
  date: string;
  title: string;
  body?: string;
};

const newsItems: NewsItem[] = [
  // 例：
  // {
  //   date: "2025-03-01",
  //   title: "MyHood ティザーサイト公開",
  //   body: "Z世代と企業の共創をテーマにしたライフスタイルプラットフォーム MyHood のティザーサイトを公開しました。",
  // },
];

export default function NewsPage() {
const hasNews = newsItems.length > 0;

return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
            <Image
              src="/aoumi-logo-top.svg"
              alt="Aoumi Inc."
              width={30}
              height={20}
              className="h-8 w-auto"
            />
            <span className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-700">
              青海株式会社
            </span>
          </div>

          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <Link href="/" className="transition hover:text-slate-900">
              Top
            </Link>
            <Link href="/#myhood" className="transition hover:text-slate-900">
              MyHood
            </Link>
            <Link href="/#apps" className="transition hover:text-slate-900">
              Apps
            </Link>
            <Link href="/#frontline" className="transition hover:text-slate-900">
              Frontline
            </Link>
            <span className="text-slate-400">News</span>
            <Link href="/about" className="transition hover:text-slate-900">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 md:pt-16">
        <h1 className="text-5xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          News
        </h1>

        {hasNews ? (
          <ul className="mt-8 space-y-6">
            {newsItems.map((item) => (
              <li
                key={`${item.date}-${item.title}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {item.date}
                </p>
                <h2 className="mt-2 text-base font-semibold text-slate-900">
                  {item.title}
                </h2>
                {item.body && (
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.body}
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-sm text-slate-600">
            現在掲載中のお知らせはありません。プロダクトやコミュニティの進捗は、
            Top ページおよび各プロジェクトの発信でお知らせしていきます。
          </p>
        )}

        <div className="mt-10">
          <Link
            href="/"
            className="text-sm font-semibold text-sky-700 underline-offset-4 hover:underline"
          >
            ← トップページに戻る
          </Link>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 pt-6 text-xs text-slate-500">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-4 pb-4 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Aoumi Inc. All rights reserved.</p>
          <a
            href="mailto:info@aoumi.art"
            className="text-slate-600 underline-offset-4 hover:underline"
          >
            Contact: info@aoumi.art
          </a>
        </div>
      </footer>
    </div>
  );
}

