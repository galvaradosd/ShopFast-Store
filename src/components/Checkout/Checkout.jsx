import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCart } from "../../context/useCart";
import { createOrder } from "../../firebase/firestoreService";

import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { items, itemCount, totalAmount, clearCart } = useCart();

  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const isCartEmpty = items.length === 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = t("checkout.errors.name");
    }

    if (!values.phone.trim()) {
      nextErrors.phone = t("checkout.errors.phone");
    }

    if (!values.email.trim()) {
      nextErrors.email = t("checkout.errors.email");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = t("checkout.errors.emailInvalid");
    }

    if (!values.confirmEmail.trim()) {
      nextErrors.confirmEmail = t("checkout.errors.confirmEmail");
    } else if (
      values.email.trim().toLowerCase() !==
      values.confirmEmail.trim().toLowerCase()
    ) {
      nextErrors.confirmEmail = t("checkout.errors.emailMismatch");
    }

    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isCartEmpty) return;

    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setSending(true);
    try {
      const order = await createOrder(
        { name: values.name, phone: values.phone, email: values.email },
        items,
        totalAmount,
      );
      clearCart();
      navigate(`/order/${order.id}`);
    } catch {
      setErrors({ submit: t("checkout.errors.submit") });
    } finally {
      setSending(false);
    }
  };

  if (isCartEmpty) {
    return (
      <section className="checkout">
        <div className="checkout__empty">
          <p>{t("checkout.empty")}</p>
          <button type="button" onClick={() => navigate("/")}>
            {t("checkout.goToCatalog")}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout">
      <h2>{t("checkout.title")}</h2>

      <form className="checkout__form" onSubmit={handleSubmit}>
        <div className="checkout__field">
          <label htmlFor="name">{t("checkout.name")}</label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder={t("checkout.namePlaceholder")}
          />
          {errors.name && <p className="checkout__error">{errors.name}</p>}
        </div>

        <div className="checkout__field">
          <label htmlFor="phone">{t("checkout.phone")}</label>
          <input
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder={t("checkout.phonePlaceholder")}
          />
          {errors.phone && <p className="checkout__error">{errors.phone}</p>}
        </div>

        <div className="checkout__field">
          <label htmlFor="email">{t("checkout.email")}</label>
          <input
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder={t("checkout.emailPlaceholder")}
          />
          {errors.email && <p className="checkout__error">{errors.email}</p>}
        </div>

        <div className="checkout__field">
          <label htmlFor="confirmEmail">{t("checkout.confirmEmail")}</label>
          <input
            id="confirmEmail"
            name="confirmEmail"
            value={values.confirmEmail}
            onChange={handleChange}
            placeholder={t("checkout.emailPlaceholder")}
          />
          {errors.confirmEmail && (
            <p className="checkout__error">{errors.confirmEmail}</p>
          )}
        </div>

        <div className="checkout__summary">
          <p>{t("checkout.items", { count: itemCount })}</p>
          <p>{t("checkout.total", { value: totalAmount })}</p>
        </div>

        {errors.submit && <p className="checkout__error">{errors.submit}</p>}

        <div className="checkout__actions">
          <button
            type="button"
            onClick={() => navigate("/cart")}
            disabled={sending}
          >
            {t("checkout.back")}
          </button>
          <button type="submit" disabled={sending}>
            {sending ? t("checkout.processing") : t("checkout.confirm")}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
