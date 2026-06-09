import { useParams } from "react-router-dom";

import { useMangaDetails } from "../hooks/useMangaDetails";
   import BackButton from "../components/ui/BackButton";
import Loader from "../components/ui/Loader";
import ErrorState from "../components/ui/ErrorState";

function MangaDetails() {
  const { id } = useParams();

  const { data: manga, isLoading, isError, error } =
    useMangaDetails(id);

  if (isLoading) return <Loader />;

  if (isError) return <ErrorState message={error.message} />;

  return (


    <div className="relative min-h-screen overflow-hidden rounded-3xl">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
        style={{
          backgroundImage: `url(${manga.images.jpg.large_image_url})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <BackButton />

        <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-center mb-16">
            {/* Poster */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={manga.images.jpg.large_image_url}
              alt={manga.title}
              className="sticky top-24 w-full max-w-[320px] rounded-3xl shadow-2xl border border-white/10"
            />
          </div>
          {/* Info */}
          <div className="text-white">
            <h1 className="text-5xl font-extrabold mb-2">
              {manga.title}
            </h1>

            <p className="text-slate-300 text-lg">
              {manga.title_japanese}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/40">
                ⭐ {manga.score}
              </span>

              <span className="px-4 py-2 rounded-full bg-white/10">
                Chapters {manga.chapters || "?"}
              </span>

              <span className="px-4 py-2 rounded-full bg-white/10">
                {manga.status}
              </span>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-3 mt-6">
              {manga.genres?.map((genre) => (
                <span
                  key={genre.mal_id}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Synopsis */}
            <div className="mt-8 max-w-3xl">
              <h2 className="text-xl font-bold mb-3">
                Synopsis
              </h2>

              <p className="leading-8 text-slate-200 backdrop-blur-sm bg-black/20 p-5 rounded-2xl">
                {manga.synopsis}
              </p>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  
  );
}

export default MangaDetails;