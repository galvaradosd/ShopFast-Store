import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CardWidget from "../CardWidget/CardWidget";
import { useCart } from "../../context/useCart";
import { useTheme } from "../../context/useTheme";
import { MoonIcon, SunIcon, GlobeIcon } from "../Icons/Icons";

function NavBar({ title }) {
  const { itemCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language.startsWith("es") ? "en" : "es";
    i18n.changeLanguage(next);
  };

  const currentLang = i18n.language.startsWith("es") ? "ES" : "EN";

  return (
    <header className="nav">
      <div className="nav__inner">
        <NavLink to="/" className="nav__brand">
          {title}
        </NavLink>

        <nav className="nav__links" aria-label="Categorías">
          <NavLink className="nav__link" to="/category/tecnología">
            {t("nav.technology")}
          </NavLink>
          <NavLink className="nav__link" to="/category/ropa">
            {t("nav.clothing")}
          </NavLink>
          <NavLink className="nav__link" to="/category/hogar">
            {t("nav.home")}
          </NavLink>
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__lang-toggle"
            onClick={toggleLanguage}
            aria-label={t("nav.changeLanguage")}
          >
            <GlobeIcon />
            <span>{currentLang}</span>
          </button>
          <button
            type="button"
            className="nav__theme-toggle"
            onClick={toggleTheme}
            aria-label={t("nav.changeTheme")}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
          <CardWidget cartCount={itemCount} />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
