import styles from "./kpi-card.module.scss";
import type { KpiCardData } from "../../types/dashboard";
import { KpiCard } from "./kpi-card";

type Props = {
    items: KpiCardData[];
}

export function KpiGrid({ items }: Props) {
    return (
        <section className={styles.grid} aria-label="KPIs da coleção">
            {items.map((kpi) => (
                <KpiCard key={kpi.id} data={kpi} />
            ))}
        </section>
    );
}