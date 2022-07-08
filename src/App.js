import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <h1>Hello From React</h1>
      <Header title={"Tasks Tracker"}></Header>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
