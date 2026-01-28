import { Icons } from "./Icons";
import { useState } from "react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, label: "فريق العمل", icon: <Icons.Users />, page: "team" },
    { id: 2, label: "قائمة الأطفال", icon: <Icons.Children />, page: "children" },
    { id: 3, label: "الأفواج", icon: <Icons.Groups />, page: "groups" },
    { id: 4, label: "النشاطات", icon: <Icons.Activities />, page: "program" },
    { id: 5, label: "التقارير", icon: <Icons.Reports />, page: "reports" },
    { id: 6, label: "الإعلانات", icon: <Icons.Announcements />, page: "announcements" },
    { id: 7, label: "الأوراق و الوثائق", icon: <Icons.Documents />, page: "documents" }
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:hidden z-50 bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-all"
      >
        <Icons.Menu />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 md:hidden z-30"
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed right-0 top-20 md:top-0 h-screen bg-white shadow-2xl z-40 border-l border-gray-100 transform transition-all duration-300 ease-in-out group overflow-hidden
        w-72 ${isOpen ? "translate-x-0" : "translate-x-full"} 
        md:translate-x-0 md:w-20 md:hover:w-80`}>

        <nav className="space-y-2 px-2 md:px-3 pt-6">
          <button
            data-page="dashboard"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 active:bg-emerald-100 transition-all duration-200 group/item"
          >
            <span className="text-xl md:text-2xl flex-shrink-0 mx-auto md:mx-0 transition-transform duration-200 group-hover/item:scale-110">
              <Icons.Dashboard />
            </span>
            <span className="text-right font-medium text-base opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              لوحة التحكم
            </span>
          </button>

          {menuItems.map((item) => (
            <button
              key={item.id}
              data-page={item.page}
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 transition-all duration-200 group/item"
            >
              <span className="text-xl md:text-2xl flex-shrink-0 mx-auto md:mx-0 transition-transform duration-200 group-hover/item:scale-110">
                {item.icon}
              </span>
              <span className="text-right font-medium text-base opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
