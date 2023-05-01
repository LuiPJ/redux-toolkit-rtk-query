import { useGetRecipesQuery } from '../store/api/api';
import RecipeItem from './RecipeItem/RecipeItem';
import CreateRecipe from './create-recipe/CreateRecipe';
import { Header } from './header/Header';

function App() {
  const { isLoading, data } = useGetRecipesQuery();

  return (
    <section>
      <Header />
      {/* <User /> */}
      <CreateRecipe />
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <div>Not found </div>
        )}
      </div>
    </section>
  );
}

export default App;
