import { Link } from "react-router-dom";
import SearchBar from "../manga/SearchBar";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="w-full shadow bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link
          to="/"
          className="text-2xl font-bold text-teal-600"
        >
          Manga App
        </Link>

        <div className="flex items-center gap-6">
          <SearchBar />
          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;