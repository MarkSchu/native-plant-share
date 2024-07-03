import Link from 'next/link';
import styles from './styles.module.css';

export default function Nav() {
    return (
        <div data-testid="nav" className={styles.nav}>
            <Link href="/" >
                NPS
            </Link>
            <Link href="/signup" >
                <button className={styles.button}>Sign Up</button>
            </Link>
        </div>
    )
}