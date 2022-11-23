import { calcTotalPrice } from '../../utils/calcTotalPrice'
import { CartItem } from '../CartItem'

import { Button } from '../UI/Button'

import styles from './CartMenu.module.css'

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className={styles.cartMenu}>
      <div className={styles.cartMenuGamesList}>
        {items.length > 0 ? items.map(game => <CartItem key={game.title} game={game} />) : 'Корзина пуста'}
      </div>
      {items.length > 0 ? (
        <div className={styles.cartMenuArrange}>
          <div className={styles.cartMenuTotalPrice}>
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} руб.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  )
}
