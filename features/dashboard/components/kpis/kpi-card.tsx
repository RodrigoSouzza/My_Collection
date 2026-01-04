import styles from "./kpi-card.module.scss";
import type { KpiCardData } from "../../types/dashboard";

type Props = {
  data: KpiCardData;
};

function Delta({ delta, direction }: { delta?: string; direction?: "up" | "down" | "neutral" }) {
  if (!delta) return null;

  const cls =
    direction === "up"
      ? styles.deltaUp
      : direction === "down"
      ? styles.deltaDown
      : styles.deltaNeutral;

  return <span className={`${styles.delta} ${cls}`}>{delta}</span>;
}

export function KpiCard({ data }: Props) {
  const progress = data.variant === "progress" ? data.progress : undefined;

  return (
    <section className={styles.card} aria-label={data.title}>
      <header className={styles.header}>
        <p className={styles.title}>{data.title}</p>
        {data.icon ? <span className={styles.icon} aria-hidden="true" /> : null}
      </header>

      <div className={styles.body}>
        <div className={styles.valueRow}>
          <p className={styles.value}>{data.value}</p>
          <Delta delta={data.delta} direction={data.deltaDirection} />
        </div>

        {progress ? (
          <div className={styles.progressWrap}>
            <div className={styles.progressMeta}>
              <span className={styles.progressLabel}>{progress.label}</span>
              <span className={styles.progressPercent}>{progress.percent}%</span>
            </div>

            <div
              className={styles.progressBar}
              role="progressbar"
              aria-valuenow={progress.percent}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className={styles.progressFill} style={{ width: `${progress.percent}%` }} />
            </div>

            {progress.helperText ? <p className={styles.helperText}>{progress.helperText}</p> : null}
          </div>
        ) : data.deltaDirection === "neutral" && data.delta ? (
          <p className={styles.helperText}>{data.delta}</p>
        ) : null}
      </div>
    </section>
  );
}
