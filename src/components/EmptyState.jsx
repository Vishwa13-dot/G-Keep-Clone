import { StickyNote } from "lucide-react";

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-gray-500">
      <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center">
        <StickyNote
          size={70}
          className="text-gray-400"
          strokeWidth={1.5}
        />
      </div>

      <h2 className="mt-8 text-2xl font-normal">
        Notes you add appear here
      </h2>
    </div>
  );
}

export default EmptyState;