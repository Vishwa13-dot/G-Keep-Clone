import { useOutletContext } from "react-router-dom";

import CreateNote from "../components/CreateNote";
import NotesGrid from "../components/NotesGrid";

function Home() {
  const {
    notes,
    setNotes,
    labels,
    search,
  } = useOutletContext();

  const filteredNotes = notes.filter((note) => {
    const text =
      `${note.title} ${note.note}`.toLowerCase();

    return text.includes(search.toLowerCase());
  });

  return (
    <>
      <CreateNote
        notes={notes}
        setNotes={setNotes}
        labels={labels}
      />

      <NotesGrid
        notes={filteredNotes}
        setNotes={setNotes}
        labels={labels}
      />
    </>
  );
}

export default Home;