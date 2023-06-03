import Card from '../../card/card';
import styles from './scenario-cards.module.scss';

/* eslint-disable-next-line */
export interface ScenarioCardsProps {}

export function ScenarioCards(props: ScenarioCardsProps) {
  return (
    <div className={styles['flexbox-container']} >
      <Card imageUrl='https://arkhamdb.com/bundles/cards/01104.png'></Card>
      <Card imageUrl='https://arkhamdb.com/bundles/cards/01105.png'></Card>
      <Card imageUrl='https://arkhamdb.com/bundles/cards/01106.png'></Card>
      {/* // TODO Set up images and orientation based on which scenario is selected, current agenda status, difficulty, etc. */}
    </div>
  );
}

export default ScenarioCards;
