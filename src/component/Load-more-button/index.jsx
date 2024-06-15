import { useEffect, useState } from "react";
import "./style.css";

export function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const data = await response.json();
      // console.log(data);

      if(data && data.products && data.products.length){
        setProducts((prevProducts) =>
          [...prevProducts, ...data.products]
        );
        // setProducts((prevProducts) => {
        //   console.log("Previous products:", prevProducts);
        //   console.log("Fetched data:", data.products);
        //   const updatedProducts = [...prevProducts, ...data.products];
        //   console.log("Updated products:", updatedProducts);
        //   return updatedProducts;
        // });
        setLoading(false);
      }
      // console.log(products)
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisabledButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading data!, Please wait.</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length ? (
          products.map((productItem) => (
            <div className="products" key={productItem.id}>
              <img alt={productItem.title} src={productItem.thumbnail} />
              <p>{productItem.title}</p>
              <p>Price - ${productItem.price}</p>
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
      <div className="button-container">
        <button disabled={disabledButton} onClick={() => setCount(count + 1)}>
          Load more
        </button>
      </div>
      <div className="reached">
        {disabledButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
