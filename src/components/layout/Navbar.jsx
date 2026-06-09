import { Link } from "react-router-dom";
import SearchBar from "../manga/SearchBar";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="w-full shadow   dark:bg-slate-800 bg-[#24878b]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 sm:flex-row sm:items-center
      ">
        
        <Link
          to="/"
          className="text-2xl font-bold  shrink-0 text-[#0f172a] dark:text-gray-100"
        >
          Manga App
        </Link>

        <div className="flex flex-1 items-center gap-3 min-w-0">
          <SearchBar />
          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;