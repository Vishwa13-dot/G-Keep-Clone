import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Plus,
  Pencil,
  Trash2,
  Check,
} from "lucide-react";

function Labels() {
  const { labels, setLabels } = useOutletContext();

  const [value, setValue] = useState("");
  const [editId, setEditId] = useState(null);

  const addLabel = () => {
    if (value.trim() === "") return;

    setLabels([
      ...labels,
      {
        id: Date.now(),
        name: value,
      },
    ]);

    setValue("");
  };

  const deleteLabel = (id) => {
    setLabels(
      labels.filter((item) => item.id !== id)
    );
  };

  const updateLabel = (id) => {
    if (value.trim() === "") return;

    setLabels(
      labels.map((item) =>
        item.id === id
          ? {
              ...item,
              name: value,
            }
          : item
      )
    );

    setEditId(null);
    setValue("");
  };

  return (
    <div className="mx-auto mt-10 max-w-xl rounded-xl border border-gray-200 bg-white shadow">

      {/* Header */}

      <div className="border-b p-5">
        <h2 className="text-xl font-medium">
          Edit Labels
        </h2>
      </div>

      {/* Add Label */}

      <div className="flex items-center gap-3 p-5">

        <Plus
          size={20}
          className="text-gray-600"
        />

        <input
          type="text"
          placeholder="Create new label"
          value={value}
          onChange={(e) =>
            setValue(e.target.value)
          }
          className="flex-1 border-b border-gray-300 pb-2 outline-none"
        />

        <button onClick={addLabel}>
          <Check size={20} />
        </button>

      </div>

      {/* Labels */}

      {labels.map((label) => (
        <div
          key={label.id}
          className="flex items-center justify-between border-t px-5 py-4"
        >
          {editId === label.id ? (
            <>
              <input
                value={value}
                onChange={(e) =>
                  setValue(e.target.value)
                }
                className="flex-1 border-b outline-none"
              />

              <button
                onClick={() =>
                  updateLabel(label.id)
                }
              >
                <Check size={20} />
              </button>
            </>
          ) : (
            <>
              <span>{label.name}</span>

              <div className="flex gap-3">

                <button
                  onClick={() => {
                    setEditId(label.id);
                    setValue(label.name);
                  }}
                >
                  <Pencil size={18} />
                </button>

                <button
                  onClick={() =>
                    deleteLabel(label.id)
                  }
                >
                  <Trash2 size={18} />
                </button>

              </div>
            </>
          )}
        </div>
      ))}

      {labels.length === 0 && (
        <div className="p-10 text-center text-gray-500">
          No labels created.
        </div>
      )}
    </div>
  );
}

export default Labels;