import styles from './threat-area.module.scss';

/* eslint-disable-next-line */
export interface ThreatAreaProps {}

export function ThreatArea(props: ThreatAreaProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ThreatArea!</h1>
    </div>
  );
}

export default ThreatArea;
