import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';

import styles from './RecipeItem.module.scss';

function RecipeItem({ recipe }) {
  const { favorites } = useFavorites();
  const isExists = favorites.some(r => r.id === recipe.id);

  const { toggleFavorites } = useActions();
  const { name } = recipe;
  return (
    <section>
      <div className={styles.item}>
        <h3>{name}</h3>
        <button onClick={() => toggleFavorites(recipe)} className={styles.button}>
          {isExists ? 'Remove from' : 'Add to Favorites'}
        </button>
      </div>
    </section>
  );
}

export default RecipeItem;
