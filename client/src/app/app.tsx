// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import Game from './play/game/game';

export function App() {
  return (
    <div className={styles['container']}>
      <Game />
      <h1>test</h1>
    </div>
  );
}

export default App;
