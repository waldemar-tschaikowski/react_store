import ProductList from "../../components/ProductList";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      Home
      <ProductList />
    </div>
  );
}
