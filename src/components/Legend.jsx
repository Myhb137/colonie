export function Legend({ items }) {
  if (!items || items.length === 0) {
    return null;
  }

  const colorMap = {
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    green: "bg-green-500",
    gray: "bg-gray-400"
  };

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-200">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 ${colorMap[item.color] || "bg-gray-400"}`}></div>
          <span className="text-sm font-medium text-gray-600">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
