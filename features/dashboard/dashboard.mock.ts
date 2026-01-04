import { DashboardMockData } from "./types/dashboard";

export const dashboardMock: DashboardMockData = {
  kpis: [
    {
      id: "kpi-total",
      title: "Total de Minifigures",
      variant: "number",
      value: "1.245",
      delta: "+12",
      deltaDirection: "up",
      icon: "box",
    },
    {
      id: "kpi-value",
      title: "Valor da Coleção",
      variant: "currency",
      value: "R$45,2k",
      delta: "+R$1,2k",
      deltaDirection: "up",
      icon: "dollar",
    },
    {
      id: "kpi-universe",
      title: "Universo mais presente",
      variant: "text",
      value: "Marvel",
      delta: "420 itens (33% do total)",
      deltaDirection: "neutral",
      icon: "universe",
    },
    {
      id: "kpi-progress",
      title: "Coleção • X-Men '97",
      variant: "progress",
      value: "80%",
      icon: "target",
      progress: {
        label: "Progresso",
        percent: 80,
        helperText: "Faltam 2 minifigures para completar",
      },
    },
  ],

  featured: {
    id: "featured-wolverine",
    title: "Wolverine — X-Men '97 (Edição Especial)",
    description:
      "Minifigure em excelente estado, com impressão detalhada e acessórios completos. Parte essencial da coleção X-Men '97.",
    imageAlt: "Wolverine — X-Men '97",
    imageUrl: "",
    tags: ["Joia da Coleção", "Minifigure Rara"],
    ctaLabel: "Ver Detalhes",
  },

  infoCards: [
    {
      id: "info-oldest",
      label: "Minifigure Mais Antiga",
      title: "Homem de Ferro",
      subtitle: "Adicionada em jan/2018",
      imageAlt: "Homem de Ferro",
      imageUrl: "",
    },
    {
      id: "info-new",
      label: "Nova Aquisição",
      title: "Deadpool — Versão Clássica",
      subtitle: "Adicionada há 2 dias",
      imageAlt: "Deadpool — Versão Clássica",
      imageUrl: "",
    },
  ],

  recentAchievements: [
    { id: "ach-1", title: "Colecionador Dedicado", status: "unlocked", icon: "trophy" },
    { id: "ach-2", title: "Minifigure Rara", status: "unlocked", icon: "gem" },
    { id: "ach-3", title: "Consistência da Coleção", status: "unlocked", icon: "shield" },
    { id: "ach-4", title: "Bloqueado", status: "locked", icon: "lock" },
  ],

  recentlyAdded: [
    {
      id: "recent-1",
      name: "Cyclops — X-Men '97",
      collection: "X-Men '97",
      imageAlt: "Cyclops",
      imageUrl: "",
    },
    {
      id: "recent-2",
      name: "Wolverine",
      collection: "X-Men '97",
      imageAlt: "Wolverine",
      imageUrl: "",
    },
    {
      id: "recent-3",
      name: "Gandalf — Terra Média",
      collection: "Senhor dos Anéis",
      imageAlt: "Gandalf",
      imageUrl: "",
    },
  ],
};
