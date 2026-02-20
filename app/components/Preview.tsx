"use client";

import { Badge } from "./Badge";
import type { Block } from "@/app/lib/parser";

interface PreviewProps {
  blocks: Block[];
}

export function Preview({ blocks }: PreviewProps) {
  if (blocks.length === 0) {
    return (
      <span className="text-zinc-400 text-sm">Preview dos blocos...</span>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-1">
      {blocks.map((b, i) => (
        <span key={i} className="inline-flex items-center gap-1">
          {b.tokens.map((t, j) => (
            <Badge key={j} type={t.type}>
              {t.c}
            </Badge>
          ))}
          <span className="text-xs text-zinc-500 ml-1">{b.location}</span>
          {i < blocks.length - 1 && (
            <span className="text-zinc-500 mx-1">→</span>
          )}
        </span>
      ))}
    </div>
  );
}
