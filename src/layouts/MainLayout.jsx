import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  // Desktop sidebar
  const [open, setOpen] = useState(true);

  // Mobile sidebar
  const [mobileOpen, setMobileOpen] = useState(false);

  // Notes
  const [notes, setNotes] = useState([]);

  // Labels
  const [labels, setLabels] = useState([]);

  return (
    <div className="min-h-screen bg-[#f8f9fa]">

      <Header
        open={open}
        setOpen={setOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
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
          }}
        />
      </main>
    </div>
  );
}

export default MainLayout;