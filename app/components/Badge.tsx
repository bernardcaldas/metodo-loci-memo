"use client";

import type { SymbolType } from "@/app/lib/data";

const badgeStyles: Record<string, string> = {
  letter: "bg-purple-500/15 text-purple-300",
  number: "bg-green-500/15 text-green-400",
  structural: "bg-cyan-500/15 text-cyan-400",
  financial: "bg-emerald-500/15 text-emerald-400",
  energy: "bg-orange-500/15 text-orange-400",
  directional: "bg-rose-500/15 text-rose-400",
  punctuation: "bg-violet-500/15 text-violet-400",
};

interface BadgeProps {
  type: SymbolType | "letter" | "number";
  children: React.ReactNode;
}

export function Badge({ type, children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${badgeStyles[type] || badgeStyles.letter}`}
    >
      {children}
    </span>
  );
}
