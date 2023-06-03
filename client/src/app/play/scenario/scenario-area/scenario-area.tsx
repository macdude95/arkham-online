import Location from '../location/location';
import ScenarioCards from '../scenario-cards/scenario-cards';
import styles from './scenario-area.module.scss';

/* eslint-disable-next-line */
export interface ScenarioAreaProps {}

export function ScenarioArea(props: ScenarioAreaProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ScenarioArea!</h1>
      <ScenarioCards></ScenarioCards>
      <Location></Location> {/* // TODO Instead of just 1 location, allow for complex layout of locations */}
    </div>
  );
}

export default ScenarioArea;
