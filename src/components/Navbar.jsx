import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>

      <ul>
        <li>
          <GiHamburgerMenu className={styles.icon} />
        </li>
        <li>
          <Link href="/" className={styles.link}>movilidad</Link>
        </li>
        <li>
          <Link href="/" className={styles.link}>cuidado en el hogar<span>ingresa</span></Link>
        </li>
        <li>
          <Link href="/" className={styles.link}>profesionales de la salud</Link>
        </li>
        <li>
          <Link href="/" className={styles.link}>tapabocas y desinfeccion</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
