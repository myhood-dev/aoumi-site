type Props = {
  className?: string;
};

/**
 * MyHoodを中心に、個人からなるコミュニティと
 * 企業を中心とした組織が相互循環するイメージを示す図解。
 */
export default function CirculationDiagram({ className = "" }: Props) {
  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 640 360"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-auto w-full"
        role="img"
        aria-label="MyHoodを中心に、個人コミュニティと企業組織が相互循環する図"
      >
        <defs>
          <linearGradient id="circ-center" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="circ-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ecfeff" />
            <stop offset="100%" stopColor="#cffafe" />
          </linearGradient>
          <linearGradient id="circ-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <marker
            id="arrow-cyan"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="#0891b2" />
          </marker>
          <marker
            id="arrow-slate"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="#64748b" />
          </marker>
        </defs>

        {/* Left node — 個人コミュニティ */}
        <g>
          <circle
            cx="100"
            cy="180"
            r="78"
            fill="url(#circ-left)"
            stroke="#a5f3fc"
            strokeWidth="1.5"
          />
          <text
            x="100"
            y="168"
            textAnchor="middle"
            className="fill-cyan-700"
            style={{ font: "600 12px system-ui, sans-serif", letterSpacing: "0.1em" }}
          >
            INDIVIDUALS
          </text>
          <text
            x="100"
            y="190"
            textAnchor="middle"
            className="fill-slate-800"
            style={{ font: "700 15px system-ui, sans-serif" }}
          >
            個人のコミュニティ
          </text>
          <text
            x="100"
            y="210"
            textAnchor="middle"
            className="fill-slate-500"
            style={{ font: "400 11px system-ui, sans-serif" }}
          >
            挑戦・発信・学び
          </text>
        </g>

        {/* Right node — 企業・組織 */}
        <g>
          <circle
            cx="540"
            cy="180"
            r="78"
            fill="url(#circ-right)"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          <text
            x="540"
            y="168"
            textAnchor="middle"
            className="fill-slate-600"
            style={{ font: "600 12px system-ui, sans-serif", letterSpacing: "0.1em" }}
          >
            ORGANIZATIONS
          </text>
          <text
            x="540"
            y="190"
            textAnchor="middle"
            className="fill-slate-800"
            style={{ font: "700 15px system-ui, sans-serif" }}
          >
            企業を中心とした組織
          </text>
          <text
            x="540"
            y="210"
            textAnchor="middle"
            className="fill-slate-500"
            style={{ font: "400 11px system-ui, sans-serif" }}
          >
            事業・採用・共創
          </text>
        </g>

        {/* Arrows: left → center (top curve) */}
        <path
          d="M 170 150 Q 260 70 330 150"
          fill="none"
          stroke="#0891b2"
          strokeWidth="2"
          strokeLinecap="round"
          markerEnd="url(#arrow-cyan)"
        />
        {/* Arrows: center → right (top curve) */}
        <path
          d="M 390 150 Q 460 70 550 150"
          fill="none"
          stroke="#64748b"
          strokeWidth="2"
          strokeLinecap="round"
          markerEnd="url(#arrow-slate)"
        />
        {/* Arrows: right → center (bottom curve) */}
        <path
          d="M 470 210 Q 400 290 330 210"
          fill="none"
          stroke="#64748b"
          strokeWidth="2"
          strokeLinecap="round"
          markerEnd="url(#arrow-slate)"
        />
        {/* Arrows: center → left (bottom curve) */}
        <path
          d="M 310 210 Q 220 290 150 210"
          fill="none"
          stroke="#0891b2"
          strokeWidth="2"
          strokeLinecap="round"
          markerEnd="url(#arrow-cyan)"
        />

        {/* Center node — MyHood (hub) */}
        <g>
          <circle
            cx="320"
            cy="180"
            r="92"
            fill="url(#circ-center)"
            stroke="#0e7490"
            strokeWidth="1.5"
          />
          <circle
            cx="320"
            cy="180"
            r="102"
            fill="none"
            stroke="#67e8f9"
            strokeWidth="1"
            strokeOpacity="0.5"
            strokeDasharray="3 5"
          />
          <text
            x="320"
            y="162"
            textAnchor="middle"
            className="fill-cyan-100"
            style={{ font: "600 11px system-ui, sans-serif", letterSpacing: "0.22em" }}
          >
            HUB
          </text>
          <text
            x="320"
            y="192"
            textAnchor="middle"
            className="fill-white"
            style={{ font: "800 28px system-ui, sans-serif", letterSpacing: "0.01em" }}
          >
            MyHood
          </text>
          <text
            x="320"
            y="215"
            textAnchor="middle"
            className="fill-cyan-50"
            style={{ font: "500 11px system-ui, sans-serif" }}
          >
            共創コミュニティSNS
          </text>
        </g>

        {/* Labels above arrows */}
        <text
          x="250"
          y="80"
          textAnchor="middle"
          className="fill-cyan-700"
          style={{ font: "600 11px system-ui, sans-serif" }}
        >
          挑戦・実績
        </text>
        <text
          x="435"
          y="80"
          textAnchor="middle"
          className="fill-slate-600"
          style={{ font: "600 11px system-ui, sans-serif" }}
        >
          機会・仕事
        </text>
        <text
          x="230"
          y="310"
          textAnchor="middle"
          className="fill-cyan-700"
          style={{ font: "600 11px system-ui, sans-serif" }}
        >
          信用・経験
        </text>
        <text
          x="415"
          y="310"
          textAnchor="middle"
          className="fill-slate-600"
          style={{ font: "600 11px system-ui, sans-serif" }}
        >
          共創・伴走
        </text>
      </svg>
    </div>
  );
}
