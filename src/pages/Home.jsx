import products from "../products";
function Home() {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} تومان
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
