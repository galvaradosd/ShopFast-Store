import { db } from "./config";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export const getProducts = async () => {
  const snapshot = await getDocs(collection(db, "products"));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const getProductsByCategory = async (categoryId) => {
  const q = query(
    collection(db, "products"),
    where("category", "==", categoryId),
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const getProductById = async (productId) => {
  const ref = doc(db, "products", productId);
  const snapshot = await getDoc(ref);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};

export const createOrder = async (buyer, items, total) => {
  const docRef = await addDoc(collection(db, "orders"), {
    buyer,
    items,
    total,
    date: serverTimestamp(),
  });
  return { id: docRef.id };
};
