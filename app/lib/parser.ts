import {
  LETTERS,
  NUMBERS,
  SYMBOLS,
  PALACE,
  type SymbolType,
} from "./data";

export interface Token {
  c: string;
  type: SymbolType | "letter" | "number";
  name: string;
  size?: "gigante" | "pequeno";
}

export interface Block {
  raw: string;
  tokens: Token[];
  location: string;
}

export function parse(input: string): Block[] {
  const blocks: Block[] = [];
  const chars = input.split("");

  for (let i = 0; i < chars.length; i += 3) {
    const blockChars = chars.slice(i, i + 3);
    const tokens: Token[] = [];

    blockChars.forEach((c) => {
      if (/[A-Za-z]/.test(c)) {
        tokens.push({
          c,
          type: "letter",
          name: LETTERS[c.toUpperCase()],
          size: c === c.toUpperCase() ? "gigante" : "pequeno",
        });
      } else if (/[0-9]/.test(c)) {
        tokens.push({
          c,
          type: "number",
          name: NUMBERS[c],
        });
      } else if (SYMBOLS[c]) {
        tokens.push({
          c,
          type: SYMBOLS[c].t,
          name: SYMBOLS[c].n,
        });
      }
    });

    blocks.push({
      raw: blockChars.join(""),
      tokens,
      location: PALACE[Math.floor(i / 3) % PALACE.length],
    });
  }

  return blocks;
}

export function generateBlockPhrase(block: Block): string {
  return block.tokens
    .map((t) => {
      if (t.type === "letter") return `${t.name} ${t.size}`;
      if (t.type === "number") return `com ${t.name}`;
      return t.name;
    })
    .join(" ");
}

export function generateStory(blocks: Block[]): string {
  return blocks
    .map((block) => {
      const { tokens, location } = block;
      let scene = `No ${location}, `;

      tokens.forEach((t, i) => {
        if (t.type === "letter") {
          const desc = t.size === "gigante" ? "enorme" : "minusculo";
          scene += i === 0 ? `um ${t.name} ${desc}` : ` com um ${t.name} ${desc}`;
        } else if (t.type === "number") {
          scene += ` segurando ${t.name}`;
        } else if (t.type === "structural") {
          scene += t.c.match(/[({\[]/)
            ? `. ${t.name} surgindo`
            : `. ${t.name}`;
        } else {
          scene += `. ${t.name}`;
        }
      });

      return scene + "!";
    })
    .join("\n\n");
}

export function getBadgeClass(type: Token["type"]): string {
  const map: Record<string, string> = {
    letter: "badge-letter",
    number: "badge-number",
    structural: "badge-structural",
    financial: "badge-financial",
    energy: "badge-energy",
    directional: "badge-directional",
    punctuation: "badge-punctuation",
  };
  return map[type] || "badge-letter";
}
