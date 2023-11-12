import styles from './App.module.css';
import cn from 'classnames';
import { getAPIResource } from '../../utils/network';

const App = () => {
  return (
    <h1 className={cn(styles.header, styles.text)}>Kitty!</h1>
  )
}

export default App;
