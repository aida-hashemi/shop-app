import { useParams } from "react-router-dom";
import products from "../products";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p className="price">{product.price} تومان</p>
    </div>
  );
}

export default ProductDetail;
