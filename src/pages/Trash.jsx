import { useOutletContext } from "react-router-dom";
import { RotateCcw, Trash2 } from "lucide-react";

function Trash() {
  const { notes, setNotes } = useOutletContext();

  const trashNotes = notes.filter((item) => item.trash);

  const save = (updated) => {
    setNotes(updated);
  };

  const restoreNote = (id) => {
    const updated = notes.map((item) =>
      item.id === id
        ? {
            ...item,
            trash: false,
          }
        : item
    );

    save(updated);
  };

  const deleteForever = (id) => {
    const updated = notes.filter(
      (item) => item.id !== id
    );

    save(updated);
  };

  if (trashNotes.length === 0) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h2 className="text-2xl text-gray-500">
          Trash is empty
        </h2>
      </div>
    );
  }

  return (
    <div className="grid gap-4 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {trashNotes.map((note) => (
        <div
          key={note.id}
          style={{ background: note.color }}
          className="rounded-xl border border-gray-300 p-4 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            {note.title}
          </h2>

          <p className="mt-3 whitespace-pre-wrap text-gray-700">
            {note.note}
          </p>

          <div className="mt-5 flex justify-end gap-3">
            <button
              onClick={() => restoreNote(note.id)}
              className="rounded-full p-2 hover:bg-gray-100"
              title="Restore"
            >
              <RotateCcw size={18} />
            </button>

            <button
              onClick={() => deleteForever(note.id)}
              className="rounded-full p-2 hover:bg-gray-100"
              title="Delete forever"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Trash;