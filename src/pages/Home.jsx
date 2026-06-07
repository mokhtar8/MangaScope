import { useState } from "react";

import { useTopManga } from "../hooks/useTopManga";

import SkeletonCard from "../components/ui/SkeletonCard";
import Container from "../components/layout/Container";

import MangaGrid from "../components/manga/MangaGrid";
import Pagination from "../components/manga/Pagination";

import ErrorState from "../components/ui/ErrorState";

function Home() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } =
    useTopManga(page);

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <ErrorState message={error.message} />;
  }

  return (
    <Container>
      <h2 className="text-3xl font-bold mb-8">
        Top Manga
      </h2>

      <MangaGrid mangas={data.data} />

      <Pagination
        page={page}
        setPage={setPage}
        hasNextPage={data.pagination.has_next_page}
      />
    </Container>
  );
}

export default Home;