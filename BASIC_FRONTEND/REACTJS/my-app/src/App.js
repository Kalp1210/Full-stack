import logo from "./logo.svg";
import "./App.css";

// import Greeter from "./components/jsxDetail/Greeter";
// import { Dog, add } from "./components/jsxDetail/dog";
// import LoginForm from "./loginForm";
// import Die from "./components/jsxDetail/Die";
// import DiceRolls from "./components/jsxDetail/DiceRolls";
import JsxDetail from "./screens/jsxDetail/jsxDetail";
import PokeCardScr from "./screens/pokeCard/PokeCardScr";

// add(1, 4);
function App() {
  return (
    <div className="App">
      {/* when we have slef closing tags in react we have to close them like below wala */}
      {/* <LoginForm />
      <Greeter />
      <Greeter />
      <Dog />
      <Dog /> */}
      {/* <Die />
      <Die />
      <Die /> */}
      {/* <DiceRolls />
      <DiceRolls /> */}
      {/* yeh screen hai */}
      {/* <JsxDetail /> */}
      <PokeCardScr />

      <header className="App-header">{/* <h1>hellllooooo</h1> */}</header>
    </div>
  );
}

export default App;
