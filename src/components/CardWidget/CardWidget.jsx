import "./CardWidget.css";
import { useNavigate } from "react-router-dom";
import { CartIcon } from "../Icons/Icons";

function CardWidget({ cartCount }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="cart-widget"
      aria-label={`Cart with ${cartCount} items`}
      onClick={() => navigate("/cart")}
    >
      <span className="cart-widget__icon" aria-hidden="true">
        <CartIcon />
      </span>
      <span className="cart-widget__count">{cartCount}</span>
    </button>
  );
}

export default CardWidget;
