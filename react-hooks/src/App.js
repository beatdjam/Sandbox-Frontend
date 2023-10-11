import './App.css';
import Counter from "./components/Counter";
import CounterHook from "./components/CounterHook";
import FormHook from "./components/FormHook";
import ItemHook from "./components/ItemHook";
import ClassEffect from "./components/ClassEffect";
import EffectHook from "./components/EffectHook";
import MouseEventEffect from "./components/MouseEventEffect";
import DataFetch from "./components/DataFetch";
import DataFetchById from "./components/DataFetchById";

function App() {
    return (
        <div className="App">
            <Counter/>
            <CounterHook/>
            <FormHook/>
            <ItemHook/>
            <ClassEffect/>
            <EffectHook/>
            <MouseEventEffect/>
            <DataFetch/>
            <DataFetchById/>
        </div>
    );
}

export default App;
