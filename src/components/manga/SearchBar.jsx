import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?q=${query}&page=1`);
      setQuery("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-1 min-w-0 gap-3"
    >
      <input
        type="text"
        placeholder="Search manga..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        className="flex-1 border rounded-lg px-4 py-3 placeholder:text-slate-800 dark:placeholder:text-gray-500  min-w-0  bg-[#72a7a9] dark:bg-slate-800
        "
      />

      <button
        className="bg-[#5F9EA0] text-slate-800 hover:bg-teal-700 dark:text-gray-100 px-6 rounded-lg  shrink-0"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;