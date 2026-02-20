"use client";

import { LETTERS, NUMBERS, SYMBOLS, PALACE } from "@/app/lib/data";
import { Badge } from "./Badge";

export function Tables() {
  const structuralSymbols = Object.entries(SYMBOLS).filter(
    ([, d]) => d.t === "structural"
  );
  const financialSymbols = Object.entries(SYMBOLS).filter(
    ([, d]) => d.t === "financial"
  );
  const energySymbols = Object.entries(SYMBOLS).filter(
    ([, d]) => d.t === "energy"
  );
  const directionalSymbols = Object.entries(SYMBOLS).filter(
    ([, d]) => d.t === "directional"
  );
  const punctuationSymbols = Object.entries(SYMBOLS).filter(
    ([, d]) => d.t === "punctuation"
  );

  return (
    <details className="card">
      <summary className="p-4 cursor-pointer font-medium hover:text-purple-400">
        Tabelas de Referencia
      </summary>
      <div className="p-4 pt-0 space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-2 text-zinc-400">
            Letras (Maiuscula=Gigante, Minuscula=Pequeno)
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 text-sm">
            {Object.entries(LETTERS).map(([l, n]) => (
              <div
                key={l}
                className="p-2 bg-[#0f0f12] rounded text-center"
              >
                <span className="mono font-bold text-purple-400">{l}</span>{" "}
                {n}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2 text-zinc-400">Numeros</h3>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 text-sm">
            {Object.entries(NUMBERS).map(([n, name]) => (
              <div
                key={n}
                className="p-2 bg-[#0f0f12] rounded text-center"
              >
                <span className="mono font-bold text-green-400">{n}</span>{" "}
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium mb-2 text-zinc-400">
              Estruturas
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {structuralSymbols.map(([c, d]) => (
                <div key={c} className="p-2 bg-[#0f0f12] rounded">
                  <span className="mono font-bold text-cyan-400">{c}</span>{" "}
                  {d.n}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2 text-zinc-400">
              Financeiros
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {financialSymbols.map(([c, d]) => (
                <div key={c} className="p-2 bg-[#0f0f12] rounded">
                  <span className="mono font-bold text-emerald-400">
                    {c}
                  </span>{" "}
                  {d.n}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2 text-zinc-400">
              Energia/Acao
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {energySymbols.map(([c, d]) => (
                <div key={c} className="p-2 bg-[#0f0f12] rounded">
                  <span className="mono font-bold text-orange-400">
                    {c}
                  </span>{" "}
                  {d.n}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2 text-zinc-400">
              Direcionais
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {directionalSymbols.map(([c, d]) => (
                <div key={c} className="p-2 bg-[#0f0f12] rounded">
                  <span className="mono font-bold text-rose-400">{c}</span>{" "}
                  {d.n}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-medium mb-2 text-zinc-400">
              Pontuacao
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
              {punctuationSymbols.map(([c, d]) => (
                <div key={c} className="p-2 bg-[#0f0f12] rounded">
                  <span className="mono font-bold text-violet-400">
                    {c}
                  </span>{" "}
                  {d.n}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2 text-zinc-400">
            Palacio Mental (Ordem Fixa)
          </h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {PALACE.map((loc, i) => (
              <Badge key={loc} type="structural">
                {i + 1}. {loc}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </details>
  );
}
