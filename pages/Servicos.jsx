import HeroBanner from '../src/components/HeroBanner';
import Main from '../src/components/Main';
import styles from '../styles/Pages.module.css';

export default function Servicos () {
  return (
    <>
      <main className={styles.container}>
        <HeroBanner />
        <Main />
      </main>
    </>
  );
};

