import { useFavorites } from "../../hooks/useFavorites";

function FavoriteButton({ manga }) {
  const { favorites, addFavorite } = useFavorites();

  const isFav = favorites.some(
    (m) => m.mal_id === manga.mal_id
  );

  return (
    <button
      onClick={() => addFavorite(manga)}
      className="px-3 py-1 bg-teal-600 text-white rounded"
    >
      {isFav ? "Favorited" : "Add Favorite"}
    </button>
  );
}

export default FavoriteButton;