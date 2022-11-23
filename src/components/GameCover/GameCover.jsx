import styles from './GameCover.module.css'

export const GameCover = ({ image }) => {
  return (
    <div className={styles.gameCover} style={{ backgroundImage: `url(${image})` }}>
      <img src="" alt="" />
    </div>
  )
}
