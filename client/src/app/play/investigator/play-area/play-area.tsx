import AssetsArea from '../assets-area/assets-area';
import InvestigatorCard from '../investigator-card/investigator-card';
import InvestigatorDeck from '../investigator-deck/investigator-deck';
import InvestigatorDiscardPile from '../investigator-discard-pile/investigator-discard-pile';
import InvestigatorTokenArea from '../investigator-token-area/investigator-token-area';
import styles from './play-area.module.scss';

/* eslint-disable-next-line */
export interface PlayAreaProps {}

export function PlayArea(props: PlayAreaProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PlayArea!</h1>
      <AssetsArea></AssetsArea>
      <InvestigatorCard></InvestigatorCard>
      <InvestigatorTokenArea></InvestigatorTokenArea>
      <InvestigatorDeck></InvestigatorDeck>
      <InvestigatorDiscardPile></InvestigatorDiscardPile>
    </div>
  );
}

export default PlayArea;
