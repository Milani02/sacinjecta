import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Logo da Injecta (PNG transparente). A variante branca (só o texto vira
 * branco — o swoosh laranja mantém a cor original) é usada sobre fundos
 * escuros.
 */
export function BrandLogo({
  onDark = false,
  className,
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={onDark ? "/logo-injecta-branca.png" : "/logo-injecta.png"}
      alt="Injecta"
      width={1200}
      height={712}
      priority
      className={cn(
        "h-auto w-[220px] shrink-0 self-start object-contain",
        className,
      )}
    />
  );
}
