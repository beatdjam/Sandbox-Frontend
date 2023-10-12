import {useReducer} from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return {...state, firstCounter: state.firstCounter + action.value};
        case 'decrement1':
            return {...state, firstCounter: state.firstCounter - action.value};
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value};
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
export default function CounterReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Count {count.firstCounter}</p>
            <button onClick={() => dispatch({type: 'increment1', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement1', value: 1})}>Decrement</button>
            <p>Count {count.secondCounter}</p>
            <button onClick={() => dispatch({type: 'increment2', value: 10})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 10})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}