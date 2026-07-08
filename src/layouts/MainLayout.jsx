import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  const [open, setOpen] = useState(true);

  // Notes exist only while the app is running
  const [notes, setNotes] = useState([]);

  // Labels exist only while the app is running
  const [labels, setLabels] = useState([]);

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-gray-800">
      <Header
        open={open}
        setOpen={setOpen}
      />

      <Sidebar
        open={open}
        labels={labels}
      />

      <main
        className={`pt-20 transition-all duration-300 ${
          open ? "ml-72" : "ml-20"
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