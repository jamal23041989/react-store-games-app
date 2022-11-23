import { Button } from '../UI/Button'
import styles from './GameBuy.module.css'

export const GameBuy = ({ price }) => {
  return (
    <div className={styles.gameBuy}>
      <span className={styles.gameBuyPrice}>{price} руб.</span>
      <Button type="primary" onClick={() => null}>
        В корзину
      </Button>
    </div>
  )
}
