"use client";

import { BlockCard } from "./BlockCard";
import type { Block } from "@/app/lib/parser";

interface BlocksSectionProps {
  blocks: Block[];
  onGenerateStory: () => void;
}

export function BlocksSection({ blocks, onGenerateStory }: BlocksSectionProps) {
  if (blocks.length === 0) return null;

  return (
    <section className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold">Blocos Gerados</h2>
        <button
          onClick={onGenerateStory}
          className="px-4 py-2 rounded-lg font-medium border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all text-sm"
        >
          Gerar Historia
        </button>
      </div>
      <div className="space-y-3">
        {blocks.map((block, i) => (
          <BlockCard key={i} block={block} index={i} />
        ))}
      </div>
    </section>
  );
}
