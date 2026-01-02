import styles from './sidebar.module.scss';

const NAV_ITEMS = [
    { label: "Visão Geral", key: "dashboard"},
    { label: "Coleção", key: "collection"},
    { label: "Lista de Desejos", key: "wishlist"},
    { label: "Estatísticas da coleção", key: "analytics"},
    { label: "Conquistas", key: "badges"},
];

export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.profile}>
                <div className={styles.avatar} />
                <div>
                    <div className={styles.name}> Rodrigo</div>
                    <div className={styles.subtitle}> Nivel 1, O Colecionador</div>
                </div>
            </div>
            <nav className={styles.nav}>
            {NAV_ITEMS.map((item) => (
                <button key={item.key} className={styles.navItem} type="button">
                {item.label}
                </button>
            ))}
            </nav>
            
            <div className={styles.footer}>
                <button className={styles.cta} type="button">
                    + Adicionar Item
                </button>
            </div>
        </div>
    );
}
