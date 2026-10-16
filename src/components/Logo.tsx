import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light"; // dark = for light bg (navy text); light = for navy bg (pearl text)
  size?: "sm" | "md" | "lg";
  href?: string;
}

export default function Logo({
  className = "",
  variant = "dark",
  size = "md",
  href = "/",
}: LogoProps) {
  const isDark = variant === "dark";

  // Scale dimensions based on size (original aspect ratio: 1024 / 559 ≈ 1.832)
  const dimensions =
    size === "sm"
      ? { width: 110, height: 60, heightClass: "h-12 sm:h-14" }
      : size === "lg"
      ? { width: 190, height: 104, heightClass: "h-16 sm:h-20 lg:h-24" }
      : { width: 146, height: 80, heightClass: "h-14 sm:h-16 lg:h-20" };

  const logoSrc = isDark ? "/logo-transparent.png" : "/logo-white-transparent.png";

  const content = (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <Image
        src={logoSrc}
        alt="Abarani Cloth Shop (আবরনী) — Heritage, Clothing, Uniforms"
        width={dimensions.width}
        height={dimensions.height}
        className={`w-auto ${dimensions.heightClass} object-contain transition-transform duration-300 hover:scale-[1.02]`}
        priority
      />
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg p-0.5"
        aria-label="Abarani Cloth Shop - Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
