import { useOutletContext, useParams } from "react-router-dom";

import EmptyState from "../components/EmptyState";
import NoteCard from "../components/NoteCard";

function LabelNotes() {
  const { id } = useParams();

  const {
    notes,
    setNotes,
    labels,
  } = useOutletContext();

  const save = (updated) => {
    setNotes(updated);
  };

  const labelNotes = notes.filter(
    (note) =>
      note.labelId === Number(id) &&
      !note.archive &&
      !note.trash
  );

  const handleDelete = (noteId) => {
    save(
      notes.map((item) =>
        item.id === noteId
          ? {
              ...item,
              trash: true,
              archive: false,
            }
          : item
      )
    );
  };

  const handleArchive = (noteId) => {
    save(
      notes.map((item) =>
        item.id === noteId
          ? {
              ...item,
              archive: !item.archive,
            }
          : item
      )
    );
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

  const handleColor = (noteId) => {
    save(
      notes.map((item) => {
        if (item.id !== noteId) return item;

        const index = colors.indexOf(item.color);

        return {
          ...item,
          color: colors[(index + 1) % colors.length],
        };
      })
    );
  };

  if (labelNotes.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="px-6 py-6">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {labelNotes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            labels={labels}
            handleEdit={() => {}}
            handleDelete={handleDelete}
            handleArchive={handleArchive}
            handleColor={handleColor}
          />
        ))}
      </div>
    </div>
  );
}

export default LabelNotes;