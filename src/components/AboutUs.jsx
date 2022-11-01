import styles from '../styles/AboutUs.module.scss';
import Card from './Card';

import { mockData } from '../services/mockData';

const AboutUs = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.newCollection}>
          <h1 className={styles.title}>nueva colección</h1>
          <div className={styles.dashboard}>
            {
              mockData.map(item => (
                <Card img={item.src} />
              ))
            }
          </div>
        </div>
        <div className={styles.boxes}>
          <div class={styles.box1}>
            <figure>
              <img src="https://res.cloudinary.com/dvovmo7yu/image/upload/v1667327054/onlinePharmacy/elevate-vofmJUVScDE-unsplash_wsqs7u.jpg" alt="" />
            </figure>
          </div>
          <div class={styles.box2}>
            <figure>
              <img src="https://res.cloudinary.com/dvovmo7yu/image/upload/v1667327054/onlinePharmacy/elevate-vofmJUVScDE-unsplash_wsqs7u.jpg" alt="" />
            </figure>
          </div>
          <div class={styles.box3}>
            <figure>
              <img src="https://res.cloudinary.com/dvovmo7yu/image/upload/v1667345339/onlinePharmacy/clay-banks-cEzMOp5FtV4-unsplash_mdztyb.jpg" alt="" />
            </figure>
          </div>
          <div class={styles.box4}>
            <figure>
              <img src="https://res.cloudinary.com/dvovmo7yu/image/upload/v1667327054/onlinePharmacy/elevate-vofmJUVScDE-unsplash_wsqs7u.jpg" alt="" />
            </figure>
          </div>
          <div class={styles.box5}>
            <figure>
              <img src="https://res.cloudinary.com/dvovmo7yu/image/upload/v1667327054/onlinePharmacy/elevate-vofmJUVScDE-unsplash_wsqs7u.jpg" alt="" />
            </figure>
          </div>
          {/* <div class={styles.box6}>Six</div> */}
        </div>
      </div>
    </section>
  )
}

export default AboutUs;
