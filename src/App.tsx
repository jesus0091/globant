import { Link } from "react-router-dom";

function App() {
  return (
    <section className="flex flex-col justify-center items-center h-screen w-full">
      <h1 className="font-semibold"> Mini Ecommerce </h1>
      <Link to="/products">Go to product list page</Link>
    </section>
  );
}

export default App;
