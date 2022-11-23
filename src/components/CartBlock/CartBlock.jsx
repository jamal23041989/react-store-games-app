import { BiCartAlt } from 'react-icons/bi'

import styles from './CartBlock.module.css'

export const CartBlock = () => {
  return (
    <div className={styles.cartBlock}>
      <BiCartAlt size={25} className={styles.cartBlockIcon} />
      <span className={styles.CartBlockTotalPrice}>2345 руб.</span>
    </div>
  )
}
