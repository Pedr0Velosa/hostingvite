import styles from '../../styles/Precos.module.css';
import SimulacaoPreco from './SimulacaoPreco';

export default function Precos () {
  return (
    <div className={styles.precos}>
      <p className={styles.text}>
        Nossos drone possuem paineis solares que permitem que sejam carregados enquanto fazem as entregas, barateando ainda mais o frete do produto. Além disso, consegue carregar caixas de até 50 kg, sendo capazes de realizar quase qualquer entrega.
      </p>
      <p className={styles.text}>
        Nós possuimos uma taxa fixa de R$0,20 por km voado.
      </p>
      <SimulacaoPreco />
    </div>
  );
};

