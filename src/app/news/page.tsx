"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";

type NewsItem = {
  date: string;
  title: string;
  body: string;
  link?: { label: string; href: string };
};

const newsItems: NewsItem[] = [
  {
    date: "2026-03-15",
    title: "「起業家の本音」YouTubeチャンネルを始動",
    body: "起業家の思想の可視化を目的としたYouTubeチャンネル「起業家の本音」を開設しました。従来のピッチ（プレゼン）ではなく、起業家同士の対話を通じて、プロダクトに込められた考えや価値を明らかにします。起業家が中心となり、お互いが動きやすくなるためのハブとなるコンテンツを目指しています。特に地域で活動する起業家が、異なるコミュニティに対して自身のアイデンティティや文脈を伝える際の手助けとなることを意図しています。起業家自身の活動を加速させるだけでなく、動画を見た視聴者が「挑戦」に向けた行動変容を起こすきっかけになることを最終的な意義として掲げています。すでに数本の動画が撮影されており、今後順次アップロードされる予定です。",
    link: {
      label: "チャンネルを見る",
      href: "https://www.youtube.com/@%E8%B5%B7%E6%A5%AD%E5%AE%B6%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB/",
    },
  },
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
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
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
                  <h2 className="mt-2 text-base font-bold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                    {item.body}
                  </p>
                  {item.link && (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900"
                    >
                      {item.link.label}
                      <span
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden
                      >
                        &rarr;
                      </span>
                    </a>
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
            </div>
          </Reveal>
        )}

        <Reveal delay={200}>
          <div className="mt-10">
            <Link
              href="/"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900"
            >
              <span
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
                aria-hidden
              >
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
