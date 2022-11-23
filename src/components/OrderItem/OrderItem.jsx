import { useDispatch } from 'react-redux'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import { GameCover } from '../GameCover'
import { deleteItemFromCart } from '../../redux/slices/Cart/cartSlice'

import styles from './OrderItem.module.css'

export const OrderItem = ({ game }) => {
  const dispatch = useDispatch()

  const onHandleClick = game => {
    dispatch(deleteItemFromCart(game.id))
  }

  return (
    <div className={styles.orderItem}>
      <div className={styles.orderItemCover}>
        <GameCover image={game.image} />
      </div>
      <div className={styles.orderItemTitle}>
        <span>{game.title}</span>
      </div>
      <div className={styles.orderItemPrice}>
        <span>{game.price} руб.</span>
        <AiOutlineCloseCircle onClick={onHandleClick} size={25} className={styles.cartItemDeleteIcon} />
      </div>
    </div>
  )
}
