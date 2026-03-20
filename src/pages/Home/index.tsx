import { useState } from "react";
import { ChildA } from "../../components/ChildA";
import ProductList from "../../components/ProductList";
import styles from "./Home.module.css";
import { ChildB } from "../../components/ChildB";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      Home
      <ProductList />
      <ChildA count={count} setCount={setCount} />
      <ChildB count={count} setCount={setCount} />
    </div>
  );
}
