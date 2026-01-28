import { Header } from "../components/Header";
import { StatCard } from "../components/StatCard";
import { ActivityItem } from "../components/ActivityItem";
import { Legend } from "../components/Legend";
import { Sidebar } from "../components/Sidebar";
import { dashboardData } from "../data/dashboardData";
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend as RechartsLegend, ResponsiveContainer } from "recharts";

import { Icons } from "../components/Icons";

export function Dashboard() {
  const {
    header,
    todayActivities = [],
    statistics = [],
    groups = [],
    activities = [],
    legend = []
  } = dashboardData;

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent /> : iconName;
  };

  return (
    <>
      <Sidebar />
      <div className="min-h-screen bg-gray-50 mr-0 md:mr-20 pt-20 md:pt-0">
        <div className="mx-auto p-3 md:p-8 max-w-7xl">
          {/* Statistics Cards - Full Width Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {statistics && statistics.length > 0 ? (
              statistics.map((stat) => (
                <StatCard
                  key={stat.id}
                  icon={getIcon(stat.icon)}
                  value={stat.value}
                  label={stat.label}
                  badgeText={stat.badgeText}
                  badgeColor={stat.badgeColor}
                  highlighted={stat.highlighted}
                />
              ))
            ) : null}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Statistics Bar Chart */}
            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-8 outline-none focus:outline-none">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">إحصائيات المخيم</h2>
              <div className="h-[300px] md:h-[450px] w-full outline-none">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { name: "التقارير", value: statistics[0]?.value || 0 },
                      { name: "الحالات المرضية", value: statistics[1]?.value || 0 },
                      { name: "الغائبين", value: statistics[2]?.value || 0 },
                      { name: "الأطفال", value: Math.floor((statistics[3]?.value || 0) / 10) }
                    ]}
                    margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 14, fontWeight: 600, fill: "#374151" }}
                      angle={-15}
                      textAnchor="end"
                      height={100}
                    />
                    <YAxis
                      tick={{ fontSize: 14, fill: "#374151" }}
                      label={{ value: "العدد", angle: -90, position: "insideLeft", style: { fontSize: 14, fontWeight: 600 } }}
                    />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#fff", border: "2px solid #10b981", borderRadius: "12px", fontSize: 14 }}
                      cursor={{ fill: "rgba(16, 185, 129, 0.1)" }}
                      formatter={(value) => `${value}`}
                      labelStyle={{ color: "#374151", fontWeight: 600 }}
                    />
                    <Bar
                      dataKey="value"
                      fill="#10b981"
                      radius={[12, 12, 0, 0]}
                      animationDuration={1500}
                      barSize={60}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Groups Distribution Pie Chart */}
            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-8 outline-none focus:outline-none">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">توزيع الأفواج</h2>
              <div className="h-[300px] md:h-[450px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                    <Pie
                      data={groups && groups.length > 0 ? groups.map((g, idx) => ({
                        name: g.name,
                        value: g.childrenCount,
                        color: ["#3b82f6", "#ec4899", "#f59e0b", "#8b5cf6"][idx % 4]
                      })) : []}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      animationDuration={1500}
                    >
                      {groups && groups.length > 0 ? groups.map((g, idx) => (
                        <Cell key={`cell-${idx}`} fill={["#3b82f6", "#ec4899", "#f59e0b", "#8b5cf6"][idx % 4]} />
                      )) : null}
                    </Pie>
                    <Tooltip
                      formatter={(value) => `${value} طفل`}
                      contentStyle={{ backgroundColor: "#fff", border: "2px solid #10b981", borderRadius: "12px", fontSize: 14 }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Activities Progress Line Chart */}
            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-8 lg:col-span-2 outline-none focus:outline-none">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">تطور النشاطات</h2>
              <div className="h-[300px] md:h-[450px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={activities && activities.length > 0 ? activities.map(a => ({
                      name: a.name,
                      progress: (a.progress.completed / a.progress.total) * 100
                    })) : []}
                    margin={{ top: 20, right: 30, left: 30, bottom: 80 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 14, fontWeight: 600, fill: "#374151" }}
                      angle={-15}
                      textAnchor="end"
                      height={100}
                    />
                    <YAxis
                      tick={{ fontSize: 14, fill: "#374151" }}
                      label={{ value: "النسبة المئوية (%)", angle: -90, position: "insideLeft", style: { fontSize: 14, fontWeight: 600 } }}
                    />
                    <Tooltip
                      formatter={(value) => `${value.toFixed(0)}%`}
                      contentStyle={{ backgroundColor: "#fff", border: "2px solid #10b981", borderRadius: "12px", fontSize: 14 }}
                      cursor={{ fill: "rgba(16, 185, 129, 0.1)" }}
                      labelStyle={{ color: "#374151", fontWeight: 600 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="progress"
                      stroke="#10b981"
                      strokeWidth={4}
                      dot={{ fill: "#10b981", r: 8 }}
                      activeDot={{ r: 10, fill: "#059669" }}
                      animationDuration={1500}
                      name="النسبة المئوية"
                    />
                    <RechartsLegend
                      wrapperStyle={{ fontSize: 14, fontWeight: 600, paddingTop: 20 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
            {/* Left Column - Today's Activities */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl shadow-sm p-4 md:p-8 sticky top-24 md:top-8">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">نشاطات اليوم</h2>
                <div className="space-y-1">
                  {todayActivities && todayActivities.length > 0 ? (
                    todayActivities.map((activity) => (
                      <ActivityItem
                        key={activity.id}
                        name={activity.name}
                        timeStart={activity.timeStart}
                        timeEnd={activity.timeEnd}
                        status={activity.status}
                        statusColor={activity.statusColor}
                      />
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm py-8 text-center">لا توجد نشاطات</p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Groups & Progress */}
            <div className="lg:col-span-8 space-y-4 md:space-y-8">
              {/* Groups Section */}
              <div className="bg-white rounded-2xl shadow-sm p-4 md:p-8">
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <h2 className="text-lg md:text-xl font-bold text-gray-900">الأفواج</h2>
                  <button className="text-xs md:text-sm text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
                    عرض الكل →
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  {groups && groups.length > 0 ? (
                    groups.map((group) => (
                      <div
                        key={group.id}
                        className={`${group.backgroundColor} rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 cursor-pointer`}
                      >
                        <div className="text-2xl font-bold text-gray-900">{group.childrenCount}</div>
                        <p className="text-xs text-gray-600 font-medium mb-2">عدد الأطفال</p>
                        <p className="text-xs font-semibold text-gray-900 truncate">{group.name}</p>
                      </div>
                    ))
                  ) : null}
                </div>
              </div>

              {/* Activities Progress Section */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-8">سير النشاطات</h2>
                <div className="space-y-6">
                  {activities && activities.length > 0 ? (
                    activities.map((activity) => (
                      <div key={activity.id}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-gray-900">{activity.name}</span>
                          <span className="text-xs text-gray-500">
                            {activity.progress.completed}/{activity.progress.total}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${activity.progressColor === "green"
                              ? "bg-green-500"
                              : activity.progressColor === "yellow"
                                ? "bg-yellow-500"
                                : activity.progressColor === "red"
                                  ? "bg-red-500"
                                  : "bg-gray-400"
                              }`}
                            style={{
                              width: `${(activity.progress.completed / activity.progress.total) * 100}%`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))
                  ) : null}
                </div>
                <Legend items={legend} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
