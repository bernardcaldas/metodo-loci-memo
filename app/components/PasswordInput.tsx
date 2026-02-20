"use client";

import { Preview } from "./Preview";
import type { Block } from "@/app/lib/parser";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onGenerate: () => void;
  previewBlocks: Block[];
}

export function PasswordInput({
  value,
  onChange,
  onKeyDown,
  onGenerate,
  previewBlocks,
}: PasswordInputProps) {
  return (
    <section className="mb-6">
      <label className="block text-sm font-medium mb-2">Senha</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          className="input-main flex-1 px-4 py-3 rounded-lg mono text-lg"
          placeholder="Digite a senha..."
          maxLength={50}
          autoComplete="off"
        />
        <button
          onClick={onGenerate}
          className="px-4 py-2 rounded-lg font-medium bg-purple-500 text-white hover:bg-purple-500/90 transition-all"
        >
          Gerar Blocos
        </button>
      </div>
      <div className="mt-2 text-sm text-zinc-400">
        {value.length} caracteres
      </div>
      <div className="mt-4 p-3 rounded-lg bg-[#18181c] border border-[#27272a] min-h-[50px]">
        <Preview blocks={previewBlocks} />
      </div>
    </section>
  );
}
