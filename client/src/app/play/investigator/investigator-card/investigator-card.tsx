import styles from './investigator-card.module.scss';

/* eslint-disable-next-line */
export interface InvestigatorCardProps {}

export function InvestigatorCard(props: InvestigatorCardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InvestigatorCard!</h1>
    </div>
  );
}

export default InvestigatorCard;
