import { useParams } from "react-router-dom";

import { useMangaDetails } from "../hooks/useMangaDetails";

import Container from "../components/layout/Container";
import Loader from "../components/ui/Loader";
import ErrorState from "../components/ui/ErrorState";

function MangaDetails() {
  const { id } = useParams();

  const { data: manga, isLoading, isError, error } =
    useMangaDetails(id);

  if (isLoading) return <Loader />;

  if (isError) return <ErrorState message={error.message} />;

  return (
    <>
  

      <Container>
        <div className="grid grid-cols-2 gap-10 py-10">
          <img
            src={manga.images.jpg.large_image_url}
            alt={manga.title}
            className="rounded-xl"
          />

          <div>
            <h1 className="text-4xl font-bold">
              {manga.title}
            </h1>

            <p className="mt-4">⭐ {manga.score}</p>
            <p className="mt-4">Chapters: {manga.chapters}</p>

            <p className="mt-6 leading-8">
              {manga.synopsis}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default MangaDetails;