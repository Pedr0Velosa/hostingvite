import styles from '../../styles/Main.module.css';

export default function Main () {
  return (
    <section
      className={styles.container}
    >
      <article>
        <p className={styles.text}>
          Nós da Fiap's Delivery atendemos em quase todo o Brasil, e prometemos entregar seu produto em menos de <span className={styles.highligth}>1</span> dia. Não perca a chance e venha conhecer o mais novo jeito de entrega já feito.
        </p>
      </article>
    </section>
  );
};
