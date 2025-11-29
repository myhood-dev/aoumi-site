"use client";

import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Top", target: "top" },
  { label: "MyHood", target: "myhood" },
  { label: "Apps", target: "apps" },
  { label: "Frontline", target: "frontline" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ====== HEADER ====== */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/aoumi-logo-top.svg" // ← ロゴファイル名に合わせて変更
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
            {/* ページ内スクロールするメニュー */}
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="transition hover:text-slate-900"
              >
                {item.label}
              </button>
            ))}

            {/* 別ページへ遷移するメニュー */}
            <Link href="/news" className="transition hover:text-slate-900">
              News
            </Link>
            <Link href="/about" className="transition hover:text-slate-900">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* ====== MAIN ====== */}
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 md:pt-16">
        {/* HERO */}
        <section id="top" className="mb-20 md:mb-24">
        <div className="flex flex-col items-center text-center pt-1 pb-1">
          <Image
            src="/aoumi-logo.svg"
            alt="Aoumi Inc. logo"
            width={1000}
            height={1000}
            className="h-100 w-auto md:h-72 lg:h-120"
            priority
            />
        </div>
        </section>
          <div className="mt-4 space-y-3 md:space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              We believe in the potential of{" "}
              <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                people's creative challenges
              </span>
            </h1>
            <p className="text-sm text-slate-600 md:text-base">
              青海は人の創造的な挑戦の可能性を信じています。
            </p>
            </div>
            {/* ABOUT / GAFA SECTION */}
        <section id="about" className="mb-10 md:mb-16">
          <h3 className="mt-16 mb-4 text-5xl font-semibold text-slate-900">
            GAFAをリバースエンジニアリングする
          </h3>
          <div className="mt-10 space-y-3 text-sm leading-relaxed text-slate-600">
            <p>
            青海株式会社は、GAFAが20年かけて築いた「インプレッションを加速させ、
            人の消費を促すためのデータプラットフォーム」をリバースエンジニアリングし、
            その構造を「個人の信用と関係性を可視化・資産化して人の挑戦を加速させるプラットフォーム」へ昇華させることをテーマとしています。
            </p>
            <p>
              私たちは、フォロワー数やバズではなく、
              真の信用とアイデンティティを可視化し、
              事業創造の楽しさとやりがいを提供します。
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection("myhood")}
              className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-300/60 transition hover:bg-slate-800"
            >
              MyHoodとは？
            </button>
            <button
              onClick={() => scrollToSection("apps")}
              className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              フォーカスアプリシリーズを見る
            </button>
          </div>
        </section>

        {/* MYHOOD SECTION */}
        <section id="myhood" className="mb-20 md:mb-24">
          <h2 className="text-xl font-semibold uppercase tracking-[0.24em] text-slate-500">
            ライフスタイルプラットフォーム
          </h2>
          <div className="mt-3 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:p-7">
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">
                MyHood – 人の挑戦を加速させるライフスタイルプラットフォーム
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                MyHoodは、日々のセンテンス・ダイアリーログ・共創ミッションの
                履歴を集約し、「どんな問いに向き合い、誰と何を成し遂げてきたか」
                を可視化する信用の台帳です。
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
              デジタルネイティブ世代と企業の境目を溶かす、
              長期的な信用と共創のエコシステムをつくっていきます。
              </p>
              <a
                href="https://myhood.aoumi.art"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 underline-offset-4 hover:underline"
              >
                MyHood ティザーサイトを見る
                <span aria-hidden>↗</span>
              </a>
              <a
                href="https://myhood.flutterflow.app/profile"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 underline-offset-4 hover:underline"
              >
                MyHood α版を見る
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* APPS SECTION */}
        <section id="apps" className="mb-20 md:mb-24">
          <h2 className="text-xl font-semibold uppercase tracking-[0.24em] text-slate-500">
            フォーカスアプリシリーズ
          </h2>
          <p className="mt-3 text-sm text-slate-600">
          青海は、自己開示・内省・共創プロジェクトなどのシーンごとにフォーカスしたアプリを起点に、日々のログを MyHood に集約し、一人ひとりの「信用」と「アイデンティティ」を可視化する構造をつくっています。
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {/* Icebreak */}
            <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-sm">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-900">
                  アイスブレイク-名刺をインララクティブに
                </h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  自己開示と内面のつながりのハードルを下げる対話円滑化ツール。
                  </p>
                <p className="text-xs leading-relaxed text-slate-600">
                  初対面やチーム内で相手との距離を一気に縮めます。
                </p>
              </div>
            </div>

            {/* Diary Log */}
            <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-sm">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-900">
                  ダイアリーログ-経験や活動をデジタル資産に
                </h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  日報・ふりかえり・感情のメモを一つにまとめる内省可視化ツール。
                  </p>
                <p className="text-xs leading-relaxed text-slate-600">
                  自分だけのメモで終わらせず、必要に応じてチームに共有したり、蓄積されたログを MyHood のキャリアプロファイルに活かすことで、日々の経験がそのまま「経験資産」として積み上がっていきます。
                </p>
              </div>
            </div>

            {/* Co-creation Mission */}
            <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-sm">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-900">
                  共創ミッション-経済圏をカジュアルに
                </h3>
                  <p className="text-xs leading-relaxed text-slate-600">
                    企業のリアルな課題に取り組む若手クリエイターとの共創プロジェクトを、ツール上でカジュアルに実現する経済圏創造ツール。
                    </p>
                  <p className="text-xs leading-relaxed text-slate-600">
                    広告・人材・コンサル・商社・M&Aにかかっていた予算を、若手との共創に投資する「クリエイターエコノミー」に置き換え、企業のリアルな課題解決と、若手のバイトをしなくても良いセーフティーネット構築を同時に実現します。
                    </p>
              </div>
            </div>
          </div>
        </section>

        {/* FRONTLINE SECTION */}
        <section id="frontline" className="mb-20 md:mb-24">
          <h2 className="text-xl font-semibold uppercase tracking-[0.24em] text-slate-500">
            コミュニティ
          </h2>
          <div className="mt-3 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:p-7">
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">
                フロントライン – 共創するコミュニティ経済圏
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                フロントラインは、人々がコンテンツを通じてリアル・本音で繋がり、
                共創するコミュニティ経済圏です。
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                企業スポンサーとZ世代のあいだで、講座・イベント・共創ミッションを通じて
                実際の案件と報酬が動き、その履歴がMyHood上の信用として可視化されていきます。
              </p>
            </div>
          </div>
        </section>
        {/* FOOTER / CONTACT */}
        <footer className="border-t border-slate-200 pt-6 text-xs text-slate-500">
          <div className="flex flex-col items-start justify-between gap-3 pb-4 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Aoumi Inc. All rights reserved.</p>
            <a
              href="mailto:info@aoumi.art"
              className="text-slate-600 underline-offset-4 hover:underline"
            >
              Contact: info@aoumi.art
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
