import { Link } from "react-router-dom";
import products from "../products";
import "./Home.css";
function Home() {
  return (
    <div>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name} - {product.price} تومان
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
