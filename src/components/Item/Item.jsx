import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Item.css";

const Item = ({ product }) => {
  const inStock = product.stock > 0;
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <article className="item-card">
      <div className="item-card__image-wrap">
        <img src={product.img} alt={product.name} loading="lazy" />
      </div>
      <div className="item-card__body">
        <span className="item-card__category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="item-card__price">${product.price}</p>
        <p className="item-card__stock">
          {inStock
            ? t("item.stock", { count: product.stock })
            : t("item.noStock")}
        </p>
        <button
          type="button"
          className="item-card__cta"
          onClick={() => navigate(`/detail/${product.id}`)}
        >
          {t("item.viewDetail")}
        </button>
      </div>
    </article>
  );
};

export default Item;
