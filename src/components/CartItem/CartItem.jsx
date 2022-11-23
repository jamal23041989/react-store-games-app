import styles from './CartItem.module.css'

export const CartItem = ({ game }) => {
  const { title, price, id } = game

  return (
    <div className={styles.cartItem}>
      <span>{title}</span>
      <div className={styles.cartItemPrice}>
        <span>{price} руб.</span>
      </div>
    </div>
  )
}
