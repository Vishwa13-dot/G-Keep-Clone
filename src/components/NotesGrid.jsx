import { useState } from "react";

import EmptyState from "./EmptyState";
import NoteCard from "./NoteCard";
import EditModal from "./EditModal";

function NotesGrid({ notes, setNotes }) {
  const [selected, setSelected] = useState(null);

  const save = (updated) => {
    setNotes(updated);
  };

  // Move to Trash
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

  // Archive / Unarchive
  const handleArchive = (id) => {
    const updated = notes.map((item) =>
      item.id === id
        ? {
            ...item,
            archive: !item.archive,
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

  const pinned = notes.filter(
    (item) => item.pin && !item.archive && !item.trash
  );

  const others = notes.filter(
    (item) => !item.pin && !item.archive && !item.trash
  );

  if (pinned.length === 0 && others.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <div className="px-6 mt-10">
        {pinned.length > 0 && (
          <>
            <h3 className="mb-4 text-xs uppercase text-gray-500">
              PINNED
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {pinned.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  handleEdit={setSelected}
                  handleDelete={handleDelete}
                  handleArchive={handleArchive}
                  handleColor={handleColor}
                />
              ))}
            </div>
          </>
        )}

        {others.length > 0 && (
          <>
            <h3 className="mt-8 mb-4 text-xs uppercase text-gray-500">
              OTHERS
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {others.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  handleEdit={setSelected}
                  handleDelete={handleDelete}
                  handleArchive={handleArchive}
                  handleColor={handleColor}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {selected && (
        <EditModal
          note={selected}
          notes={notes}
          setNotes={setNotes}
          setSelected={setSelected}
        />
      )}
    </>
  );
}

export default NotesGrid;