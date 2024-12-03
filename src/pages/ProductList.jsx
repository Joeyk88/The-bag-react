import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProducts(response.data.products);
      setFilteredProducts(response.data.products);
      setLoading(false);
    });
  }, []);

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter(value);
    setFilteredProducts(
      products.filter((product) =>
        product.category.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <h2>Produkter</h2>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Filtrer efter kategori"
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
