import { Header } from './Header/Header';
import RecipeItem from './RecipeItem/RecipeItem';

function App() {
  return (
    <div>
      <Header />
      <RecipeItem
        recipe={{
          id: 1,
          name: 'lasagna',
        }}
      />
      <RecipeItem
        recipe={{
          id: 2,
          name: 'Pizza',
        }}
      />
      <RecipeItem
        recipe={{
          id: 3,
          name: 'Potato',
        }}
      />
    </div>
  );
}

export default App;
