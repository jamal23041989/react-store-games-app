import { useState } from 'react'
import { BiCartAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { calcTotalPrice } from '../../utils/calcTotalPrice'

import { CartMenu } from '../CartMenu'
import { ItemsInCart } from '../ItemsInCart'

import styles from './CartBlock.module.css'

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)

  const items = useSelector(state => state.cartReducer.itemsInCart)
  const totalPrice = calcTotalPrice(items)

  return (
    <div className={styles.cartBlock}>
      <ItemsInCart quantity={items.length} />
      <BiCartAlt size={25} className={styles.cartBlockIcon} onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
      <span className={styles.CartBlockTotalPrice}>{totalPrice} руб.</span>
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  )
}
