function Pagination({
  page,
  setPage,
  hasNextPage,
    lastPage,
}) {
  return (
    <div className="flex justify-center gap-4 mt-10">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-5 py-2 bg-teal-600 text-white rounded"
      >
        Prev
      </button>

      <span className="px-5 py-2 font-medium bg-teal-200 dark:bg-slate-700 dark:text-white rounded">
        {page} of {lastPage}
      </span>

      <button
        disabled={!hasNextPage}
        onClick={() => setPage(page + 1)}
        className="px-5 py-2 bg-teal-600 text-white rounded"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;