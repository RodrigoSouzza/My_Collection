import styles from "./topbar.module.scss"

export function Topbar() {
    return (
        <div className={styles.topbar}>
            <div className={styles.search}>
                <span className={styles.icon}>🔍</span>
                <input 
                    className={styles.input}
                    placeholder="Buscar por itens, coleções, universos..."
                    />
            </div>

            <div className={styles.actions}>
                <button className={styles.iconBtn} type="button" aria-label="Notificações">
                    🔔
                </button>
                <button className={styles.iconBtn} type="button" aria-label="NotificaÇões">
                    ⚙️
                </button>
            </div>
        </div>
    );
}