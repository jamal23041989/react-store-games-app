import { Button } from '../UI/Button'
import { useDispatch, useSelector } from 'react-redux'

import styles from './GameBuy.module.css'
import { deleteItemFromCart, setItemsCart } from '../../redux/slices/Cart/cartSlice'

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cartReducer.itemsInCart)
  const isItemInCart = items.some(item => item.id === game.id)

  const onHandleClick = e => {
    e.stopPropagation()

    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id))
    } else {
      dispatch(setItemsCart(game))
    }
  }

  return (
    <div className={styles.gameBuy}>
      <span className={styles.gameBuyPrice}>{game.price} руб.</span>
      <Button type={isItemInCart ? 'secondary' : 'primary'} onClick={onHandleClick}>
        {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
      </Button>
    </div>
  )
}
