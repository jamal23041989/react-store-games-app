import { useSelector } from 'react-redux'
import { OrderItem } from '../../components/OrderItem'

import { calcTotalPrice } from '../../utils/calcTotalPrice'
import { enumerate } from '../../utils/enumerate'

import styles from './OrderPage.module.css'

export const OrderPage = () => {
  const items = useSelector(state => state.cartReducer.itemsInCart)

  if (items.length < 1) {
    return <h1>Ваша корзина пуста</h1>
  }

  return (
    <div className={styles.orderPage}>
      <div className={styles.orderPageLeft}>
        {items.map(game => (
          <OrderItem game={game} key={game.title} />
        ))}
      </div>
      <div className={styles.orderPageRight}>
        <div className={styles.orderPageTotalPrice}>
          <span>
            {items.length} товаров на сумму {calcTotalPrice(items)} руб.
            <span>
              {items.length} {enumerate(items.length, ['товар', 'товара', 'товаров'])} на сумму {calcTotalPrice(items)} руб.
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
