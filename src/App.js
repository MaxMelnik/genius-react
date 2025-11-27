import CounterComponent from "./components/CounterComponent";
import List from "./components/List";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List />
        <CounterComponent />
      </header>
    </div>
  );
}

export default App;
