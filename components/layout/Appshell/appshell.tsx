import styles from './appshell.module.scss';
import { Sidebar } from '../Sidebar/sidebar';
import { Topbar }  from '../Topbar/topbar';
import App from 'next/app';

type AppShellProps = {
    children: React.ReactNode;
};

export function Appshell ({ children }: AppShellProps) {
    return (
        <div className={styles.shell}>
            <aside className={styles.sidebar}>
                <Sidebar />
            </aside>

            <div className={styles.main}>
                <header className={styles.topbar}>
                    <Topbar />
                </header>

                <main className={styles.content}> {children}</main>
            </div>
        </div>
    );
}