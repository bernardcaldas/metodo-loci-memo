export const LETTERS: Record<string, string> = {
  A: "Aguia",
  B: "Baleia",
  C: "Castelo",
  D: "Dragao",
  E: "Elefante",
  F: "Fogo",
  G: "Gato",
  H: "Helicoptero",
  I: "Ilha",
  J: "Jacre",
  K: "Rei",
  L: "Leao",
  M: "Montanha",
  N: "Ninja",
  O: "Ouro",
  P: "Pirata",
  Q: "Quadro",
  R: "Robo",
  S: "Serpente",
  T: "Tigre",
  U: "Unicornio",
  V: "Vulcao",
  W: "Mago",
  X: "Tesoura",
  Y: "Yeti",
  Z: "Zumbi",
};

export const NUMBERS: Record<string, string> = {
  0: "Bola",
  1: "Vela",
  2: "Cisne",
  3: "Tridente",
  4: "Cadeira",
  5: "Estrela",
  6: "Gancho",
  7: "Machado",
  8: "Boneco de neve",
  9: "Balao com rabo",
};

export type SymbolType =
  | "structural"
  | "financial"
  | "energy"
  | "directional"
  | "punctuation";

export interface SymbolData {
  n: string;
  t: SymbolType;
}

export const SYMBOLS: Record<string, SymbolData> = {
  "(": { n: "Boca aberta", t: "structural" },
  ")": { n: "Boca fechando", t: "structural" },
  "[": { n: "Caixa aberta", t: "structural" },
  "]": { n: "Caixa fechando", t: "structural" },
  "{": { n: "Mao aberta", t: "structural" },
  "}": { n: "Porta fechando", t: "structural" },
  $: { n: "Chuva de dinheiro", t: "financial" },
  "%": { n: "Placa girando", t: "financial" },
  "!": { n: "Explosao", t: "energy" },
  "@": { n: "Redemoinho", t: "energy" },
  "#": { n: "Grade gigante", t: "energy" },
  "&": { n: "Objetos grudados", t: "energy" },
  "*": { n: "Estrela explosiva", t: "energy" },
  "+": { n: "Cruz brilhante", t: "energy" },
  "-": { n: "Corte horizontal", t: "energy" },
  _: { n: "Linha no chao", t: "energy" },
  "=": { n: "Barras paralelas", t: "energy" },
  "^": { n: "Flecha para cima", t: "energy" },
  ">": { n: "Flecha direita", t: "directional" },
  "<": { n: "Flecha esquerda", t: "directional" },
  "/": { n: "Corte diagonal", t: "directional" },
  "\\": { n: "Corte invertido", t: "directional" },
  "|": { n: "Pilar vertical", t: "directional" },
  ".": { n: "Ponto preto", t: "punctuation" },
  ",": { n: "Gota caindo", t: "punctuation" },
  ":": { n: "Dois olhos", t: "punctuation" },
  ";": { n: "Olhos com rabo", t: "punctuation" },
  "'": { n: "Faisca", t: "punctuation" },
  '"': { n: "Duas faiscas", t: "punctuation" },
  "`": { n: "Gancho inclinado", t: "punctuation" },
  "~": { n: "Onda", t: "punctuation" },
};

export const PALACE = ["Sofa", "TV", "Mesa", "Porta", "Cozinha"];
