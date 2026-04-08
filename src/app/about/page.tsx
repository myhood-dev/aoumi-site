"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";

const companyInfo = [
  { label: "会社名", value: "青海株式会社（Aoumi Inc.）" },
  { label: "設立", value: "2023年4月12日" },
  {
    label: "事業内容",
    value: "ITサービスの企画・開発・運用\nコミュニティ運営\nコンテンツの企画・制作",
  },
  { label: "役員", value: "代表取締役 CEO  渡辺 啓太" },
  { label: "適格請求書発行事業者登録番号", value: "T5190001030337" },
  { label: "法人番号", value: "5190001030337" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header activePage="about" />

      <main className="mx-auto max-w-3xl px-5 pb-16 pt-14 md:px-8 md:pt-20">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-400">
            About
          </p>
          <h1 className="mt-3 font-serif text-3xl font-normal tracking-tight text-slate-900 md:text-4xl">
            会社概要
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 md:text-[15px]">
            青海株式会社（Aoumi Inc.）は、人の創造的な挑戦と信用を可視化する
            デジタルサービスとコミュニティを企画・運営する会社です。
          </p>
        </Reveal>

        <Reveal delay={150}>
          <dl className="mt-12 space-y-0 divide-y divide-slate-100">
            {companyInfo.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-8"
              >
                <dt className="w-full shrink-0 text-xs font-semibold tracking-wide text-slate-400 sm:w-56 sm:text-[13px]">
                  {item.label}
                </dt>
                <dd className="whitespace-pre-line text-sm text-slate-700">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-12">
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
