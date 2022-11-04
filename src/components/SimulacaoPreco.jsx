'use client';

import {useState} from 'react';
import styles from '../../styles/Precos.module.css';

export default function SimulacaoPreco () {

  const [input, setInput] = useState(0);
  const [precoFinal, setPrecoFinal] = useState(0)

  const handleSimulacao = () =>{
    const invalid = document.getElementById('invalid')
    if(input <= 0) {
      setInput(0)
      setPrecoFinal(0)
      invalid.style.visibility = 'visible'
      return
    }
    invalid.style.visibility = 'hidden'
    setPrecoFinal(input * 0.2)
    return
  }

  return (
    <section>
      <fieldset className={styles.fieldset}>
        <legend className={styles.simulacao}>Simulação</legend>
        <div>
          <label htmlFor='preco'>Distância em Km: </label>
          <div style={{position:'relative', display:'inline-block'}}>
              <input
                type={'number'}
                name='preco'
                id='preco'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={styles.input}
                step={0.5}
              />
              <label htmlFor='preco' className={styles.invalid} id={'invalid'}>Selecione um valor positivo maior que 0</label>
          </div>
          <button 
            className={styles.simular}
            onClick={handleSimulacao}
            >
              Simular
            </button>
        </div>
        <div>
          <h1>
            Simulação
          </h1>
          <p>R${parseFloat(precoFinal).toFixed(2)}</p>
        </div>
      </fieldset>

    </section>
  );
};
