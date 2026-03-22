import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCart } from "../../context/useCart";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    items,
    itemCount,
    totalAmount,
    removeItem,
    updateItemQuantity,
    clearCart,
  } = useCart();

  if (items.length === 0) {
    return (
      <section className="cart">
        <h2>{t("cart.title")}</h2>
        <div className="cart__empty">
          <p>{t("cart.empty")}</p>
          <button type="button" onClick={() => navigate("/")}>
            {t("cart.goToCatalog")}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="cart">
      <h2>{t("cart.title")}</h2>
      <ul className="cart__list">
        {items.map((item) => (
          <li key={item.id} className="cart__item">
            <img src={item.img} alt={item.name} width="80" />

            <div>
              <h3>{item.name}</h3>
              <p>{t("cart.price", { value: item.price })}</p>
              <p>{t("cart.subtotal", { value: item.price * item.quantity })}</p>
            </div>

            <div className="cart__qty">
              <button
                type="button"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                type="button"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="cart__remove"
              onClick={() => removeItem(item.id)}
            >
              {t("cart.remove")}
            </button>
          </li>
        ))}
      </ul>

      <div className="cart__summary">
        <p>{t("cart.items", { count: itemCount })}</p>
        <p>{t("cart.total", { value: totalAmount })}</p>
      </div>

      <div className="cart__actions">
        <button type="button" onClick={clearCart}>
          {t("cart.clear")}
        </button>
        <button type="button" onClick={() => navigate("/checkout")}>
          {t("cart.checkout")}
        </button>
      </div>
    </section>
  );
};

export default Cart;
