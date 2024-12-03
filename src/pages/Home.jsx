import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Home.css";

const Home = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (product) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== product.id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h2>Favoritter</h2>
      <div className="favorites">
        {favorites.length ? (
          favorites.map((fav) => (
            <ProductCard
              key={fav.id}
              product={fav}
              onLike={removeFavorite}
              isFavorite={true}
            />
          ))
        ) : (
          <p>Ingen favoritter endnu.</p>
        )}
      </div>
      <form className="newsletter">
        <h3>Tilmeld dig nyhedsbrevet</h3>
        <input type="email" placeholder="Din email" />
        <button type="submit">Tilmeld</button>
      </form>
    </div>
  );
};

export default Home;
