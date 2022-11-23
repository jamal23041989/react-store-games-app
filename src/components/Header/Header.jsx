import { Link } from 'react-router-dom'

import { CartBlock } from '../CartBlock'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.headerStoreTitle}>
          Game Store
        </Link>
      </div>
      <div className={`${styles.wrapper} ${styles.headerCartBtnWrapper}`}>
        <CartBlock />
      </div>
    </div>
  )
}
