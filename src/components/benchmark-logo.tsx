import benchmarkLogoImg from "@/assets/benchmark-logo.jpg";

interface BenchmarkLogoProps {
  className?: string;
  imgClassName?: string;
  showSubtitle?: boolean;
}

export function BenchmarkLogo({
  className = "",
  imgClassName = "h-11 sm:h-13 md:h-14 w-auto object-contain rounded-md  ",
}: BenchmarkLogoProps) {
  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={benchmarkLogoImg}
        alt="Benchmark Name Boards"
        className={imgClassName}
        loading="eager"
      />
    </div>
  );
}

export function BenchmarkLogoPill({ className = "" }: { className?: string }) {
  return (
    <BenchmarkLogo
      className={className}
      imgClassName="h-10 sm:h-12 w-auto object-contain rounded-lg shadow-md border border-stone-700/60"
    />
  );
}
