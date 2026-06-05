import { Link } from "react-router-dom";

function MangaCard({ manga }) {
  return (
    <Link
      to={`/manga/${manga.mal_id}`}
      className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
    >
     <img
 loading="lazy"
 src={manga.images.jpg.large_image_url}
 alt={manga.title}
/>

      <div className="p-4">
        <h3 className="font-bold line-clamp-2">
          {manga.title}
        </h3>

        <p className="mt-2 text-sm">
          ⭐ {manga.score}
        </p>
      </div>
    </Link>
  );
}

export default MangaCard;