"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";

const principles = [
  {
    num: "01",
    principle: "愛を持つ、愛を知る。プロダクトに、人に、社会に。",
    detail:
      "表面の便利さではなく、人の感情と社会への影響まで引き受けて設計する。",
  },
  {
    num: "02",
    principle:
      "社会にプロダクトを届けるのではなく、プロダクトが社会を規定することの責任を持つ。",
    detail:
      "プロダクトは道具ではなく、新しい行動や関係性の前提そのものをデザインする。",
  },
  {
    num: "03",
    principle:
      "シンプルな問題を複雑に解くのではなく、より多くの問題をシンプルに解く。シンプルに解けるまで向き合う。",
    detail:
      "機能を足して誤魔化すのではなく、本質を捉え直して、誰にでも使える形まで磨き切る。",
  },
  {
    num: "04",
    principle:
      "プロダクトで語る。プロダクトですべてが伝わる。プロダクトでしか伝わらない。",
    detail:
      "思想も美学も本気度も、最後は触れた体験の中にしか宿らない。",
  },
];

const companyInfo = [
  { label: "会社名", value: "青海株式会社（Aoumi Inc.）" },
  { label: "設立", value: "2023年4月12日" },
  {
    label: "事業内容",
    value:
      "ITサービスの企画・開発・運用\nコミュニティ運営\nコンテンツの企画・制作\nクリティカルスプリント（顧客体験と採用定着力強化の事業伴走）",
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
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
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

        {/* Theme */}
        <Reveal delay={200}>
          <div className="mt-20">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-cyan-600/80">
              Theme
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              GAFAをリバースエンジニアリングする
            </h2>
            <p className="mt-4 text-sm leading-[1.9] text-slate-600 md:text-[15px]">
              GAFAが20年かけて築いた「インプレッションを加速させ、人の消費を促すためのデータプラットフォーム」をリバースエンジニアリングし、
              その構造を「個人の信用と関係性を可視化・資産化して人の挑戦を加速させるプラットフォーム」へ昇華させる。
              消費を煽る構造から、挑戦を積み上げる構造へ。
              80億人のアイデンティティを、80億通りの環境で表現できる世界を目指します。
            </p>
          </div>
        </Reveal>

        {/* Product Design Principles */}
        <Reveal delay={220}>
          <div className="mt-14">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-cyan-600/80">
              Philosophy
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              プロダクトデザイン指針
            </h2>
            <p className="mt-4 text-sm leading-[1.9] text-slate-600 md:text-[15px]">
              青海がプロダクトをつくるときに、自分たちに課している4つの原則です。
            </p>

            <ol className="mt-8 space-y-5">
              {principles.map((item) => (
                <li
                  key={item.num}
                  className="rounded-2xl border border-cyan-100/70 bg-white/70 p-5 backdrop-blur-sm md:p-6"
                >
                  <span className="text-[11px] font-bold tracking-wider text-cyan-500">
                    {item.num}
                  </span>
                  <p className="mt-2 text-base font-bold leading-relaxed text-slate-900">
                    {item.principle}
                  </p>
                  <p className="mt-2 text-sm leading-[1.8] text-slate-500">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-14">
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
