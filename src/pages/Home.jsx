import { Link } from "react-router-dom";
import products from "../products";
function Home() {
  return (
    <div>
      <ul>
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
