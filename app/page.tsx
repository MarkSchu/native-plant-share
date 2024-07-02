import Link from 'next/link';
import Nav from './components/nav';
import styles from './styles.module.css';

function FindLink() {
  return (
    <Link href='/find'>
      <button className={`${styles.button} ${styles.findButton}`}>
        Find Plants
      </button>
    </Link>
  )
}

function ShareLink() {
  return (
    <Link href='/share'>
      <button className={`${styles.button} ${styles.shareButton}`}>
        Share Plants
      </button>
    </Link>
  )
}

export default function Home() {
  return (
    <div>
      <Nav />
       <main>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Native Plant Share
          </h1>
          <p className={styles.subtitle}>Help your local ecosystem with native plants.</p>
        </header>
        <section className={styles.buttons}>
          <FindLink />
          <ShareLink />
        </section>
      </main>
    </div>
  );
}
