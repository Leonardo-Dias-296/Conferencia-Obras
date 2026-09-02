// Paleta central do app — evita cores "soltas" espalhadas pelo código.
// Segue a regra do spec: Verde = concluído, Amarelo = pendente,
// Vermelho = problema, Cinza = sem materiais.

export const colors = {
  background: "#F7F7F8",
  surface: "#FFFFFF",
  border: "#E4E4E7",

  textPrimary: "#18181B",
  textSecondary: "#71717A",

  primary: "#2563EB",
  primaryText: "#FFFFFF",

  statusPendente: "#F5A524",
  statusPendenteBg: "#FEF3E2",

  statusConcluido: "#22C55E",
  statusConcluidoBg: "#EAFBF0",

  statusProblema: "#EF4444",
  statusProblemaBg: "#FDECEC",

  statusSemMateriais: "#9CA3AF",
  statusSemMateriaisBg: "#F3F4F6",
} as const;
