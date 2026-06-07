import { Link } from "react-router-dom";
import SearchBar from "../manga/SearchBar";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
<<<<<<< HEAD
    <nav className="w-full shadow bg-white">
=======
    <nav className="w-full shadow  dark:bg-slate-800 bg-white">
>>>>>>> e239fe8 (th c)
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 sm:flex-row sm:items-center
      ">
        
        <Link
          to="/"
          className="text-2xl font-bold  shrink-0 text-teal-600"
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