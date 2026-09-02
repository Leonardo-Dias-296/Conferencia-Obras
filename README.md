# Conferência de Cargas

App mobile (React Native + Expo + TypeScript) para organizar a programação
diária de equipes/obras e conferir materiais antes da saída, substituindo
o processo manual em papel.

## Etapa 1 concluída ✅

Projeto base criado com:

- **Expo + React Native + TypeScript**
- **Expo Router** (navegação por arquivos, já configurado)
- Estrutura de pastas inicial (`app/`, `src/theme`, `src/types`)
- Paleta de cores central (`src/theme/colors.ts`) seguindo a regra do spec:
  verde = concluído, amarelo = pendente, vermelho = problema, cinza = sem materiais
- Modelos de dados (`src/types/models.ts`) já espelhando a especificação
  (Equipe, Obra, Material, ProgramacaoDia)
- Tela inicial estática (`app/index.tsx`) com o layout da "Tela 1" do spec

## Como rodar

```bash
npm install
npm run start
```

Depois abra no app **Expo Go** (iPhone/Android) escaneando o QR code, ou
pressione `i` para simulador iOS / `a` para emulador Android.

> Este ambiente de sandbox não tem acesso a um simulador ou ao registro npm
> completo para instalar tudo automaticamente — rode `npm install` na sua
> própria máquina para baixar as dependências.

## Estrutura atual

```
conferencia-cargas/
├── app/
│   ├── _layout.tsx      # Layout raiz (Stack navigation)
│   └── index.tsx        # Tela inicial
├── src/
│   ├── theme/
│   │   └── colors.ts    # Paleta central de cores
│   └── types/
│       └── models.ts    # Equipe, Obra, Material, ProgramacaoDia
├── app.json
├── babel.config.js
├── package.json
└── tsconfig.json
```

## Próximas etapas (conforme especificação)

- [ ] Etapa 2 — Navegação completa e telas básicas (Programação, Equipe, Checklist, Histórico)
- [ ] Etapa 3 — Refinar modelo de dados e persistência (AsyncStorage)
- [ ] Etapa 4 — Campo para colar a programação
- [ ] Etapa 5 — Parser inteligente da programação (texto → dados estruturados)
- [ ] Etapa 6 — Agrupamento automático por equipe/obra/sequência
- [ ] Etapa 7 — Checklist de materiais
- [ ] Etapa 8 — Observações e status especiais (visita técnica, kit no local, já no local)
- [ ] Etapa 9 — Finalização e assinatura na tela
- [ ] Etapa 10 — Geração de PDF
- [ ] Etapa 11 — Histórico local
- [ ] Etapa 12 — Teste com a programação real

# Conferencia-Obras
