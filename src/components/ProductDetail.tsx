import { useEffect, useState } from "react";

import type { Product } from "./ProductList";
import { getProductById } from "../services";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(productId!)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <section className="py-6 flex flex-col items-center w-full">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-6">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md max-w-max"
          onClick={handleBack}
        >
          Back
        </button>
        {loading ? (
          <div className="flex justify-center items-center bg-white h-[30vh] w-full animate-pulse">
            <p>Loading products...</p>
          </div>
        ) : (
          <div className="border border-gray-300 bg-white rounded-md p-6 flex flex-col md:flex-row gap-6">
            <img
              src={product?.image}
              alt={product?.title}
              className="h-100 border border-gray-300 p-4"
            />
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-2xl">{product?.title}</h2>
              <p className="product-detail-description">
                {product?.description}
              </p>
              <p className="font-bold">Price: {product?.price}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
