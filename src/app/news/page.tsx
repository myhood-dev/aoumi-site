"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";

type NewsItem = {
  date: string;
  title: string;
  body?: string;
};

const newsItems: NewsItem[] = [
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
      <Header activePage="news" />

      <main className="mx-auto max-w-5xl px-5 pb-16 pt-14 md:px-8 md:pt-20">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-400">
            Updates
          </p>
          <h1 className="mt-3 font-serif text-3xl font-normal tracking-tight text-slate-900 md:text-4xl">
            News
          </h1>
        </Reveal>

        {hasNews ? (
          <ul className="mt-10 space-y-5">
            {newsItems.map((item, i) => (
              <Reveal key={`${item.date}-${item.title}`} delay={i * 80}>
                <li className="rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:shadow-md md:p-6">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400">
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
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal delay={100}>
            <div className="mt-10 rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 px-6 py-12 text-center">
              <p className="text-sm text-slate-500">
                現在掲載中のお知らせはありません。
              </p>
              <p className="mt-1 text-xs text-slate-400">
                プロダクトやコミュニティの進捗は、Topページおよび各プロジェクトの発信でお知らせしていきます。
              </p>
            </div>
          </Reveal>
        )}

        <Reveal delay={200}>
          <div className="mt-10">
            <Link
              href="/"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden>
                &larr;
              </span>
              トップページに戻る
            </Link>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
