import "./ItemDetail.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCart } from "../../context/useCart";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1);
  const inStock = product.stock > 0;

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () => setQuantity((q) => Math.min(product.stock, q + 1));

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <section className="detail">
      <div className="detail__media">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="detail__info">
        <span className="detail__category">{product.category}</span>
        <h2>{product.name}</h2>
        <p className="detail__price">${product.price}</p>
        <p className={`detail__stock ${inStock ? "" : "is-empty"}`}>
          {inStock
            ? t("detail.stock", { count: product.stock })
            : t("detail.noStock")}
        </p>
        <p className="detail__description">{product.description}</p>

        {inStock && (
          <div className="detail__counter">
            <button type="button" onClick={decrease} disabled={quantity === 1}>
              -
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              onClick={increase}
              disabled={quantity === product.stock}
            >
              +
            </button>
          </div>
        )}

        <div className="detail__actions">
          <button
            onClick={handleAddToCart}
            type="button"
            className="detail__cta"
            disabled={!inStock}
          >
            {inStock ? t("detail.addToCart") : t("detail.unavailable")}
          </button>
          <button
            type="button"
            className="detail__back"
            onClick={() => navigate("/")}
          >
            {t("detail.keepShopping")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
