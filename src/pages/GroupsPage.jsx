import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Modal } from "../components/Modal";
import { Header } from "../components/Header";
import { StatCard } from "../components/StatCard";
import { Icons } from "../components/Icons";

export function GroupsPage() {
  const initialGroupCategories = [
    {
      id: 1,
      name: "فوج فريسان القوة",
      children: 12,
      coordinator: "إسلام حمادو",
      phone: "0671 22 33 16",
      status: "نشط",
      statusColor: "green",
      activities: "النشاط الأول, النشاط الثاني"
    },
    {
      id: 2,
      name: "فوج الزهرات الجميلات",
      children: 12,
      coordinator: "مصطفى احمد",
      phone: "0671 22 33 16",
      status: "نشط",
      statusColor: "green",
      activities: "النشاط الأول, النشاط الثاني"
    },
    {
      id: 3,
      name: "فوج أمل المستقبل",
      children: 12,
      coordinator: "إسلام حمادو",
      phone: "0671 22 33 16",
      status: "نشط",
      statusColor: "green",
      activities: "النشاط الأول, النشاط الثاني"
    },
    {
      id: 4,
      name: "فوج رواد الثاني",
      children: 12,
      coordinator: "إسلام حمادو",
      phone: "0671 22 33 16",
      status: "نشط",
      statusColor: "green",
      activities: "النشاط الأول, النشاط الثاني"
    }
  ];

  const [groupCategories, setGroupCategories] = useState(initialGroupCategories);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    children: "",
    coordinator: "",
    phone: ""
  });

  const mentors = ["إسلام حمادو", "مصطفى احمد", "أكرم مقدم", "محمد علي"];

  const handleAddGroup = (e) => {
    e.preventDefault();
    if (formData.name && formData.children && formData.coordinator && formData.phone) {
      const newGroup = {
        id: groupCategories.length + 1,
        name: formData.name,
        children: parseInt(formData.children),
        coordinator: formData.coordinator,
        phone: formData.phone,
        status: "نشط",
        statusColor: "green",
        activities: "النشاط الأول, النشاط الثاني"
      };
      setGroupCategories([...groupCategories, newGroup]);
      setFormData({ name: "", children: "", coordinator: "", phone: "" });
      setShowAddModal(false);
    }
  };

  const handleDeleteGroup = (id) => {
    setGroupCategories(groupCategories.filter(group => group.id !== id));
  };

  return (
    <>
      <Sidebar />
      <div className="min-h-screen bg-gray-50 mr-0 md:mr-20 pt-20 md:pt-0">
        <div className="mx-auto p-4 md:p-10">
          <Header
            title="إدارة الأفواج"
            subtitle="نظرة عامة على توزيع الأطفال والمشرفين على الأفواج"
          />

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard
              icon={<Icons.Groups />}
              value={groupCategories.length}
              label="عدد الأفواج"
              highlighted={true}
            />
            <StatCard
              icon={<Icons.Children />}
              value="48"
              label="إجمالي الأطفال"
              badgeText="مكتمل"
              badgeColor="green"
            />
            <StatCard
              icon={<Icons.Users />}
              value="8"
              label="عدد المشرفين"
              badgeText="متوفر"
              badgeColor="blue"
            />
            <StatCard
              icon={<Icons.CheckCircle />}
              value="95%"
              label="متوسط الحضور"
              badgeText="ممتاز"
              badgeColor="green"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-all"
              >
                + إضافة فوج
              </button>
              <button className="px-4 py-2 rounded-lg border border-yellow-600 text-yellow-600 font-semibold hover:bg-yellow-50 transition-all">
                ✏️ تعديل
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupCategories.map((group) => (
                <div key={group.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {group.name}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${group.statusColor === 'green'
                      ? 'bg-green-100 text-green-700'
                      : group.statusColor === 'red'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-gray-100 text-gray-700'
                      }`}>
                      {group.status}
                    </span>
                  </div>

                  <div className="space-y-3 py-4 border-y border-gray-200">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{group.children}</p>
                      <p className="text-xs text-gray-600">عدد الأطفال</p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-900">المشرف: {group.coordinator}</p>
                      <p className="text-xs text-gray-600 mt-1">هاتف المشرف: {group.phone}</p>
                    </div>
                  </div>

                  <div className="pt-4 text-center">
                    <p className="text-xs text-gray-600">
                      <strong>النشاطات:</strong> {group.activities}
                    </p>
                    <button
                      onClick={() => handleDeleteGroup(group.id)}
                      className="mt-2 text-red-600 hover:text-red-700 text-sm font-semibold transition-colors"
                    >
                      حذف الفوج
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Group Modal */}
          <Modal isOpen={showAddModal} title="إضافة فوج جديد" onClose={() => setShowAddModal(false)}>
            <form onSubmit={handleAddGroup} className="space-y-4">
              <input
                type="text"
                placeholder="اسم الفوج"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
              <input
                type="number"
                placeholder="عدد الأطفال"
                value={formData.children}
                onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
              <select
                value={formData.coordinator}
                onChange={(e) => setFormData({ ...formData, coordinator: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              >
                <option value="">اختر المشرف</option>
                {mentors.map((mentor) => (
                  <option key={mentor} value={mentor}>{mentor}</option>
                ))}
              </select>
              <input
                type="tel"
                placeholder="رقم هاتف المشرف"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
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
