"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeazfdbCe_XcGrlHzeJi98efwT_WKxIjzgN6C1DGKImrBcc2A/viewform?embedded=true";
const FORM_PUBLIC_URL = "https://forms.gle/Q7UpNSimR3h8ooui9";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header activePage="contact" />

      <section className="relative overflow-hidden pt-16 md:pt-24">
        {/* Background orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-cyan-100/50 via-sky-100/30 to-transparent blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-teal-100/40 to-transparent blur-[100px]" />
        </div>

        <div className="mx-auto max-w-4xl px-5 pb-16 md:px-8 md:pb-24">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-cyan-600">
              Contact
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              お問い合わせ
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-[1.9] text-slate-600 md:text-[15px]">
              青海株式会社へのご相談・お問い合わせは、下記のフォームからお送りください。
              クリティカルスプリント・MyHood・フロントライン・採用パートナー・取材など、どんな内容でもお気軽にご連絡ください。
              2〜3営業日以内に担当よりご連絡いたします。
            </p>
          </Reveal>

          {/* Form embed (Google Forms) */}
          <Reveal delay={150}>
            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm">
              <iframe
                src={FORM_EMBED_URL}
                className="block h-[1690px] w-full"
                title="青海株式会社へのお問い合わせフォーム"
                loading="lazy"
              >
                読み込んでいます…
              </iframe>
            </div>
          </Reveal>

          {/* Fallback */}
          <Reveal delay={250}>
            <p className="mt-6 text-xs leading-relaxed text-slate-500">
              フォームが表示されない場合は、
              <a
                href={FORM_PUBLIC_URL}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cyan-700 underline-offset-4 hover:underline"
              >
                こちらのフォーム(別タブで開く)
              </a>
              {" "}から直接送信いただくか、
              <a
                href="mailto:info@aoumi.art"
                className="font-semibold text-cyan-700 underline-offset-4 hover:underline"
              >
                info@aoumi.art
              </a>
              までご連絡ください。
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
