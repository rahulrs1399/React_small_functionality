import { useEffect, useState } from "react";


export default function useFetch(url, option={}){

    const [data, setData] = useState(null);
    const [pendding, setPendding] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData(){
        setPendding(true)
        try {
            const response = await fetch(url, {...option});
            if(!response.ok) throw new Error(response.statusText);

            const result = await response.json();
            setData(result);
            setError(null)
            setPendding(false)

        } catch (e) {
            setError(`${e}. Some Error Occured`)
            setPendding(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [url])

    return {data, error, pendding};
}