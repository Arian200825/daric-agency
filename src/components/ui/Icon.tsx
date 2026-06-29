import {
  Code2,
  Gauge,
  LayoutGrid,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

/**
 * Icon — maps content `icon` string keys to lucide icons, so content files
 * stay free of component imports. Add new services by adding a key here.
 */
const registry: Record<string, LucideIcon> = {
  layout: LayoutGrid,
  code: Code2,
  sparkles: Sparkles,
  cart: ShoppingBag,
  gauge: Gauge,
  trending: TrendingUp,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = registry[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden strokeWidth={1.5} />;
}
