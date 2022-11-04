import styles from '../../styles/Pages.module.css';

const ContainerWrapper = ({children}) => {
  return (
    <main className={styles.container}>
      {children}
    </main>
  );
};

export default ContainerWrapper;