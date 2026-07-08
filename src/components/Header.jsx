import {
  Menu,
  Search,
  RefreshCw,
  Grid2X2,
  Settings,
} from "lucide-react";

function Header({ open, setOpen }) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-50">

      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <Menu size={22} className="text-gray-700" />
        </button>

        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="Keep"
          className="w-10"
        />

        <h1 className="text-2xl font-medium text-gray-700">
          Keep
        </h1>
      </div>

      {/* Search */}
      <div className="hidden md:flex items-center w-[45%] bg-[#f1f3f4] rounded-lg px-4 py-3 gap-3 shadow-sm hover:shadow-md transition">

        <Search size={20} className="text-gray-500" />

        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">

        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <RefreshCw size={20} className="text-gray-600" />
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Grid2X2 size={20} className="text-gray-600" />
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Settings size={20} className="text-gray-600" />
        </button>

        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="w-9 h-9 rounded-full border"
        />

      </div>

    </header>
  );
}

export default Header;