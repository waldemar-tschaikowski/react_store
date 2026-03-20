import { useEffect, useState } from "react";
import type Category from "../../types/Category";
import axios from "axios";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await axios.get(
        "https://api.escuelajs.co/api/v1/categories",
      );
      setCategories(data);
    }

    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Categories</h2>

      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}