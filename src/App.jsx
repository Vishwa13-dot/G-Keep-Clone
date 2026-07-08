import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Trash from "./pages/Trash";
import Labels from "./pages/Labels";
import Reminders from "./pages/Reminders";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="archive" element={<Archive />} />
        <Route path="trash" element={<Trash />} />
        <Route path="labels" element={<Labels />} />
        <Route path="reminders" element={<Reminders />} />
      </Route>
    </Routes>
  );
}

export default App;