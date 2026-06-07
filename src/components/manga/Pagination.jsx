function Pagination({
  page,
  setPage,
  hasNextPage,
}) {
  return (
    <div className="flex justify-center gap-4 mt-10">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-5 py-2 bg-gray-200 dark:text-black rounded"
      >
        Prev
      </button>

      <span>{page}</span>

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