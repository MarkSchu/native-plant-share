import Link from 'next/link';
import styles from './styles.module.css';

export default function Nav() {
    return (
        <div className={styles.nav}>
            <Link href="/" >
                NPS
            </Link>
            <Link href="/signup" >
                <button className={styles.button}>Sign Up</button>
            </Link>
        </div>
    )
}