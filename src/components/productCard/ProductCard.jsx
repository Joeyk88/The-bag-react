import "src/components/productCard/ProductCard.jsx";

const ProductCard = ({ product, onLike, isFavorite }) => (
  <div className="product-card">
    <img src={product.thumbnail} alt={product.title} />
    <h3>{product.title}</h3>
    <p>{product.price} DKK</p>
    <button onClick={() => onLike(product)}>
      {isFavorite ? "Fjern fra favoritter" : "Tilføj til favoritter"}
    </button>
  </div>
);

export default ProductCard;
