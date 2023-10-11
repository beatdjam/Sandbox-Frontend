import {useEffect, useState} from "react";

export default function MouseEventEffect() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const getMousePosition = e => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        window.addEventListener('mousemove', getMousePosition);
        return () => window.removeEventListener('mousemove', getMousePosition)
    }, []);
    return (
        <div>
            <ul>
                <p>X - {x}</p>
                <p>Y - {y}</p>
            </ul>
        </div>
    )
}