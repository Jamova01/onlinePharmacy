import styles from '../styles/Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1>
          <span style={{'color': 'yellow'}}>más</span> de
          <span style={{ 'display': 'block' }}>800 mil</span>
          familias
          <span style={{ 'display': 'block' }}>habilitadas</span>
        </h1>
        <button className={styles.btn}>ver productos</button>
      </div>
    </section>
  )
}

export default Hero;
