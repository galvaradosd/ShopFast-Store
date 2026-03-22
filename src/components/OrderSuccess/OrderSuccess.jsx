import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const { t } = useTranslation();

  return (
    <section className="order-success">
      <div className="order-success__card">
        <div className="order-success__icon">✓</div>

        <h2>{t("order.title")}</h2>
        <p>{t("order.subtitle")}</p>

        <div className="order-success__id-box">
          <span>{t("order.idLabel")}</span>
          <strong>{orderId}</strong>
        </div>

        <div className="order-success__actions">
          <button type="button" onClick={() => navigate("/")}>
            {t("order.backHome")}
          </button>
          <button
            type="button"
            onClick={() => navigate("/category/tecnologia")}
          >
            {t("order.keepShopping")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
