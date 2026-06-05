import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useSearchManga } from "../hooks/useSearchManga";

import Container from "../components/layout/Container";
import MangaGrid from "../components/manga/MangaGrid";
import Pagination from "../components/manga/Pagination";

import ErrorState from "../components/ui/ErrorState";
import Loader from "../components/ui/Loader";

function Search() {
  const [params] = useSearchParams();
  const query = params.get("q") || "";

  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } =
    useSearchManga(query, page);

  if (!query) {
    return <ErrorState message="Search something..." />;
  }

  if (isLoading) return <Loader />;

  if (isError) {
    return <ErrorState message={error.message} />;
  }

  const results = data?.data ?? [];
  const hasNextPage = data?.pagination?.has_next_page;

  return (
    <Container>
      <h2 className="text-3xl font-bold my-10">
        Search: {query}
      </h2>

      <MangaGrid mangas={results} />

      <Pagination
        page={page}
        setPage={setPage}
        hasNextPage={hasNextPage}
      />
    </Container>
  );
}

export default Search;