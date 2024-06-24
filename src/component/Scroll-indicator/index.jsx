import { useEffect, useState } from "react";

export default function ScrollIndicator ({url}) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(true)

    async function fetchProducts(getUrl){
        try {
            const response = await fetch(getUrl);
            const data = await response.json();

            console.log(data)
            
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchProducts(url);
    },[url])

}