import styles from './game-board.module.scss';
import InvestigatorArea from '../investigator/player-area/investigator-area';
import ScenarioArea from '../scenario/scenario-area/scenario-area';

/* eslint-disable-next-line */
export interface GameBoardProps {}

export function GameBoard(props: GameBoardProps) {
  
  const list = ['player1', 'player2']

  return (
    <div className={styles['container']}>
      <h1>Welcome to GameBoard!</h1>
      <ScenarioArea></ScenarioArea>
      {list.map(item => {
        return <InvestigatorArea name={item}></InvestigatorArea>
      })}
      
    </div>
  );
}

export default GameBoard;
