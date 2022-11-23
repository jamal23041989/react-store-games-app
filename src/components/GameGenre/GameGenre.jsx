import styles from './GameGenre.module.css'

export const GameGenre = ({ genre }) => {
  return <span className={styles.gameGenre}>{genre}</span>
}
