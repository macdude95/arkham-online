import Card from '../../card/card';
import styles from './location.module.scss';

/* eslint-disable-next-line */
export interface LocationProps {}

export function Location(props: LocationProps) {
  return (
    <div className={styles['container']}>
      <Card imageUrl='https://arkhamdb.com/bundles/cards/01111b.png'></Card>
      {/* // TODO Add support for tokens, 1 or more investigator minis, 1 or more enemies, etc. */}
    </div>
  );
}

export default Location;
