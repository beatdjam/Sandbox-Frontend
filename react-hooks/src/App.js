import './App.css';
import Counter from "./components/Counter";
import CounterHook from "./components/CounterHook";
import FormHook from "./components/FormHook";
import ItemHook from "./components/ItemHook";

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterHook />
      <FormHook />
      <ItemHook/>
    </div>
  );
}

export default App;
