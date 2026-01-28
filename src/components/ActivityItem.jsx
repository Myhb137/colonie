export function ActivityItem({ name, timeStart, timeEnd, status, statusColor }) {
  const statusBgColor = {
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
    gray: "bg-gray-100 text-gray-700"
  }[statusColor] || "bg-gray-100 text-gray-700";

  return (
    <div className="flex items-center justify-between py-5 px-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 rounded-lg transition-all duration-200">
      <div className="flex-1">
        <p className="font-semibold text-gray-900 mb-2 text-sm">
          {name}
        </p>
        <p className="text-xs text-gray-500 font-medium">
          {timeStart} - {timeEnd}
        </p>
      </div>
      <span className={`text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap ms-4 ${statusBgColor}`}>
        {status}
      </span>
    </div>
  );
}
