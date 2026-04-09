type Props = {
  flip?: boolean;
  className?: string;
};

export default function WaveDivider({ flip = false, className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-10 w-full md:h-16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          className="fill-slate-50/80"
        />
        <path
          d="M0,50 C240,80 480,20 720,50 C960,80 1200,20 1440,50 L1440,80 L0,80 Z"
          className="fill-slate-50"
        />
      </svg>
    </div>
  );
}
