import {useEffect, useState} from "react";

export default function DataFetch() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        const response = await fetch('https://api.randomuser.me/');
        const data = await response.json();
        const [item] = data.results;

        setUser(item)
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : <h1>{user.name.first} {user.name.last}</h1>}
        </div>
    )
}