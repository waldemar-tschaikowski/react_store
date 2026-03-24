import { useEffect, useState } from "react";
import type Product from "../../types/Product";
import { Link } from "react-router-dom";
import useCartCount from "../../hooks/useCartCount";
import { Button } from "../ui/Button/Button";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const { increment, decrement } = useCartCount();

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
