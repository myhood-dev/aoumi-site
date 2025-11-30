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

  {/* 説明テキスト */}
  <div className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
    <p>
      GAFAは、この20年で世界中の人の生活とビジネスを便利にし、
      「なにを検索し、なにを見て、なにを買うのか」を精緻に捉える
      データプラットフォームをつくりあげてきました。
      私たちは、その偉大な成果に強いリスペクトを持っています。
    </p>
    <p>
      その一方で、広告を中心としたビジネスモデルに最適化してきた結果、
      ログの中心は「閲覧・クリック・購買」といった
      <span className="font-semibold">消費の瞬間</span>
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

  {/* データの対比ブロック */}
  <div className="mt-8 grid gap-6 md:grid-cols-2">
    <div className="space-y-2">
      <h4 className="text-lg font-semibold uppercase tracking-[0.18em] text-slate-500">
        広告モデルが自然に集めてきたもの
      </h4>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
        <p className="mb-2 font-semibold text-slate-800">
          「人に何を見せ、何を売るか？」のための
          <span className="underline">消費ログ</span>
        </p>
        <ul className="space-y-1 list-disc pl-4">
          <li>なにをどれくらい見たか（インプレッション・視聴時間）</li>
          <li>どこをクリックしたか（クリック・CTR）</li>
          <li>なにを買ったか（購買履歴・コンバージョン）</li>
          <li>誰をフォローしているか（ソーシャルグラフ）</li>
        </ul>
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="text-lg font-semibold uppercase tracking-[0.18em] text-slate-500">
        まだ十分にデータ化されていないもの
      </h4>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-600 shadow-sm">
        <p className="mb-2 font-semibold text-slate-800">
          「人の挑戦と信用」のための
          <span className="underline">挑戦ログ</span>
        </p>
        <ul className="space-y-1 list-disc pl-4">
          <li>どんな問い・テーマに長期的に向き合っているのか</li>
          <li>誰とどんな役割や信頼関係を築いてきたのか</li>
          <li>失敗や試行錯誤を含めた、学びと協働のプロセス</li>
          <li>地域や小さな組織での評価・役割・温度感</li>
        </ul>
      </div>
    </div>
  </div>
  {/* ターゲティング → コクリエイション のブロック */}
  <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
    <h4 className="text-sm font-semibold text-slate-900 md:text-base">
      ターゲティングから、コ・クリエイションへ
    </h4>
    <p className="mt-3 text-sm leading-relaxed text-slate-600">
      広告費はこれまで、「今期の売上をどれだけ伸ばすか」を最適化するために使われてきました。
      どの属性に、どのクリエイティブを、どのタイミングで見せれば
      クリックとコンバージョンが最大化されるか──
      そのためのターゲティングとA/Bテストが、デジタル広告の中心でした。
    </p>
    <p className="mt-3 text-sm leading-relaxed text-slate-600">
      これはGAFAの設計ミスではなく、広告モデルとしてはきわめてまっとうな進化の結果だと考えています。
      「確実に、短期で、売上に効くこと」に予算が集まるのは、ごく自然な構造です。
    </p>
    <p className="mt-3 text-sm leading-relaxed text-slate-600">
      一方で、企業が本当に向き合いたいのは、数クリック先の一回きりの購買だけではなく、
      どんな人たちと長期的な関係性を築き、どんな問いやプロジェクトを一緒に進めていくかという
      <span className="font-semibold">共創の単位</span>になりつつあります。
    </p>

    <div className="mt-5 grid gap-5 md:grid-cols-2">
      <div className="rounded-2xl bg-slate-50 p-4 text-xs leading-relaxed text-slate-600">
        <p className="mb-2 text-base font-semibold text-slate-800">
          従来のターゲティング広告
        </p>
        <ul className="space-y-1 list-disc pl-4">
          <li>目的：今期の売上・CVを最大化する</li>
          <li>単位：インプレッション / クリック / コンバージョン</li>
          <li>評価指標：CPC / CPA / ROAS</li>
          <li>関係性：一回きりのタッチポイントになりがち</li>
        </ul>
      </div>

      <div className="rounded-2xl bg-slate-900 p-4 text-xs leading-relaxed text-slate-100">
        <p className="mb-2 text-base font-semibold text-white">
          コ・クリエイション型のダイレクト広告
        </p>
        <ul className="space-y-1 list-disc pl-4 marker:text-slate-200">
          <li>目的：特定の個人・コミュニティとの関係を育てる</li>
          <li>単位：共創プロジェクトや学び・アウトプットの履歴</li>
          <li>評価指標：継続的な関係性と、共創から生まれた価値</li>
          <li>関係性：「誰とどんな未来をつくるか」が資産になる</li>
        </ul>
      </div>
    </div>

    <p className="mt-4 text-sm leading-relaxed text-slate-600">
      私たちは、広告費の一部を「誰に何を売るか」を決めるターゲティング費ではなく、
      「誰とどんな未来をつくるか」に投じる
      <span className="font-semibold">共創予算</span>として機能させることを目指しています。
      クリック率ではなく、一緒に積み上がった挑戦の履歴と信用で成果を測る、
      そんなダイレクトな広告モデルへの移行だと捉えています。
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
