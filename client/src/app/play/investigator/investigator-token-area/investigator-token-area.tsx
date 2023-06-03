import styles from './investigator-token-area.module.scss';

/* eslint-disable-next-line */
export interface InvestigatorTokenAreaProps {}

export function InvestigatorTokenArea(props: InvestigatorTokenAreaProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InvestigatorTokenArea! The intent of this area is to represent tokens on/owned by an investigator. This can include resources, damage, horror, doom, clues, etc.</h1>
    </div>
  );
}

export default InvestigatorTokenArea;
