import { useSearchParams } from "react-router-dom";
    import BackButton from "../components/ui/BackButton";
import { useSearchManga } from "../hooks/useSearchManga";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";

import MangaGrid from "../components/manga/MangaGrid";
import Pagination from "../components/manga/Pagination";

import ErrorState from "../components/ui/ErrorState";
import Loader from "../components/ui/Loader";

function Search() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") || "";
  const page = Number(
    params.get("page")
  ) || 1;

  const { data, isLoading, isError, error } =
    useSearchManga(query, page);

  if (!query) {
    return <ErrorState message="Search something..." />;
  }

  if (isLoading) return <Loader />;

  if (isError) {
    return <ErrorState message={error.message} />;
  }
const lastPage =
  data?.pagination?.last_visible_page ?? 1;
  const results = data?.data ?? [];
  const hasNextPage = data?.pagination?.has_next_page;
if (results.length === 0) {
  return (
    <ErrorState message="No manga found." />
  );
}
  const setPage = (newPage) => {
    setParams({
      q: query,
      page: newPage,
    });
  };
  return (
    <>
<BackButton />
      <h2 className="text-3xl font-bold my-10">
        Search: {query}
      </h2>

      <MangaGrid mangas={results} />

      <Pagination
        page={page}
        setPage={setPage}
        hasNextPage={hasNextPage}
          lastPage={lastPage}
      />
        <ScrollToTopButton />
 
    </>
  );
}

export default Search;