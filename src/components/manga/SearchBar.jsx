import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?q=${query}`);
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
        className="flex-1 border rounded-lg px-4 py-3  min-w-0 "
      />

      <button
        className="bg-teal-600 text-white px-6 rounded-lg  shrink-0"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;