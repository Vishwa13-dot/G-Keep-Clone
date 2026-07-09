import { useOutletContext } from "react-router-dom";

import CreateNote from "../components/CreateNote";
import NotesGrid from "../components/NotesGrid";

function Home() {
  const {
    notes,
    setNotes,
    labels,
  } = useOutletContext();

  return (
    <>
      <CreateNote
        notes={notes}
        setNotes={setNotes}
        labels={labels}
      />

      <NotesGrid
        notes={notes}
        setNotes={setNotes}
        labels={labels}

      />
    </>
  );
}

export default Home;