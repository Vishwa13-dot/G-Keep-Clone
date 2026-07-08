import { useOutletContext } from "react-router-dom";
import { Bell } from "lucide-react";

import NoteCard from "../components/NoteCard";

function Reminders() {
  const { notes, setNotes } = useOutletContext();

  const reminderNotes = notes.filter(
    (item) => item.reminder && !item.trash
  );

  const save = (updated) => {
    setNotes(updated);
  };

  const handleDelete = (id) => {
    const updated = notes.map((item) =>
      item.id === id
        ? {
            ...item,
            trash: true,
          }
        : item
    );

    save(updated);
  };

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

  if (reminderNotes.length === 0) {
    return (
      <div className="flex h-[70vh] flex-col items-center justify-center text-gray-500">
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-100">
          <Bell
            size={70}
            className="text-gray-400"
            strokeWidth={1.5}
          />
        </div>

        <h2 className="mt-8 text-2xl">
          Notes with reminders appear here
        </h2>
      </div>
    );
  }

  return (
    <div className="px-6 py-6">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {reminderNotes.map((note) => (
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
    </div>
  );
}

export default Reminders;