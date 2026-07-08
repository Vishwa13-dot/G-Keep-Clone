import {
  Lightbulb,
  Bell,
  Pencil,
  Archive,
  Trash2,
  Tag,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar({ open, labels }) {
  const menu = [
    {
      title: "Notes",
      icon: <Lightbulb size={20} />,
      path: "/",
    },
    {
      title: "Reminders",
      icon: <Bell size={20} />,
      path: "/reminders",
    },
    {
      title: "Edit Labels",
      icon: <Pencil size={20} />,
      path: "/labels",
    },
  ];

  const bottomMenu = [
    {
      title: "Archive",
      icon: <Archive size={20} />,
      path: "/archive",
    },
    {
      title: "Trash",
      icon: <Trash2 size={20} />,
      path: "/trash",
    },
  ];

  return (
    <aside
      className={`fixed top-16 left-0 bottom-0 bg-white border-r border-gray-200 shadow-sm transition-all duration-300 overflow-y-auto ${
        open ? "w-72" : "w-20"
      }`}
    >
      <div className="mt-3">

        {/* Default Menu */}

        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-5 mx-3 my-1 px-5 py-4 rounded-r-full transition-all duration-200 ${
                isActive
                  ? "bg-[#feefc3] text-gray-900 font-medium"
                  : "text-gray-700 hover:bg-[#f1f3f4]"
              }`
            }
          >
            {item.icon}

            {open && (
              <span className="text-sm">
                {item.title}
              </span>
            )}
          </NavLink>
        ))}

        {/* Dynamic Labels */}

        {labels.length > 0 && (
          <>
            <div className="my-3 border-t border-gray-200"></div>

            {labels.map((label) => (
              <NavLink
                key={label.id}
                to={`/label/${label.id}`}
                className={({ isActive }) =>
                  `flex items-center gap-5 mx-3 my-1 px-5 py-4 rounded-r-full transition-all duration-200 ${
                    isActive
                      ? "bg-[#feefc3] text-gray-900 font-medium"
                      : "text-gray-700 hover:bg-[#f1f3f4]"
                  }`
                }
              >
                <Tag size={20} />

                {open && (
                  <span className="text-sm">
                    {label.name}
                  </span>
                )}
              </NavLink>
            ))}

            <div className="my-3 border-t border-gray-200"></div>
          </>
        )}

        {/* Bottom Menu */}

        {bottomMenu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-5 mx-3 my-1 px-5 py-4 rounded-r-full transition-all duration-200 ${
                isActive
                  ? "bg-[#feefc3] text-gray-900 font-medium"
                  : "text-gray-700 hover:bg-[#f1f3f4]"
              }`
            }
          >
            {item.icon}

            {open && (
              <span className="text-sm">
                {item.title}
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;