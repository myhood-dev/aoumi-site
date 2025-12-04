import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HEADER（シンプルver） */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
  <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3 md:flex-row md:items-center md:justify-between md:py-4">
    <div className="flex items-center gap-3">
      <Image
        src="/aoumi-logo-top.svg"
        alt="Aoumi Inc."
        width={30}
        height={20}
        className="h-8 w-auto"
      />
      <span className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-700 md:text-sm">
        青海株式会社
      </span>
    </div>

    <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-medium text-slate-600 md:justify-end md:gap-6 md:text-sm">
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
      <Link href="/news" className="transition hover:text-slate-900">
        News
      </Link>
      <span className="text-slate-400">About</span>
    </nav>
  </div>
</header>


      {/* MAIN */}
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-10 md:pt-16">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          会社概要
        </h1>

        <p className="mt-4 text-sm text-slate-600">
          青海株式会社（Aoumi Inc.）は、人の創造的な挑戦と信用を可視化する
          デジタルサービスとコミュニティを企画・運営する会社です。
        </p>

        <dl className="mt-10 space-y-6 text-sm">
          <div className="flex flex-col gap-1 border-b border-slate-100 pb-4">
            <dt className="font-semibold text-slate-900">会社名</dt>
            <dd className="text-slate-700">青海株式会社（Aoumi Inc.）</dd>
          </div>

          <div className="flex flex-col gap-1 border-b border-slate-100 pb-4">
            <dt className="font-semibold text-slate-900">設立</dt>
            <dd className="text-slate-700">2023年4月12日</dd>
          </div>

          <div className="flex flex-col gap-1 border-b border-slate-100 pb-4">
            <dt className="font-semibold text-slate-900">事業内容</dt>
            <dd className="text-slate-700">
              ITサービスの企画・開発・運用
              <br />
              コミュニティ運営
              <br />
              コンテンツの企画・制作
            </dd>
          </div>

          <div className="flex flex-col gap-1 border-b border-slate-100 pb-4">
            <dt className="font-semibold text-slate-900">役員</dt>
            <dd className="text-slate-700">
              代表取締役 CEO&nbsp;&nbsp;渡辺 啓太
            </dd>
          </div>

          <div className="flex flex-col gap-1 border-b border-slate-100 pb-4">
            <dt className="font-semibold text-slate-900">
              適格請求書発行事業者登録番号
            </dt>
            <dd className="text-slate-700">T5190001030337</dd>
          </div>

          <div className="flex flex-col gap-1 pb-4">
            <dt className="font-semibold text-slate-900">法人番号</dt>
            <dd className="text-slate-700">5190001030337</dd>
          </div>
        </dl>

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

