import { useParams } from "react-router-dom";
import products from "../products";
function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  return (
    <h1>
      جزئیات محصول{product.price} {product.name}
    </h1>
  );
}
export default ProductDetail;
