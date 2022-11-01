import Link from 'next/link';
import styles from '../styles/Services.module.scss';
import Card from './Card';
import { mockData } from '../services/mockData';

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/" className={styles.link}>sillas de ruedas</Link>
            </li>
            <li>
              <Link href="/" className={styles.link}>terapia en el hogar</Link>
            </li>
            <li>
              <Link href="/" className={styles.link}>movilidad</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.service}>
          <h1 className={styles.title}>sillas de ruedas</h1>
          <div className={styles.wrapper}>
            {
              mockData.map(item => (
                <Card img={item.src} />
              ))
            }
          </div>
        </div>

        <div className={styles.service}>
          <h1 className={styles.title}>sillas de ruedas</h1>
          <div className={styles.wrapper}>
            {
              mockData.map(item => (
                <Card img={item.src} />
              ))
            }
          </div>
        </div>

        <div className={styles.service}>
          <h1 className={styles.title}>terapia respiratoria</h1>
          <div className={styles.wrapper}>
            {
              mockData.map(item => (
                <Card img={item.src} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
