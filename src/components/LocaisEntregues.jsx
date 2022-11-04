import styles from '../../styles/Locais.module.css';

export default function LocaisEntregues ({estados}) {
  return (
    <div>
      <h1 className={styles.title}>
        Atendemos os seguintes estados
      </h1>
      <ul className={styles.list}>
        {estados.map(estado => (
          <li
            key={estado.ID}
            className={styles['list-item']}
          >
            <h1>{estado.Sigla}</h1>
            <p>{estado.Nome}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

