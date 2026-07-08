import { useOutletContext } from "react-router-dom";

import NoteCard from "../components/NoteCard";
import EmptyState from "../components/EmptyState";

function Archive() {
  const { notes, setNotes } = useOutletContext();

  const archiveNotes = notes.filter(
    (item) => item.archive && !item.trash
  );

  const save = (updated) => {
    setNotes(updated);
  };

  const handleArchive = (id) => {
    const updated = notes.map((item) =>
      item.id === id
        ? {
            ...item,
            archive: false,
          }
        : item
    );

    save(updated);
  };

  const handleDelete = (id) => {
    const updated = notes.map((item) =>
      item.id === id
        ? {
            ...item,
            trash: true,
            archive: false,
          }
        : item
    );

    save(updated);
  };

  const colors = [
    "#ffffff",
    "#f28b82",
    "#fbbc04",
    "#fff475",
    "#ccff90",
    "#a7ffeb",
    "#cbf0f8",
    "#aecbfa",
    "#d7aefb",
    "#fdcfe8",
    "#e6c9a8",
    "#e8eaed",
  ];

  const handleColor = (id) => {
    const updated = notes.map((item) => {
      if (item.id !== id) return item;

      const index = colors.indexOf(item.color);

      return {
        ...item,
        color: colors[(index + 1) % colors.length],
      };
    });

    save(updated);
  };

  if (archiveNotes.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid gap-4 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {archiveNotes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          handleEdit={() => {}}
          handleDelete={handleDelete}
          handleArchive={handleArchive}
          handleColor={handleColor}
        />
      ))}
    </div>
  );
}

export default Archive;