import styles from './ItemsInCart.module.css'

export const ItemsInCart = ({ quantity = 0 }) => {
  return quantity > 1 ? <div className={styles.itemsInCart}>{quantity}</div> : null
}
