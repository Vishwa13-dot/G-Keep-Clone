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
  labels,
  handleEdit,
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
      className="group cursor-pointer rounded-xl border border-gray-300 p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-400"
    >
      {/* Header */}

      <div className="flex items-start justify-between">
        <h3 className="text-[16px] font-medium text-gray-800 break-words">
          {note.title}
        </h3>

        {note.pin && (
          <Pin
            size={18}
            className="text-gray-600"
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
          {selectedLabel.name}
        </div>
      )}

      {/* Reminder */}

      {note.reminder &&
        typeof note.reminder === "object" && (
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
            <Bell
              size={14}
              className="text-yellow-600"
            />

            <span>
              {note.reminder.label}{" "}
              {note.reminder.date}{" "}
              {note.reminder.time}
            </span>
          </div>
        )}

      {/* Actions */}

      <div
        className="mt-5 flex justify-end gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
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
          title="Change color"
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