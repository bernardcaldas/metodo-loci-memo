"use client";

import { Badge } from "./Badge";
import type { Block } from "@/app/lib/parser";
import { generateBlockPhrase } from "@/app/lib/parser";

interface BlockCardProps {
  block: Block;
  index: number;
}

export function BlockCard({ block, index }: BlockCardProps) {
  return (
    <div className="card p-4">
      <div className="flex items-center gap-3 mb-2">
        <Badge type="structural">
          {index + 1}. {block.location}
        </Badge>
        <code className="mono text-sm text-purple-400">&quot;{block.raw}&quot;</code>
      </div>
      <p className="mb-2">{generateBlockPhrase(block)}</p>
      <div className="flex flex-wrap gap-1">
        {block.tokens.map((t, i) => (
          <Badge key={i} type={t.type}>
            {t.c} {t.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
