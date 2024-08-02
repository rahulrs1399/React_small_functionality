import useFetch from ".";

export default function UseFetchHookTest(){

    const [data, pendding, error] = useFetch(
        "https://dummyjson.com/products?limit=100", {}
    );

    return (
        <div>
            <h1>Custom useFetchHook</h1>
        </div>
    )
}