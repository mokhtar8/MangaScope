import { Link } from "react-router-dom";

function MangaCard({ manga }) {
  return (
    <Link
      to={`/manga/${manga.mal_id}`}
      className="
        bg-white
<<<<<<< HEAD
=======
        dark:bg-slate-800
       text-slate-900
       dark:text-white
>>>>>>> e239fe8 (th c)
        rounded-xl
        overflow-hidden
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all
        duration-300
        flex
        flex-col
      "
    >
      <img
        loading="lazy"
        src={manga.images.jpg.large_image_url}
        alt={manga.title}
        className="
          w-full
          aspect-[3/4]
          object-cover
        "
      />

      <div className="p-4 flex flex-col flex-1 max-w-xs">
        <h3
          className="
            font-bold
            text-lg
            line-clamp-2
            min-h-[56px]
          "
        >
          {manga.title}
        </h3>

        <div className="mt-auto pt-3 ">
<<<<<<< HEAD
          <p className="  font-medium
              text-yellow-500 text-sm">⭐ {manga.score}</p>
=======
          <p
            className="  font-medium
              text-yellow-500 text-sm"
          >
            ⭐ {manga.score}
          </p>
>>>>>>> e239fe8 (th c)
        </div>
      </div>
    </Link>
  );
}

export default MangaCard;
