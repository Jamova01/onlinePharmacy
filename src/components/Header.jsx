import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h3>impormedical</h3>
        <input type="search" name="" id="" placeholder="¿QUÉ ESTÁS BUSCANDO? ESCRÍBELO AQUÍ..." />
        <ul>
          <li>
            <Link href="/" className={styles.link}>
              mis pedidos
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.link}>
              <span style={{ 'display': 'block' }}>
                hola aliado
              </span>ingresa
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.link}>
              <AiOutlineShoppingCart style={{ 'fontSize': '32px' }} />
              <span>carrito</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
