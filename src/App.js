import CounterComponent from "./components/CounterComponent";
import List from "./components/List";
import RenderExample from "./components/RenderExample";
import CollectionsExample from "./components/CollectionsExample";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CollectionsExample />
        {/* <RenderExample /> */}
        {/* <List /> */}
        {/* <CounterComponent /> */}
      </header>
    </div>
  );
}

export default App;
