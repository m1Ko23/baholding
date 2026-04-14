import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "white" | "blue";
};

export default function BrandLogo({ className = "", priority = false, variant = "blue" }: BrandLogoProps) {
  return (
    <Image
      src={variant === "white" ? "/ba-logo-white.png" : "/ba-logo.png"}
      alt="B.A. Holding"
      width={176}
      height={44}
      priority={priority}
      className={`h-auto w-[136px] sm:w-[164px] ${className}`.trim()}
    />
  );
}