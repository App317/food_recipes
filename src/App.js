import logo from './logo.svg';
import './App.css';

function App() {
  const APP_ID = 'd06c5473';
  const APP_KEY = '6c2a6f727107d36aa798ae7511b4ef41';

  const exampleReq = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
