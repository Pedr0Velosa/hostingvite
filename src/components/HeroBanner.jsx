import styles from '../../styles/HeroBanner.module.css';
import {TbDrone} from 'react-icons/tb';

const HeroBanner = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.logo}>
            Fiap's Delivery
          </h1>
          <h2>
            A entrega mais rápida e legal que poderia ter
          </h2>
          <p>
            Fazemos a entrega com um drone que alcaça até <span>80 Km/h</span>
          </p>
        </div>
        <div className={styles.icon}>
          <TbDrone size={'inherit'} />
        </div>
      </section>

    </>
  );
};

export default HeroBanner;