import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [notes, setNotes] = useState([]);
  const [labels, setLabels] = useState([]);

  // Search
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800">

      <Header
        open={open}
        setOpen={setOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        search={search}
        setSearch={setSearch}
      />

      <Sidebar
        open={open}
        labels={labels}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main
        className={`pt-20 px-4 transition-all duration-300 ${
          open ? "md:ml-72" : "md:ml-20"
        }`}
      >
        <Outlet
          context={{
            notes,
            setNotes,
            labels,
            setLabels,
            search,
          }}
        />
      </main>

    </div>
  );
}

export default MainLayout;