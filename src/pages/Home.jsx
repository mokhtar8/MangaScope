import { useSearchParams } from "react-router-dom";

import ScrollToTopButton from "../components/ui/ScrollToTopButton";
import { useTopManga } from "../hooks/useTopManga";

import SkeletonCard from "../components/ui/SkeletonCard";
import MangaGrid from "../components/manga/MangaGrid";
import Pagination from "../components/manga/Pagination";

import ErrorState from "../components/ui/ErrorState";

function Home() {
 const [searchParams, setSearchParams] =
    useSearchParams();
     const page =
    Number(searchParams.get("page")) || 1;

     const setPage = (newPage) => {
    setSearchParams({
      page: newPage,
    });
  };
  const { data, isLoading, isError, error } =
    useTopManga(page);
const lastPage =
  data?.pagination?.last_visible_page ?? 1;
  if (isLoading) {
    return (
      <div className="  grid
      grid-cols-[repeat(auto-fill,minmax(225px,1fr))]
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5 gap-6">
        {[...Array(15)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <ErrorState message={error.message} />;
  }

  return (
    <>
      <h2 className="text-3xl font-bold mb-8">
        Top Manga
      </h2>

<MangaGrid mangas={data?.data ?? []} />
      <Pagination
        page={page}
        setPage={setPage}
        hasNextPage={data?.pagination?.has_next_page ?? false}
         lastPage={lastPage}
      />
        <ScrollToTopButton />
    </>
  );
}

export default Home;