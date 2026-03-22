import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";

function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar title="ShopFast Store" />
        <main className="app-content">
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greetings={t("catalog.featured")} />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer greetings={t("catalog.selected")} />}
            />
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order/:orderId" element={<OrderSuccess />} />
            <Route
              path="*"
              element={
                <div className="not-found">
                  <h1>404</h1>
                  <p>Page not found</p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
