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

function ColorPalette({
  color,
  setColor,
  closePalette,
}) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {colors.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => {
            setColor(item);

            if (closePalette) {
              closePalette();
            }
          }}
          className={`h-8 w-8 rounded-full border-2 transition-all duration-200 hover:scale-110 hover:shadow-md ${
            color === item
              ? "border-gray-800"
              : "border-gray-300"
          }`}
          style={{ backgroundColor: item }}
          title={item}
        />
      ))}
    </div>
  );
}

export default ColorPalette;