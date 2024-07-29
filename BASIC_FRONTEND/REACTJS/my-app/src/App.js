import logo from "./logo.svg";
import "./App.css";
import "./DieRolls.css";
import Greeter from "./Greeter";
import { Dog, add } from "./dog";
import LoginForm from "./loginForm";
import Die from "./Die";
import DiceRolls from "./DiceRolls";
add(1, 4);
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
      <DiceRolls className="DieRolls" />
      <DiceRolls className="DieRolls" />

      <header className="App-header">
        <h1>hellllooooo</h1>
      </header>
    </div>
  );
}

export default App;
