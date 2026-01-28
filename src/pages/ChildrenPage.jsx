import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Modal } from "../components/Modal";

export function ChildrenPage() {
  const initialChildren = [
    {
      id: 1,
      name: "محمد بن علي",
      age: 11,
      group: "أمل المستقبل",
      activity: "إسلام حمادو",
      status: "حيد",
      statusColor: "green"
    },
    {
      id: 2,
      name: "علي مصطفى",
      age: 9,
      group: "رواد الثاني",
      activity: "أكرم مقدم",
      status: "حيد",
      statusColor: "green"
    },
    {
      id: 3,
      name: "فاطمة أحمد",
      age: 10,
      group: "فوج الزهرات",
      activity: "مريم علي",
      status: "غائب",
      statusColor: "red"
    },
    {
      id: 4,
      name: "سارة محمود",
      age: 12,
      group: "فوج النجمات",
      activity: "ليلى حسن",
      status: "حيد",
      statusColor: "green"
    }
  ];

  const ageGroups = [
    { label: "10-14 سنة", value: 39, color: "bg-blue-400" },
    { label: "7-9 سنوات", value: 47, color: "bg-yellow-400" }
  ];

  const genderGroups = [
    { label: "ذكور", value: 47, color: "bg-blue-500" },
    { label: "إناث", value: 39, color: "bg-pink-400" }
  ];

  const [children, setChildren] = useState(initialChildren);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    group: "",
    activity: ""
  });

  const groups = ["أمل المستقبل", "رواد الثاني", "فوج الزهرات", "فوج النجمات"];
  const mentors = ["إسلام حمادو", "أكرم مقدم", "مريم علي", "ليلى حسن"];

  const handleAddChild = (e) => {
    e.preventDefault();
    if (formData.name && formData.age && formData.group && formData.activity) {
      const newChild = {
        id: children.length + 1,
        name: formData.name,
        age: parseInt(formData.age),
        group: formData.group,
        activity: formData.activity,
        status: "حيد",
        statusColor: "green"
      };
      setChildren([...children, newChild]);
      setFormData({ name: "", age: "", group: "", activity: "" });
      setShowAddModal(false);
    }
  };

  const handleDeleteChild = (id) => {
    setChildren(children.filter(child => child.id !== id));
  };

  return (
    <>
      <Sidebar />
      <div className="min-h-screen bg-gray-50 mr-0 md:mr-20 pt-20 md:pt-0">
        <div className="mx-auto p-4 md:p-10">
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Age Distribution */}
            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-8 text-center">
                التوزيع العمري
              </h3>
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full border-8 border-gray-200 relative flex items-center justify-center mb-8">
                  <div className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(rgb(59, 130, 246) 0deg ${(39 / 86) * 360}deg, rgb(234, 179, 8) ${(39 / 86) * 360}deg 360deg)`,
                      borderRadius: '50%'
                    }}>
                  </div>
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-xs text-gray-600">عمر</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  {ageGroups.map((group) => (
                    <div key={group.label} className="flex items-center justify-center gap-3">
                      <span className="text-2xl font-bold text-gray-900">{group.value}</span>
                      <span className="text-sm text-gray-600">{group.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gender Distribution */}
            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-8 text-center">
                التوزيع حسب الجنس
              </h3>
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full border-8 border-gray-200 relative flex items-center justify-center mb-8">
                  <div className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(rgb(239, 68, 68) 0deg ${(39 / 86) * 360}deg, rgb(249, 115, 22) ${(39 / 86) * 360}deg 360deg)`,
                      borderRadius: '50%'
                    }}>
                  </div>
                  <div className="absolute inset-2 bg-white rounded-full"></div>
                </div>
                <div className="space-y-2 text-center">
                  {genderGroups.map((group) => (
                    <div key={group.label} className="flex items-center justify-center gap-3">
                      <span className="text-2xl font-bold text-gray-900">{group.value}</span>
                      <span className="text-sm text-gray-600">{group.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Children Table */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-all"
              >
                + إضافة طفل
              </button>
              <button className="px-4 py-2 rounded-lg border border-yellow-600 text-yellow-600 font-semibold hover:bg-yellow-50 transition-all">
                ✏️ تعديل
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-right text-sm font-bold text-gray-900">الاسم الكامل</th>
                    <th className="px-4 py-3 text-right text-sm font-bold text-gray-900">العمر</th>
                    <th className="px-4 py-3 text-right text-sm font-bold text-gray-900">المجموعة</th>
                    <th className="px-4 py-3 text-right text-sm font-bold text-gray-900">اسم المشرف</th>
                    <th className="px-4 py-3 text-right text-sm font-bold text-gray-900">الحالة الصحية</th>
                  </tr>
                </thead>
                <tbody>
                  {children.map((child) => (
                    <tr key={child.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <img src="https://via.placeholder.com/40" alt={child.name} className="w-10 h-10 rounded-full" />
                          <span className="text-sm font-medium text-gray-900">{child.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">{child.age}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{child.group}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{child.activity}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${child.statusColor === 'green'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                            }`}>
                            {child.status}
                          </span>
                          <button
                            onClick={() => handleDeleteChild(child.id)}
                            className="text-red-600 hover:text-red-700 text-sm font-semibold transition-colors"
                          >
                            حذف
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add Child Modal */}
          <Modal isOpen={showAddModal} title="إضافة طفل جديد" onClose={() => setShowAddModal(false)}>
            <form onSubmit={handleAddChild} className="space-y-4">
              <input
                type="text"
                placeholder="الاسم الكامل"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
              <input
                type="number"
                placeholder="العمر"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
              <select
                value={formData.group}
                onChange={(e) => setFormData({ ...formData, group: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              >
                <option value="">اختر المجموعة</option>
                {groups.map((group) => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
              <select
                value={formData.activity}
                onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              >
                <option value="">اختر المشرف</option>
                {mentors.map((mentor) => (
                  <option key={mentor} value={mentor}>{mentor}</option>
                ))}
              </select>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all"
                >
                  إضافة
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </>
  );
}
