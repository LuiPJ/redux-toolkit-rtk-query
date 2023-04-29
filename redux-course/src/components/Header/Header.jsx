import { AiFillStar } from 'react-icons/Ai';
import { useFavorites } from '../../hooks/useFavorites';

import styles from './Header.module.scss';

export const Header = () => {
  const { favorites } = useFavorites();

  return (
    <header className={styles.header}>
      <div className={styles.star}>
        <AiFillStar />
      </div>
      <span>{favorites.length}</span>
    </header>
  );
};
