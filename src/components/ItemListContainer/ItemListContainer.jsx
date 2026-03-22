import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getProducts,
  getProductsByCategory,
} from "../../firebase/firestoreService";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greetings }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const asyncFunctions = categoryId ? getProductsByCategory : getProducts;
    asyncFunctions(categoryId)
      .then((res) => {
        setProducts(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <section className="catalog">
      <header className="catalog__header">
        <h2>{greetings}</h2>
        <p>
          {categoryId
            ? t("catalog.category", { categoryId })
            : t("catalog.subtitle")}
        </p>
      </header>
      {loading ? (
        <div className="status">
          <div className="spinner" />
          <span>{t("catalog.loading")}</span>
        </div>
      ) : products.length === 0 ? (
        <div className="status">{t("catalog.empty")}</div>
      ) : (
        <ItemList products={products} />
      )}
    </section>
  );
}

export default ItemListContainer;
