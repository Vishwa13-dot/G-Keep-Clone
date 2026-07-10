import {
  Lightbulb,
  Bell,
  Pencil,
  Archive,
  Trash2,
  Tag,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar({
  open,
  labels,
  mobileOpen,
  setMobileOpen,
}) {
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

  const closeMobile = () => {
    if (window.innerWidth < 768) {
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}

      {mobileOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/30 z-40 md:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          top-16
          left-0
          bottom-0
          z-50
          bg-white
          border-r
          border-gray-200
          shadow-sm
          overflow-y-auto

          transition-all
          duration-300

          w-72

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          md:translate-x-0
          ${open ? "md:w-72" : "md:w-20"}
        `}
      >
        <div className="mt-3">

          {/* Default Menu */}

          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={closeMobile}
              className={({ isActive }) =>
                `flex items-center gap-5 mx-3 my-1 px-5 py-4 rounded-r-full transition ${
                  isActive
                    ? "bg-[#feefc3] text-gray-900 font-medium"
                    : "text-gray-700 hover:bg-[#f1f3f4]"
                }`
              }
            >
              {item.icon}

              {(open || mobileOpen) && (
                <span className="text-sm">
                  {item.title}
                </span>
              )}
            </NavLink>
          ))}

          {/* Labels */}

          {labels.length > 0 && (
            <>
              <div className="my-3 border-t border-gray-200"></div>

              {labels.map((label) => (
                <NavLink
                  key={label.id}
                  to={`/label/${label.id}`}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    `flex items-center gap-5 mx-3 my-1 px-5 py-4 rounded-r-full transition ${
                      isActive
                        ? "bg-[#feefc3] text-gray-900 font-medium"
                        : "text-gray-700 hover:bg-[#f1f3f4]"
                    }`
                  }
                >
                  <Tag size={20} />

                  {(open || mobileOpen) && (
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
              onClick={closeMobile}
              className={({ isActive }) =>
                `flex items-center gap-5 mx-3 my-1 px-5 py-4 rounded-r-full transition ${
                  isActive
                    ? "bg-[#feefc3] text-gray-900 font-medium"
                    : "text-gray-700 hover:bg-[#f1f3f4]"
                }`
              }
            >
              {item.icon}

              {(open || mobileOpen) && (
                <span className="text-sm">
                  {item.title}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;