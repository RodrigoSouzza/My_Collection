export type KpiCardVariant = "number" | "currency" | "text" | "progress";

export interface KpiCardData {
    id: string;
    title: string;
    variant: KpiCardVariant;

    value: string;
    delta?: string;
    deltaDirection?: "up" | "down" | "neutral";

    icon?: "box" | "dollar" | "universe" | "target";

    progress?: {
        label: string;
        percent: number;
        helperText?: string;
    };
}

export interface FeatureMinifigureData {
    id: string;
    title: string;
    description: string;
    imageAlt: string;
    imageUrl?: string;
    tags: string[];
    ctaLabel: string;
}

export interface InfoMinifigureData {
    id: string;
    label: string;
    title: string;
    subtitle: string;
    imageAlt: string;
    imageUrl?: string;
}

export interface AchievementData {
    id: string;
    title: string;
    status?: "unlocked" | "locked";
    icon?: "trophy" | "gem" | "shield" | "lock"
}

export interface RecentMinifigureData{
    id: string;
    name: string;
    collection: string;
    imageAlt: string;
    imageUrl?: string;
}

export interface DashboardMockData {
    kpis: KpiCardData[];
    featured: FeatureMinifigureData;
    infoCards: InfoMinifigureData[];
    recentAchievements: AchievementData[];
    recentlyAdded: RecentMinifigureData[];
}


