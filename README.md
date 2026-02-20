# Memorix v3

Sistema de Codificacao Visual para Senhas - Transforme senhas complexas em historias memoraveis.

## Como Funciona

O Memorix usa a tecnica do **Palacio Mental** (Method of Loci) para transformar senhas em imagens vivas e historias faceis de lembrar.

O Method of Loci, tambem conhecido como Palacio da Memoria, e uma tecnica milenar com evidencias na Roma Antiga, onde oradores como Cicero a utilizavam para memorizar longos discursos. Hoje, esse metodo e amplamente empregado em competicoes mundiais de memorizacao, permitindo que campeoes memorizem sequencias de milhares de digitos, cartas e outros dados com impressionante precisao.

### Sistema de Codificacao

A senha e dividida em blocos de 3 caracteres. Cada caractere vira uma imagem:

| Tipo | Regra | Exemplo |
|------|-------|---------|
| **Letras** | Maiuscula = Gigante / Minuscula = Pequeno | `A` = Aguia gigante, `a` = aguia pequena |
| **Numeros** | Cada numero vira um objeto | `1` = Vela, `2` = Cisne, `3` = Tridente |
| **Simbolos** | Classificados por categoria | `!` = Explosao, `@` = Redemoinho, `$` = Chuva de dinheiro |

### Palacio Mental

Os blocos sao distribuidos em 5 locais fixos do seu palacio mental:

1. **Sofa** - Primeiro bloco
2. **TV** - Segundo bloco
3. **Mesa** - Terceiro bloco
4. **Porta** - Quarto bloco
5. **Cozinha** - Quinto bloco (repete se necessario)

### Exemplo Pratico

Senha: `Ab3!xY`

**Bloco 1 (Sofa):** Aguia gigante com baleia pequena segurando Tridente. Explosao!

**Bloco 2 (TV):** Tesoura pequena com Yeti gigante!

Visualize: *No sofa, uma aguia gigante carrega uma baleia pequena que segura um tridente, de repente acontece uma explosao! Na TV, uma tesoura pequena esta com um yeti gigante.*

## Instalacao

```bash
npm install
```

## Executar

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## Tecnologias

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Estrutura do Projeto

```
app/
├── lib/
│   ├── data.ts        # Tabelas de codificacao
│   ├── parser.ts      # Logica de parsing
│   └── useMemorix.ts  # Hook de estado
├── components/
│   ├── Header.tsx
│   ├── PasswordInput.tsx
│   ├── Preview.tsx
│   ├── BlocksSection.tsx
│   ├── StorySection.tsx
│   └── Tables.tsx
└── page.tsx
```

## Proximos Passos

Estamos trabalhando em novas funcionalidades:

- **Integracao com IA** - Geracao de historias mais ricas e personalizadas usando modelos de linguagem
- **Novas funcionalidades** - Em breve anunciaremos mais recursos para melhorar sua experiencia

---

Feito com carinho para ajudar voce a nunca mais esquecer suas senhas.
