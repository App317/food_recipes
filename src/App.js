import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
  const APP_ID = 'd06c5473';
  const APP_KEY = '6c2a6f727107d36aa798ae7511b4ef41';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          type={recipe.recipe.cuisineType}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
