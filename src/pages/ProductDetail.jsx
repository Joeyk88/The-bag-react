import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      setProduct(response.data);
      setLoading(false);
    });
  }, [id]);

  return loading ? (
    <Spinner />
  ) : (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Pris: {product.price} DKK</p>
    </div>
  );
};

export default ProductDetail;
