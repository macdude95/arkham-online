import GameBoard from '../game-board/game-board';
import styles from './game.module.scss';

/* eslint-disable-next-line */
export interface GameProps {}

export function Game(props: GameProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Game!</h1>
      <GameBoard />
    </div>
  );
}

export default Game;

