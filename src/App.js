import "./App.css";
import getLocation from "./Api/api";

function App() {
  getLocation();
  return (
    <div className="App">
      <h1>Hello Kostya</h1>
    </div>
  );
}

export default App;
