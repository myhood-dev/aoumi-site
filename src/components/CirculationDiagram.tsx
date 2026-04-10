type Props = {
  className?: string;
};

/**
 * MyHoodを中心に、個人からなるコミュニティと
 * 企業を中心とした組織が相互循環するイメージを示す図解。
 * 中心には円形MyHoodロゴを配置。
 */
export default function CirculationDiagram({ className = "" }: Props) {
  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 720 420"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-auto w-full"
        role="img"
        aria-label="MyHoodを中心に、個人コミュニティと企業組織が相互循環する図"
      >
        <defs>
          <linearGradient id="circ-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ecfeff" />
            <stop offset="100%" stopColor="#cffafe" />
          </linearGradient>
          <linearGradient id="circ-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <marker
            id="arrow-cyan"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="#0891b2" />
          </marker>
          <clipPath id="hub-clip">
            <circle cx="360" cy="210" r="92" />
          </clipPath>
          <marker
            id="arrow-slate"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="#64748b" />
          </marker>
        </defs>

        {/* ============ Left node — 個人のコミュニティ ============ */}
        <g>
          <circle
            cx="110"
            cy="210"
            r="92"
            fill="url(#circ-left)"
            stroke="#a5f3fc"
            strokeWidth="1.5"
          />
          <text
            x="110"
            y="196"
            textAnchor="middle"
            className="fill-cyan-700"
            style={{
              font: "600 11px system-ui, -apple-system, sans-serif",
              letterSpacing: "0.18em",
            }}
          >
            INDIVIDUALS
          </text>
          <text
            x="110"
            y="220"
            textAnchor="middle"
            className="fill-slate-900"
            style={{ font: "700 16px system-ui, -apple-system, sans-serif" }}
          >
            個人のコミュニティ
          </text>
          <text
            x="110"
            y="240"
            textAnchor="middle"
            className="fill-slate-500"
            style={{ font: "400 11px system-ui, -apple-system, sans-serif" }}
          >
            挑戦・発信・学び
          </text>
        </g>

        {/* ============ Right node — 企業を中心とした組織 ============ */}
        <g>
          <circle
            cx="610"
            cy="210"
            r="92"
            fill="url(#circ-right)"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          <text
            x="610"
            y="196"
            textAnchor="middle"
            className="fill-slate-600"
            style={{
              font: "600 11px system-ui, -apple-system, sans-serif",
              letterSpacing: "0.18em",
            }}
          >
            ORGANIZATIONS
          </text>
          <text
            x="610"
            y="220"
            textAnchor="middle"
            className="fill-slate-900"
            style={{ font: "700 16px system-ui, -apple-system, sans-serif" }}
          >
            企業を中心とした組織
          </text>
          <text
            x="610"
            y="240"
            textAnchor="middle"
            className="fill-slate-500"
            style={{ font: "400 11px system-ui, -apple-system, sans-serif" }}
          >
            事業・採用・共創
          </text>
        </g>

        {/* ============ Arrows (behind center hub) ============ */}
        {/* Top: left → right (via above hub) */}
        <path
          d="M 190 170 Q 360 60 530 170"
          fill="none"
          stroke="#0891b2"
          strokeWidth="2.25"
          strokeLinecap="round"
          markerEnd="url(#arrow-cyan)"
        />
        {/* Bottom: right → left (via below hub) */}
        <path
          d="M 530 250 Q 360 360 190 250"
          fill="none"
          stroke="#64748b"
          strokeWidth="2.25"
          strokeLinecap="round"
          markerEnd="url(#arrow-slate)"
        />

        {/* Arrow labels */}
        <text
          x="360"
          y="68"
          textAnchor="middle"
          className="fill-cyan-700"
          style={{ font: "600 12px system-ui, -apple-system, sans-serif" }}
        >
          挑戦・実績・信用
        </text>
        <text
          x="360"
          y="378"
          textAnchor="middle"
          className="fill-slate-600"
          style={{ font: "600 12px system-ui, -apple-system, sans-serif" }}
        >
          機会・仕事・共創
        </text>

        {/* ============ Center hub — MyHood circular logo ============ */}
        <g>
          {/* Soft glow ring */}
          <circle
            cx="360"
            cy="210"
            r="108"
            fill="none"
            stroke="#67e8f9"
            strokeWidth="1"
            strokeOpacity="0.45"
            strokeDasharray="3 6"
          />
          <image
            href="/myhood-logo-circle.jpg"
            x="268"
            y="118"
            width="184"
            height="184"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#hub-clip)"
          />
        </g>

        {/* Center hub label (outside the circle, above top arrow) */}
        <text
          x="360"
          y="30"
          textAnchor="middle"
          className="fill-slate-400"
          style={{
            font: "600 11px system-ui, -apple-system, sans-serif",
            letterSpacing: "0.22em",
          }}
        >
          HUB
        </text>
      </svg>
    </div>
  );
}
