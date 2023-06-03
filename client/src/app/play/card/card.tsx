import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps { 
  imageUrl: string,
}

export function Card(props: CardProps) {
  return (
    <div className={styles['container']}>
      <img src={props.imageUrl} alt='Alt Text TEMP'></img>
    </div>
  );
}

export default Card;
