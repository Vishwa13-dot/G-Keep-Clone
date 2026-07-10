import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="flex items-center w-full max-w-2xl mx-auto bg-[#f1f3f4] rounded-lg px-4 py-3 shadow-sm">
      <Search size={20} className="text-gray-500 mr-3" />

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
      />
    </div>
  );
}

export default SearchBar;