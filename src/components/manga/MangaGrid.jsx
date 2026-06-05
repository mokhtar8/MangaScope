import MangaCard from "./MangaCard";

function MangaGrid({ mangas }) {
  return (
    <div
       className="
      grid
      grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      gap-6
      "
    >
      {mangas.map((manga) => (
        <MangaCard
          key={manga.mal_id}
          manga={manga}
        />
      ))}
    </div>
  );
}

export default MangaGrid;