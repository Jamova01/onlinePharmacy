import styles from '../styles/Card.module.scss';

const Card = (props) => {
  const {
    img
  } = props
  return(
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className={styles.body}>
        <p>
          Silla de Ruedas Motorizada gris metalizada abatible M2000
        </p>
      </div>
    </div>
  )
}

export default Card;
