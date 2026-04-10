"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";
import CirculationDiagram from "@/components/CirculationDiagram";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header activePage="top" />

      {/* ============================== HERO ============================== */}
      <section id="top" className="relative overflow-hidden">
        {/* Fluid gradient background — ocean-inspired */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-32 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-cyan-100/50 via-sky-100/40 to-transparent blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-teal-100/40 via-emerald-50/30 to-transparent blur-[100px]" />
          <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-50/30 to-transparent blur-[80px]" />
        </div>

        <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          {/* Logo mark */}
          <Reveal>
            <div className="flex justify-center">
              <Image
                src="/aoumi-logo.svg"
                alt="Aoumi Inc. logo"
                width={1000}
                height={1000}
                className="h-48 w-auto md:h-64 lg:h-80"
                priority
              />
            </div>
          </Reveal>

          {/* Tagline */}
          <Reveal delay={200}>
            <div className="mx-auto mt-10 max-w-3xl text-center">
              <h1 className="text-3xl font-semibold leading-snug tracking-tight text-slate-800 md:text-[2.75rem] md:leading-snug">
                We believe in the potential of{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
                    people&apos;s creative challenges
                  </span>
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 opacity-50" />
                </span>
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-slate-500 md:text-base">
                青海は人の創造的な挑戦の可能性を信じています。
              </p>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => scrollToSection("myhood")}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-600 to-sky-600 px-7 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-600/30"
              >
                <span className="relative z-10">MyHoodとは？</span>
              </button>
              <button
                onClick={() => scrollToSection("service")}
                className="rounded-full border border-slate-200 bg-white/70 px-7 py-2.5 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-cyan-200 hover:bg-white hover:shadow-sm"
              >
                事業内容を見る
              </button>
            </div>
          </Reveal>
        </div>

        {/* Wave transition to MyHood */}
        <div className="pointer-events-none w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="block h-10 w-full md:h-16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 C360,75 720,5 1080,40 C1260,57 1380,50 1440,45 L1440,80 L0,80 Z"
              fill="#f0fdfa"
              fillOpacity="0.5"
            />
            <path
              d="M0,55 C360,80 720,30 1080,55 C1260,67 1380,60 1440,55 L1440,80 L0,80 Z"
              fill="#f0fdfa"
            />
          </svg>
        </div>
      </section>

      {/* ============================== BRIDGE ============================== */}
      <section className="relative bg-teal-50/40">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center md:px-8 md:py-20">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-cyan-600/80">
              What we do
            </p>
            <p className="mt-4 text-2xl font-bold leading-[1.6] tracking-tight text-slate-900 md:text-[32px] md:leading-[1.5]">
              80億人のアイデンティティを、
              <br className="hidden sm:block" />
              80億通りの環境で表現する。
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-[1.9] text-slate-500 md:text-[15px]">
              個人・組織・社会。それぞれの挑戦が、それぞれの文脈のまま伝わる世界をつくる。
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================== MYHOOD ============================== */}
      <section
        id="myhood"
        className="relative bg-gradient-to-b from-teal-50/50 via-cyan-50/20 to-white py-20 md:py-28"
      >
        {/* Subtle decorative orbs */}
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-100/30 blur-[80px]" />
        <div className="pointer-events-none absolute -left-20 bottom-20 h-60 w-60 rounded-full bg-teal-50/40 blur-[60px]" />

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-cyan-600">
                Community SNS
              </p>
              <span className="rounded-full border border-cyan-300/60 bg-cyan-50 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-700">
                &beta;版検証中
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full ring-1 ring-cyan-200/60 md:h-14 md:w-14">
                <Image
                  src="/myhood-logo-circle.jpg"
                  alt="MyHood logo"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                MyHood
              </h2>
            </div>
            <p className="mt-2 text-sm text-slate-400 md:text-base">
              若手と企業を、実践でつなぐ共創コミュニティSNS
            </p>
          </Reveal>

          {/* Description card */}
          <Reveal delay={100}>
            <div className="mt-10 rounded-3xl border border-cyan-100/80 bg-white/80 p-6 shadow-sm shadow-cyan-100/30 backdrop-blur-sm md:p-8">
              <div className="max-w-2xl space-y-4">
                <p className="text-sm leading-[1.8] text-slate-600 md:text-[15px]">
                  MyHoodは、企業と若手を実践活動でつなぐ共創コミュニティSNSです。
                  一社に閉じるインターンではなく、複数の企業と横断的に関わりながら、
                  将来につながる経験と収入を積み上げる「MyHoodプレイヤー」を増やします。
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-5">
                <a
                  href="https://teaser.myhood.aoumi.art/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900"
                >
                  ティザーサイトを見る
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>&rarr;</span>
                </a>
                <a
                  href="https://myhood.flutterflow.app/profile"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900"
                >
                  &alpha;版を見る
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>&rarr;</span>
                </a>
                <a
                  href="https://myhoodbeta.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900"
                >
                  &beta;版を見る
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>&rarr;</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* 5 feature cards */}
          <Reveal delay={200}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { num: "01", title: "活動ログを積み上げる", desc: "日々の活動や発信が、自分だけのログとして蓄積されていく" },
                { num: "02", title: "実績を可視化する", desc: "取り組みや成果が、プロフィールページとして見える形になる" },
                { num: "03", title: "企業との実践につながる", desc: "ログや実績をもとに、企業との仕事や実践活動の機会が生まれる" },
                { num: "04", title: "信用が積み上がる", desc: "活動の履歴が、次の仕事やチャンスにつながる信用になる" },
                { num: "05", title: "経験と収入を両立する", desc: "収入だけでなく、将来につながる経験や実績が資産として残る" },
              ].map((item) => (
                <div
                  key={item.num}
                  className="group rounded-2xl border border-cyan-100/60 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/60 hover:bg-white hover:shadow-md hover:shadow-cyan-100/40"
                >
                  <span className="text-[11px] font-bold tracking-wider text-cyan-500">
                    {item.num}
                  </span>
                  <h4 className="mt-1.5 text-sm font-semibold text-slate-800">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Wave transition out */}
        <div className="pointer-events-none mt-10 w-full rotate-180 overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="block h-8 w-full md:h-12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* ============================== FRONTLINE ============================== */}
      <section id="frontline" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-emerald-600/80">
              Community
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-xl bg-white ring-1 ring-emerald-200/70 md:h-14 md:w-14">
                <Image
                  src="/frontline-logo.png"
                  alt="フロントライン logo"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                フロントライン
              </h2>
            </div>
            <p className="mt-2 text-sm text-slate-400 md:text-base">
              人と企業が交わる、実践と共創の場
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 rounded-3xl border border-emerald-100/60 bg-gradient-to-br from-emerald-50/30 to-white p-6 shadow-sm shadow-emerald-100/20 md:p-10">
              <div className="max-w-2xl space-y-4">
                <p className="text-sm leading-[1.8] text-slate-600 md:text-[15px]">
                  フロントラインは、地域企業・学生・若手・実務者が交わり、
                  イベント・ワークショップ・共創を通じて
                  実際の仕事や価値が生まれる実践の場です。
                </p>
                <p className="text-sm leading-[1.8] text-slate-600 md:text-[15px]">
                  MyHoodが挑戦や実績を積み上げる土台なら、
                  フロントラインは実際に人と企業が出会い、動き出す現場。
                  MyHood上のコミュニティのひとつとして、青海が自ら運営しています。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Wave into Service */}
      <div className="pointer-events-none w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="block h-8 w-full md:h-12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,25 C360,55 720,5 1080,35 C1260,47 1380,42 1440,38 L1440,60 L0,60 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* ============================== SERVICE ============================== */}
      <section id="service" className="relative bg-slate-50/80 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-400">
              Service
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              3つの事業
            </h2>
            <p className="mt-1 text-sm text-slate-400 md:text-base">
              青海株式会社の事業の柱
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {/* MyHood */}
              <div className="group flex flex-col rounded-3xl border border-cyan-100/60 bg-white p-6 transition-all duration-300 hover:border-cyan-300/60 hover:shadow-lg hover:shadow-cyan-100/30 md:p-7">
                <div className="mb-3 h-12 w-12 overflow-hidden rounded-full ring-1 ring-slate-200/60">
                  <Image
                    src="/myhood-logo-circle.jpg"
                    alt="MyHood logo"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-600/70">
                  Platform
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">MyHood</h3>
                <p className="mt-1 mb-3 text-xs font-semibold text-slate-400">
                  共創コミュニティSNS
                </p>
                <p className="text-sm leading-[1.8] text-slate-600">
                  若手と企業を実践活動でつなぎ、信用と経験が積み上がる基盤を提供します。
                </p>
                <div className="mt-auto pt-4">
                  <button
                    onClick={() => scrollToSection("myhood")}
                    className="text-xs font-semibold text-cyan-700 transition-colors hover:text-cyan-900"
                  >
                    詳しく見る &rarr;
                  </button>
                </div>
              </div>

              {/* Frontline */}
              <div className="group flex flex-col rounded-3xl border border-emerald-100/60 bg-white p-6 transition-all duration-300 hover:border-emerald-300/60 hover:shadow-lg hover:shadow-emerald-100/30 md:p-7">
                <div className="mb-3 h-12 w-12 overflow-hidden rounded-xl bg-white ring-1 ring-emerald-200/70">
                  <Image
                    src="/frontline-logo.png"
                    alt="フロントライン logo"
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-600/70">
                  Community
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">フロントライン</h3>
                <p className="mt-1 mb-3 text-xs font-semibold text-slate-400">
                  実践コミュニティ
                </p>
                <p className="text-sm leading-[1.8] text-slate-600">
                  イベント・ワークショップ・共創で人と企業が交わり、仕事が生まれる場です。
                </p>
                <div className="mt-auto pt-4">
                  <button
                    onClick={() => scrollToSection("frontline")}
                    className="text-xs font-semibold text-emerald-700 transition-colors hover:text-emerald-900"
                  >
                    詳しく見る &rarr;
                  </button>
                </div>
              </div>

              {/* 事業伴走 */}
              <div className="group flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100/40 md:p-7">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-700 to-slate-900">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400">
                  Consulting
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">クリティカルスプリント</h3>
                <p className="mt-1 mb-3 text-xs font-semibold text-slate-400">
                  顧客体験 &times; 採用定着力の強化を実現する事業伴走
                </p>
                <p className="text-sm leading-[1.8] text-slate-600">
                  企業の顧客体験・採用・発信・共創を、現場で一緒に整理し、企画し、実装に近づける伴走です。
                </p>
              </div>
            </div>
          </Reveal>

          {/* 事業伴走の詳細 */}
          <Reveal delay={200}>
            <div className="mt-8 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm md:p-8">
              <h4 className="text-base font-bold text-slate-900">
                クリティカルスプリントについて
              </h4>
              <p className="mt-3 text-sm leading-[1.8] text-slate-600">
                価値はあるのに、顧客にうまく伝わっていない。若手に選ばれていない。社内外の魅力が整理されていない。
                そうした課題を持つ地域企業・中小企業に対して、単なるアドバイスではなく、
                顧客体験・採用・発信・共創の設計を、現場に近い場所で一緒に整理し、形にし、前に進めます。
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold tracking-wider uppercase text-slate-400">
                    伴走でやること
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
                    <li className="flex gap-2"><span className="mt-0.5 text-cyan-400">&mdash;</span>顧客体験や店舗体験の整理</li>
                    <li className="flex gap-2"><span className="mt-0.5 text-cyan-400">&mdash;</span>若手採用の見せ方や導線の整理</li>
                    <li className="flex gap-2"><span className="mt-0.5 text-cyan-400">&mdash;</span>発信テーマやコンテンツの整理</li>
                    <li className="flex gap-2"><span className="mt-0.5 text-cyan-400">&mdash;</span>イベントや共創企画の設計</li>
                    <li className="flex gap-2"><span className="mt-0.5 text-cyan-400">&mdash;</span>若手と企業が交わる実践機会の設計</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold tracking-wider uppercase text-slate-400">
                    成果のイメージ
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
                    <li className="flex gap-2"><span className="mt-0.5 text-cyan-400">&mdash;</span>自社の魅力や課題が整理される</li>
                    <li className="flex gap-2"><span className="mt-0.5 text-cyan-400">&mdash;</span>採用や発信の軸が明確になる</li>
                    <li className="flex gap-2"><span className="mt-0.5 text-cyan-400">&mdash;</span>若手に伝わる企画や見せ方ができる</li>
                    <li className="flex gap-2"><span className="mt-0.5 text-cyan-400">&mdash;</span>イベントや共創の実施につながる</li>
                    <li className="flex gap-2"><span className="mt-0.5 text-cyan-400">&mdash;</span>顧客体験や導線改善の具体案が形になる</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 3事業の循環ブロック */}
          <Reveal delay={250}>
            <div className="mt-10 rounded-3xl border border-cyan-100/80 bg-gradient-to-br from-white via-cyan-50/30 to-white p-6 shadow-sm shadow-cyan-100/20 md:p-10">
              <div className="text-center">
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-cyan-600/80">
                  Circulation
                </p>
                <h3 className="mt-3 text-xl font-bold leading-[1.7] tracking-tight text-slate-900 md:text-[26px] md:leading-[1.6]">
                  つながりが、挑戦を育てる。
                  <br className="hidden sm:block" />
                  挑戦が、次のつながりを生む。
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.9] text-slate-600 md:text-[15px]">
                  MyHoodで人と組織が出会い、フロントラインで実践と共創が起こり、
                  クリティカルスプリントで事業の手触りが変わる。
                  ひとつの円環の中で、個人も組織も、挑戦と信用を積み重ねていく。
                </p>
              </div>

              <div className="mx-auto mt-8 max-w-3xl">
                <CirculationDiagram />
              </div>
            </div>
          </Reveal>

          {/* クリティカルスプリント CTA */}
          <Reveal delay={300}>
            <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-7 shadow-lg shadow-slate-900/10 md:p-12">
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-cyan-300/90">
                  Critical Sprint
                </p>
                <h3 className="mt-4 text-2xl font-bold leading-[1.5] tracking-tight text-white md:text-[32px] md:leading-[1.4]">
                  採用・顧客体験・発信・業務。
                  <br className="hidden sm:block" />
                  バラバラに見える課題を、ひとつの線で整える。
                </h3>
                <p className="mt-5 text-sm leading-[1.9] text-slate-300 md:text-[15px]">
                  複合的に絡み合った企業のあらゆる課題を、短期集中で並走。
                  施策の実装まで踏み込み、現場に動きが戻る状態をつくります。
                </p>
                <div className="mt-8">
                  <a
                    href="mailto:info@aoumi.art?subject=%E3%82%AF%E3%83%AA%E3%83%86%E3%82%A3%E3%82%AB%E3%83%AB%E3%82%B9%E3%83%97%E3%83%AA%E3%83%B3%E3%83%88%E3%81%AE%E8%A9%B1%E3%82%92%E8%81%9E%E3%81%8D%E3%81%9F%E3%81%84"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30"
                  >
                    クリティカルスプリントの話を聞く
                    <span
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Wave into Why */}
      <div className="pointer-events-none w-full rotate-180 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="block h-8 w-full md:h-12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,30 C240,55 480,10 720,30 C960,50 1200,15 1440,35 L1440,60 L0,60 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* ============================== WHY / GAFA ============================== */}
      <section id="why" className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-sky-100/40 to-transparent blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 top-40 h-72 w-72 rounded-full bg-gradient-to-bl from-cyan-50/30 to-transparent blur-[80px]" />

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-400">
              Theme
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              GAFAをリバースエンジニアリングする
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-8 max-w-3xl text-xl font-bold leading-[1.6] tracking-tight text-slate-900 md:text-[28px] md:leading-[1.5]">
              消費を煽る構造から、
              <br className="hidden sm:block" />
              挑戦を積み上げる構造へ。
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 max-w-3xl space-y-4 text-sm leading-[1.9] text-slate-600 md:text-[15px]">
              <p>
                GAFAは、この20年で世界中の人の生活とビジネスを便利にし、
                「なにを検索し、なにを見て、なにを買うのか」を精緻に捉える
                データプラットフォームをつくりあげてきました。
                私たちは、その偉大な成果に強いリスペクトを持っています。
              </p>
              <p>
                その一方で、広告を中心としたビジネスモデルに最適化してきた結果、
                ログの中心は「閲覧・クリック・購買」といった
                <span className="font-semibold text-slate-800">消費の瞬間</span>
                に寄らざるをえませんでした。
                これは設計ミスではなく、構造上ごく自然にそうなった帰結だと考えています。
              </p>
              <p>
                だからこそ今、まだ十分にデータ化されていない領域――
                人がどんな問いに向き合い、誰と何を成し遂げ、
                どんな関係性と信用を築いてきたのか――を丁寧に可視化していくことに、
                大きな余白と可能性があると感じています。
              </p>
              <p>
                青海株式会社は、GAFAが20年かけて築いた「インプレッションを加速させ、
                人の消費を促すためのデータプラットフォーム」をリバースエンジニアリングし、
                その構造を「個人の信用と関係性を可視化・資産化して人の挑戦を加速させるプラットフォーム」へ昇華させます。
                そして、クリエイティブな挑戦や創造を加速させ、事業づくりの楽しさとやりがい、自己表現と経済圏を両立する環境を提供します。
              </p>
            </div>
          </Reveal>

          {/* Comparison cards */}
          <Reveal delay={200}>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:shadow-md md:p-7">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400">
                  広告モデルが自然に集めてきたもの
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-800">
                  「人に何を見せ、何を売るか？」のための
                  <span className="border-b border-slate-300">消費ログ</span>
                </p>
                <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-slate-500">
                  <li className="flex gap-2"><span className="mt-0.5 text-slate-300">&mdash;</span>なにをどれくらい見たか（インプレッション・視聴時間）</li>
                  <li className="flex gap-2"><span className="mt-0.5 text-slate-300">&mdash;</span>どこをクリックしたか（クリック・CTR）</li>
                  <li className="flex gap-2"><span className="mt-0.5 text-slate-300">&mdash;</span>なにを買ったか（購買履歴・コンバージョン）</li>
                  <li className="flex gap-2"><span className="mt-0.5 text-slate-300">&mdash;</span>誰をフォローしているか（ソーシャルグラフ）</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-cyan-200/60 bg-gradient-to-br from-cyan-50/50 to-white p-5 transition-all duration-300 hover:shadow-md hover:shadow-cyan-100/30 md:p-7">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cyan-600/70">
                  まだ十分にデータ化されていないもの
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-800">
                  「人の挑戦と信用」のための
                  <span className="border-b border-cyan-400/60">挑戦ログ</span>
                </p>
                <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-slate-600">
                  <li className="flex gap-2"><span className="mt-0.5 text-cyan-400">&mdash;</span>どんな問い・テーマに長期的に向き合っているのか</li>
                  <li className="flex gap-2"><span className="mt-0.5 text-cyan-400">&mdash;</span>誰とどんな役割や信頼関係を築いてきたのか</li>
                  <li className="flex gap-2"><span className="mt-0.5 text-cyan-400">&mdash;</span>失敗や試行錯誤を含めた、学びと協働のプロセス</li>
                  <li className="flex gap-2"><span className="mt-0.5 text-cyan-400">&mdash;</span>地域や小さな組織での評価・役割・温度感</li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Targeting → Co-creation */}
          <Reveal delay={300}>
            <div className="mt-10 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm md:p-8">
              <h4 className="text-lg font-bold text-slate-900">
                ターゲティングから、コ・クリエーションへ
              </h4>

              <div className="mt-5 space-y-3 text-sm leading-[1.9] text-slate-600">
                <p>
                  広告費はこれまで、「今期の売上をどれだけ伸ばすか」を最適化するために使われてきました。
                  どの属性に、どのクリエイティブを、どのタイミングで見せれば
                  クリックとコンバージョンが最大化されるか──
                  そのためのターゲティングとA/Bテストが、デジタル広告の中心でした。
                </p>
                <p>
                  これはGAFAの設計ミスではなく、広告モデルとしてはきわめてまっとうな進化の結果だと考えています。
                  「確実に、短期で、売上に効くこと」に予算が集まるのは、ごく自然な構造です。
                </p>
                <p>
                  一方で、企業が本当に向き合いたいのは、数クリック先の一回きりの購買だけではなく、
                  どんな人たちと長期的な関係性を築き、どんな問いやプロジェクトを一緒に進めていくかという
                  <span className="font-semibold text-slate-800">共創の単位</span>になりつつあります。
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-700">従来のターゲティング広告</p>
                  <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-slate-500">
                    <li>目的：今期の売上・CVを最大化する</li>
                    <li>単位：インプレッション / クリック / コンバージョン</li>
                    <li>評価指標：CPC / CPA / ROAS</li>
                    <li>関係性：一回きりのタッチポイントになりがち</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-5">
                  <p className="text-sm font-semibold text-white">コ・クリエーション型のダイレクト広告</p>
                  <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-slate-300">
                    <li>目的：特定の個人・コミュニティとの関係を育てる</li>
                    <li>単位：共創プロジェクトや学び・アウトプットの履歴</li>
                    <li>評価指標：継続的な関係性と、共創から生まれた価値</li>
                    <li>関係性：「誰とどんな未来をつくるか」が資産になる</li>
                  </ul>
                </div>
              </div>

              <p className="mt-6 text-sm leading-[1.9] text-slate-600">
                私たちは、広告費の一部を「誰に何を売るか」を決めるターゲティング費ではなく、
                「誰とどんな未来をつくるか」に投じる
                <span className="font-semibold text-slate-800">共創予算</span>
                として機能させることを目指しています。
                クリック率ではなく、一緒に積み上がった挑戦の履歴と信用で成果を測る、
                そんなダイレクトな広告モデルへの移行だと捉えています。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Wave into Philosophy */}
      <div className="pointer-events-none w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="block h-8 w-full md:h-12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,25 C480,50 960,5 1440,30 L1440,60 L0,60 Z"
            fill="#f0fdfa"
            fillOpacity="0.5"
          />
          <path
            d="M0,35 C480,55 960,15 1440,40 L1440,60 L0,60 Z"
            fill="#f0fdfa"
          />
        </svg>
      </div>

      {/* ============================== PHILOSOPHY ============================== */}
      <section
        id="philosophy"
        className="relative bg-gradient-to-b from-teal-50/50 via-cyan-50/20 to-white py-20 md:py-28"
      >
        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-cyan-50/30 blur-[80px]" />

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-cyan-600">
              Philosophy
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              プロダクトデザイン指針
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
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
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 100}>
                <div className="group h-full rounded-3xl border border-cyan-100/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/60 hover:shadow-md hover:shadow-cyan-100/30 md:p-7">
                  <span className="text-[11px] font-bold tracking-wider text-cyan-500">
                    {item.num}
                  </span>
                  <p className="mt-3 text-base font-bold leading-relaxed text-slate-900">
                    {item.principle}
                  </p>
                  <p className="mt-3 text-sm leading-[1.8] text-slate-500">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
