import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../firebase/firestoreService";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProductById(productId)
      .then((res) => {
        if (!res) {
          setError("Producto no encontrado");
          return;
        }
        setProduct(res);
      })
      .catch(() => setError("No pudimos cargar el producto."))
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) {
    return (
      <div className="status">
        <div className="spinner" />
        <span>Cargando detalle...</span>
      </div>
    );
  }

  if (error) {
    return <div className="status">{error}</div>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
