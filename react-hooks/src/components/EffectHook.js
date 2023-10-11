import {useEffect, useState} from "react";

export default function EffectHook() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log('render');
    }, [count]);
    return (
        <div>
            <p>Count - {count}</p>
            <p>Name - {name}</p>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}