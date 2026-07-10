import {
  Menu,
  Search,
  RefreshCw,
  Grid2X2,
  Settings,
} from "lucide-react";

function Header({
  open,
  setOpen,
  mobileOpen,
  setMobileOpen,
}) {
  const handleMenu = () => {
    if (window.innerWidth < 768) {
      setMobileOpen(!mobileOpen);
    } else {
      setOpen(!open);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-3 md:px-4">

      {/* Left */}
      <div className="flex items-center gap-2 md:gap-4">

        <button
          onClick={handleMenu}
          className="rounded-full p-2 hover:bg-gray-100 transition"
        >
          <Menu size={22} className="text-gray-700" />
        </button>

        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="Keep"
          className="w-8 md:w-10"
        />

        <h1 className="hidden sm:block text-xl md:text-2xl font-medium text-gray-700">
          Keep
        </h1>

      </div>

      {/* Search */}

      <div className="hidden lg:flex flex-1 max-w-2xl mx-8 items-center gap-3 rounded-lg bg-[#f1f3f4] px-4 py-3">

        <Search size={20} className="text-gray-500" />

        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent outline-none text-gray-700"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-1 md:gap-2">

        <button className="hidden md:flex rounded-full p-2 hover:bg-gray-100">
          <RefreshCw size={20} className="text-gray-600" />
        </button>

        <button className="hidden md:flex rounded-full p-2 hover:bg-gray-100">
          <Grid2X2 size={20} className="text-gray-600" />
        </button>

        <button className="hidden md:flex rounded-full p-2 hover:bg-gray-100">
          <Settings size={20} className="text-gray-600" />
        </button>

        <button className="md:hidden rounded-full p-2 hover:bg-gray-100">
          <Search size={20} className="text-gray-600" />
        </button>

        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="h-8 w-8 md:h-9 md:w-9 rounded-full border"
        />

      </div>

    </header>
  );
}

export default Header;