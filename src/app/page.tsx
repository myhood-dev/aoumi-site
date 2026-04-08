"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header activePage="top" />

      {/* ============================== HERO ============================== */}
      <section
        id="top"
        className="relative overflow-hidden"
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-cyan-100/40 via-sky-50/30 to-transparent blur-3xl" />
          <div className="absolute -bottom-20 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-emerald-50/40 via-teal-50/20 to-transparent blur-3xl" />
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #334155 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
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
              <h1 className="font-serif text-3xl font-normal leading-snug tracking-tight text-slate-800 md:text-[2.75rem] md:leading-snug">
                We believe in the potential of{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
                    people&apos;s creative challenges
                  </span>
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 opacity-40" />
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
                className="group relative overflow-hidden rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20"
              >
                <span className="relative z-10">MyHoodとは？</span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-cyan-600 to-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
              <button
                onClick={() => scrollToSection("frontline")}
                className="rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm"
              >
                フロントラインを見る
              </button>
            </div>
          </Reveal>
        </div>

        {/* Section divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </section>

      {/* ============================== MYHOOD ============================== */}
      <section id="myhood" className="relative bg-slate-50/50 py-20 md:py-28">
        {/* Decorative */}
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-50/50 blur-3xl" />

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-cyan-600/80">
              Lifestyle Platform
            </p>
            <h2 className="mt-3 font-serif text-2xl font-normal tracking-tight text-slate-900 md:text-4xl">
              MyHood
            </h2>
            <p className="mt-1 text-sm text-slate-400 md:text-base">
              人の挑戦を加速させるライフスタイルプラットフォーム
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-5">
            {/* Main description card */}
            <Reveal delay={100} className="md:col-span-3">
              <div className="h-full rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-100 transition-shadow duration-300 hover:shadow-md md:p-8">
                <div className="space-y-4">
                  <p className="text-sm leading-[1.8] text-slate-600 md:text-[15px]">
                    MyHoodは、日々のセンテンス・ダイアリーログ・共創ミッションの
                    履歴を集約し、「どんな問いに向き合い、誰と何を成し遂げてきたか」
                    を可視化する信用の台帳です。
                  </p>
                  <p className="text-sm leading-[1.8] text-slate-600 md:text-[15px]">
                    デジタルネイティブ世代と企業の境目を溶かす、
                    長期的な信用と共創のエコシステムをつくっていきます。
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <a
                    href="https://myhood.aoumi.art"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900"
                  >
                    ティザーサイトを見る
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
                      &rarr;
                    </span>
                  </a>
                  <a
                    href="https://myhood.flutterflow.app/profile"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900"
                  >
                    &alpha;版を見る
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Feature highlights */}
            <Reveal delay={250} className="md:col-span-2">
              <div className="flex h-full flex-col gap-4">
                {[
                  {
                    icon: "01",
                    title: "信用の可視化",
                    desc: "挑戦・共創の履歴が信用スコアとして蓄積",
                  },
                  {
                    icon: "02",
                    title: "共創エコシステム",
                    desc: "Z世代と企業をつなぐ長期的な関係構築",
                  },
                  {
                    icon: "03",
                    title: "ライフログ集約",
                    desc: "日々の活動がキャリア資産として積み上がる",
                  },
                ].map((item) => (
                  <div
                    key={item.icon}
                    className="group flex-1 rounded-2xl border border-slate-200/80 bg-white p-4 transition-all duration-300 hover:border-cyan-200 hover:shadow-sm"
                  >
                    <span className="text-[11px] font-bold tracking-wider text-cyan-500/70">
                      {item.icon}
                    </span>
                    <h4 className="mt-1 text-sm font-semibold text-slate-800">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ============================== FRONTLINE ============================== */}
      <section id="frontline" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-emerald-600/80">
              Community
            </p>
            <h2 className="mt-3 font-serif text-2xl font-normal tracking-tight text-slate-900 md:text-4xl">
              フロントライン
            </h2>
            <p className="mt-1 text-sm text-slate-400 md:text-base">
              共創するコミュニティ経済圏
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/50 p-6 shadow-sm shadow-slate-100 md:p-10">
              <div className="max-w-2xl space-y-4">
                <p className="text-sm leading-[1.8] text-slate-600 md:text-[15px]">
                  フロントラインは、人々がコンテンツを通じてリアル・本音で繋がり、
                  共創するコミュニティ経済圏です。
                </p>
                <p className="text-sm leading-[1.8] text-slate-600 md:text-[15px]">
                  企業スポンサーとZ世代のあいだで、講座・イベント・共創ミッションを通じて
                  実際の案件と報酬が動き、その履歴がMyHood上の信用として可視化されていきます。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ============================== WHY / GAFA ============================== */}
      <section id="why" className="relative overflow-hidden bg-slate-50/50 py-20 md:py-28">
        {/* Decorative */}
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-gradient-to-br from-sky-50/60 to-transparent blur-3xl" />

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-400">
              Theme
            </p>
            <h2 className="mt-3 font-serif text-2xl font-normal tracking-tight text-slate-900 md:text-4xl">
              GAFAをリバースエンジニアリングする
            </h2>
          </Reveal>

          {/* Narrative */}
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
              {/* Old model */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:shadow-md md:p-7">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400">
                  広告モデルが自然に集めてきたもの
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-800">
                  「人に何を見せ、何を売るか？」のための
                  <span className="border-b border-slate-300">消費ログ</span>
                </p>
                <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-slate-500">
                  <li className="flex gap-2">
                    <span className="mt-0.5 text-slate-300">&mdash;</span>
                    なにをどれくらい見たか（インプレッション・視聴時間）
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 text-slate-300">&mdash;</span>
                    どこをクリックしたか（クリック・CTR）
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 text-slate-300">&mdash;</span>
                    なにを買ったか（購買履歴・コンバージョン）
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 text-slate-300">&mdash;</span>
                    誰をフォローしているか（ソーシャルグラフ）
                  </li>
                </ul>
              </div>

              {/* New model */}
              <div className="rounded-3xl border border-cyan-200/60 bg-gradient-to-br from-cyan-50/40 to-white p-5 transition-all duration-300 hover:shadow-md md:p-7">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cyan-600/70">
                  まだ十分にデータ化されていないもの
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-800">
                  「人の挑戦と信用」のための
                  <span className="border-b border-cyan-400/60">挑戦ログ</span>
                </p>
                <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-slate-600">
                  <li className="flex gap-2">
                    <span className="mt-0.5 text-cyan-400">&mdash;</span>
                    どんな問い・テーマに長期的に向き合っているのか
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 text-cyan-400">&mdash;</span>
                    誰とどんな役割や信頼関係を築いてきたのか
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 text-cyan-400">&mdash;</span>
                    失敗や試行錯誤を含めた、学びと協働のプロセス
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 text-cyan-400">&mdash;</span>
                    地域や小さな組織での評価・役割・温度感
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Targeting → Co-creation */}
          <Reveal delay={300}>
            <div className="mt-10 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm md:p-8">
              <h4 className="font-serif text-lg font-normal text-slate-900 md:text-xl">
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
                  <p className="text-sm font-semibold text-slate-700">
                    従来のターゲティング広告
                  </p>
                  <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-slate-500">
                    <li>目的：今期の売上・CVを最大化する</li>
                    <li>単位：インプレッション / クリック / コンバージョン</li>
                    <li>評価指標：CPC / CPA / ROAS</li>
                    <li>関係性：一回きりのタッチポイントになりがち</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-900 p-5">
                  <p className="text-sm font-semibold text-white">
                    コ・クリエーション型のダイレクト広告
                  </p>
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
                <span className="font-semibold text-slate-800">共創予算</span>として機能させることを目指しています。
                クリック率ではなく、一緒に積み上がった挑戦の履歴と信用で成果を測る、
                そんなダイレクトな広告モデルへの移行だと捉えています。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
