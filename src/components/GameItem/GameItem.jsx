import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'

import { setCurrentGame } from '../../redux/slices/Game/gameSlice'
import { GameBuy } from '../GameBuy'
import { GameCover } from '../GameCover'
import { GameGenre } from '../GameGenre'

import styles from './GameItem.module.css'

export const GameItem = ({ game }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onHandleClick = () => {
    dispatch(setCurrentGame(game))
    navigate(`/app/${game.title}`)
  }

  return (
    <div className={styles.gameItem} onClick={onHandleClick}>
      <GameCover image={game.image} />
      <div className={styles.gameItemDetails}>
        <span className={styles.gameItemTitle}>{game.title}</span>
        <div className={styles.gameItemGenre}>
          {game.genres.map(genre => (
            <GameGenre key={genre} genre={genre} />
          ))}
        </div>
        <div className={styles.gameItemBuy}>
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  )
}
