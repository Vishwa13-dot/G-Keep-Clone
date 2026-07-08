import { useOutletContext } from "react-router-dom";

import CreateNote from "../components/CreateNote";
import NotesGrid from "../components/NotesGrid";

function Home() {
  const { notes, setNotes } = useOutletContext();

  return (
    <>
      <CreateNote
        notes={notes}
        setNotes={setNotes}
      />

      <NotesGrid
        notes={notes}
        setNotes={setNotes}
      />
    </>
  );
}

export default Home;