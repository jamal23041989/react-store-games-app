import { useSelector } from 'react-redux'
import { GameBuy } from '../../components/GameBuy'
import { GameCover } from '../../components/GameCover'
import { GameGenre } from '../../components/GameGenre'

import styles from './GamePage.module.css'

export const GamePage = () => {
  const game = useSelector(state => state.gameReducer.currentGame)

  if (!game) return null

  return (
    <div className={styles.gamePage}>
      <h1 className={styles.gamePageTitle}>{game.title}</h1>
      <div className={styles.gamePageContent}>
        <div className={styles.gamePageLeft}>
          <iframe width="90%" height="400px" src={game.video} title="Youtube Video Player" frameBorder="0"></iframe>
        </div>
        <div className={styles.gamePageRight}>
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className={styles.gamePageSecondaryText}>Популярные метки этого продукта:</p>
          {game.genres.map(genre => (
            <GameGenre key={genre} genre={genre} />
          ))}
          <div className={styles.gamePageBuyGame}>
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  )
}
