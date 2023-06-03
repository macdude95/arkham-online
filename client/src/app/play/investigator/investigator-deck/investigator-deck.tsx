import styles from './investigator-deck.module.scss';

/* eslint-disable-next-line */
export interface InvestigatorDeckProps {}

export function InvestigatorDeck(props: InvestigatorDeckProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InvestigatorDeck!</h1>
    </div>
  );
}

export default InvestigatorDeck;
