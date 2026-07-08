import { useState } from "react";
import { X } from "lucide-react";

function EditModal({
  note,
  setSelected,
  notes,
  setNotes,
}) {
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.note);

  const updateNote = () => {
    const updated = notes.map((item) =>
      item.id === note.id
        ? {
            ...item,
            title,
            note: text,
          }
        : item
    );

    setNotes(updated);
    setSelected(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div
        className="w-[500px] max-w-[95%] rounded-xl border border-gray-300 p-5 shadow-xl"
        style={{ backgroundColor: note.color }}
      >

        <div className="flex items-center justify-between">

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent text-xl font-medium text-gray-800 outline-none"
            placeholder="Title"
          />

          <button
            onClick={() => setSelected(null)}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <X size={20} />
          </button>

        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={8}
          className="mt-5 w-full resize-none bg-transparent text-gray-700 outline-none"
          placeholder="Take a note..."
        />

        <div className="mt-5 flex justify-end">

          <button
            onClick={updateNote}
            className="rounded-md px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

export default EditModal;