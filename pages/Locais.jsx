import {useEffect,useState} from 'react';
import styles from '../styles/Pages.module.css';
import LocaisEntregues from '../src/components/LocaisEntregues';


const Locais = () =>{

  const [data,setData] = useState([])

  async function getData () {
    const res = await fetch('https://cdn.jsdelivr.net/npm/cidades-estados-brasil-json@1.0.3/Estados.json')
    const json = await res.json()
    setData(json)

    return json
  }

  useEffect(()=>{
    getData()
  },[])

  const estados = data?.slice(4,20)

  return (
    <section className={styles.container}>
      <LocaisEntregues estados={estados} />
    </section>
  );
};

export default Locais;
