import HelloWorldComponent from "./HelloWorldComponent";
import ClassComponent from "./ClassComponent";
import "./App.css";

function App() {
  const isFunctional = true;
  const hello = "Hi?";
  return (
    <div className="App">
      <header className="App-header">
        <p>{hello}</p>
        {isFunctional ? <HelloWorldComponent /> : <ClassComponent />}
      </header>
    </div>
  );
}

export default App;
