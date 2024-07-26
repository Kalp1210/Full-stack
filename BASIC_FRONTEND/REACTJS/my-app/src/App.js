import logo from "./logo.svg";
import "./App.css";
import Greeter from "./Greeter";
import { Dog, add } from "./dog";

add(1, 4);
function App() {
  return (
    <div className="App">
      <Greeter />
      <Greeter />
      <Dog />
      <Dog />

      <header className="App-header">
        <h1>hellllooooo</h1>
      </header>
    </div>
  );
}

export default App;
