export function StatCard({ icon, value, label, badgeText, badgeColor, highlighted }) {
  const badgeColorClass = {
    red: "bg-red-100 text-red-700",
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700"
  }[badgeColor] || "bg-gray-100 text-gray-700";

  return (
    <div
      className={`rounded-2xl shadow-sm p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${highlighted
          ? "bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200"
          : "bg-white"
        }`}
    >
      <div className="flex items-start justify-between mb-8">
        <div className="flex-1">
          <div className="w-12 h-12 mb-6 text-emerald-600 [&>svg]:w-full [&>svg]:h-full flex items-center justify-center text-5xl">
            {icon}
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-3">
            {value}
          </div>
          <div className="text-sm font-medium text-gray-700">
            {label}
          </div>
        </div>
        {badgeText && (
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap ms-2 ${badgeColorClass}`}>
            {badgeText}
          </span>
        )}
      </div>
    </div>
  );
}
