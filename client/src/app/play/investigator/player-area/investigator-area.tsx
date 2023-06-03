import PlayArea from '../play-area/play-area';
import ThreatArea from '../threat-area/threat-area';
import styles from './investigator-area.module.scss';

/* eslint-disable-next-line */
export interface InvestigatorAreaProps {
  name: string
}

export function InvestigatorArea(props: InvestigatorAreaProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InvestigatorArea for {props.name}!</h1>
      <ThreatArea></ThreatArea>
      <PlayArea></PlayArea>
    </div>
  );
}

export default InvestigatorArea;
