import styles from './investigator-discard-pile.module.scss';

/* eslint-disable-next-line */
export interface InvestigatorDiscardPileProps {}

export function InvestigatorDiscardPile(props: InvestigatorDiscardPileProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InvestigatorDiscardPile!</h1>
    </div>
  );
}

export default InvestigatorDiscardPile;
