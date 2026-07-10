import {
  Pin,
  Archive,
  Trash2,
  Palette,
  Bell,
  Tag,
} from "lucide-react";

function NoteCard({
  note,
  labels = [],
  handleEdit = () => {},
  handleDelete,
  handleArchive,
  handleColor,
}) {
  const selectedLabel = labels.find(
    (item) => item.id === note.labelId
  );

  return (
    <div
      onClick={() => handleEdit(note)}
      style={{
        background:
          note.color === "#202124"
            ? "#ffffff"
            : note.color,
      }}
      className="group w-full cursor-pointer rounded-xl border border-gray-300 p-4 shadow-sm transition-all duration-200 hover:border-gray-400 hover:shadow-md"
    >
      {/* Header */}

      <div className="flex items-start justify-between gap-2">
        <h3 className="break-words text-[16px] font-medium text-gray-800">
          {note.title}
        </h3>

        {note.pin && (
          <Pin
            size={18}
            className="shrink-0 text-gray-600"
            fill="currentColor"
          />
        )}
      </div>

      {/* Note */}

      <p className="mt-3 whitespace-pre-wrap break-words text-sm text-gray-700">
        {note.note}
      </p>

      {/* Label */}

      {selectedLabel && (
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
          <Tag size={12} />
          <span>{selectedLabel.name}</span>
        </div>
      )}

      {/* Reminder */}

      {note.reminder && (
        <div className="mt-3 inline-flex max-w-full items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
          <Bell
            size={14}
            className="shrink-0 text-yellow-600"
          />

          <span className="break-words">
            {note.reminder.label}{" "}
            {note.reminder.date}{" "}
            {note.reminder.time}
          </span>
        </div>
      )}

      {/* Actions */}

      <div
        className="mt-5 flex justify-end gap-2 opacity-100 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => handleArchive(note.id)}
          className="rounded-full p-2 hover:bg-gray-100"
          title="Archive"
        >
          <Archive
            size={18}
            className="text-gray-600"
          />
        </button>

        <button
          onClick={() => handleDelete(note.id)}
          className="rounded-full p-2 hover:bg-gray-100"
          title="Delete"
        >
          <Trash2
            size={18}
            className="text-gray-600"
          />
        </button>

        <button
          onClick={() => handleColor(note.id)}
          className="rounded-full p-2 hover:bg-gray-100"
          title="Change Color"
        >
          <Palette
            size={18}
            className="text-gray-600"
          />
        </button>
      </div>
    </div>
  );
}

export default NoteCard;