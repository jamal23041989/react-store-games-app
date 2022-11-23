import { GameBuy } from '../GameBuy'
import { GameCover } from '../GameCover'
import { GameGenre } from '../GameGenre'
import styles from './GameItem.module.css'

export const GameItem = ({ image, title, genres, price, video, id, description }) => {
  return (
    <div className={styles.gameItem}>
      <GameCover image={image} />
      <div className={styles.gameItemDetails}>
        <span className={styles.gameItemTitle}>{title}</span>
        <div className={styles.gameItemGenre}>
          {genres.map(genre => (
            <GameGenre key={genre} genre={genre} />
          ))}
        </div>
        <div className={styles.gameItemDescription}>{description}</div>
        <div className={styles.gameItemBuy}>
          <GameBuy price={price} />
        </div>
      </div>
    </div>
  )
}
