import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getProducts } from "../services";

export type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchProduct, setSearchProduct] = useState("");

  const handleSearchProductChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchProduct(event.target.value);
  };

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredProducts = products?.filter((p: Product) =>
    p.title.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <section className="py-6 flex flex-col justify-center items-center w-full">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 w-full">
        <h2 className="text-2xl font-bold">Product List</h2>
        {loading ? (
          <div className="flex justify-center items-center bg-white h-[30vh] w-full animate-pulse">
            <p>Loading products...</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="h-10 rounded-md border border-gray-400 px-4 w-full"
              placeholder="Search by Name"
              value={searchProduct}
              onChange={handleSearchProductChange}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts?.map((product: Product, id) => {
                return (
                  <div
                    className="flex flex-col border bg-white hover:shadow-md transition-all border-gray-300 gap-4 rounded-md p-4"
                    key={id}
                  >
                    <img
                      src={product?.image}
                      alt={product?.title}
                      className="bg-gray-100 h-48 w-full object-contain"
                    />
                    <div className="">
                      <p className="text-base font-semibold line-clamp-1">
                        {product?.title}
                      </p>
                      <p className="line-clamp-2 text-sm text-gray-600">
                        {product?.description}
                      </p>
                    </div>
                    <p className="font-semibold">Price: {product?.price}</p>
                    <Link
                      to={`/products/${product?.id}`}
                      className="product-footer"
                    >
                      View Details
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
