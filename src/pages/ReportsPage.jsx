import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Modal } from "../components/Modal";
import { Header } from "../components/Header";
import { StatCard } from "../components/StatCard";
import { Icons } from "../components/Icons";

export function ReportsPage() {
  const initialReports = [
    {
      id: 1,
      title: "تقرير لوفي",
      description: "نشرت في لجنة البريد من لجنة البريد، الثانية: يتم الترتيب للبرنامج المسائي يعرض الشيء مع الأسلوب واضح لجنة البريد.",
      date: "11:42 - 25-06-2025",
      status: "مقدم أخير",
      icon: "Reports",
      actions: ["عرض", "حذف"]
    },
    {
      id: 2,
      title: "تقرير طبي",
      description: "تم تسجيل حالة مرضية لطفل بسكتشوق من لجنة البريد في دراج الوزارة، تم فحص الحالة من طرف المختصين بالمركز بالمراجعة على الطبيب.",
      date: "10:23 - 25-06-2025",
      status: "إسلام حمادو",
      icon: "Warning",
      actions: ["عرض", "حذف"]
    },
    {
      id: 3,
      title: "تقرير نشاط",
      description: "تم إنجاز نشاط السباحة بنجاح مع جميع الأطفال، وتم قياس أداء كل طفل وتسجيل النتائج في الملف الخاص به.",
      date: "09:15 - 24-06-2025",
      status: "محمد علي",
      icon: "Activities",
      actions: ["عرض", "حذف"]
    }
  ];

  const [reports, setReports] = useState(initialReports);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: ""
  });

  const statuses = ["مقدم أخير", "إسلام حمادو", "محمد علي", "مريم علي", "أكرم مقدم"];
  const icons = ["Reports", "Warning", "Activities"];

  const handleAddReport = (e) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.status) {
      const now = new Date();
      const dateStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} - ${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;

      const newReport = {
        id: reports.length + 1,
        title: formData.title,
        description: formData.description,
        date: dateStr,
        status: formData.status,
        icon: icons[Math.floor(Math.random() * icons.length)],
        actions: ["عرض", "حذف"]
      };
      setReports([...reports, newReport]);
      setFormData({ title: "", description: "", status: "" });
      setShowAddModal(false);
    }
  };

  const handleDeleteReport = (id) => {
    setReports(reports.filter(report => report.id !== id));
  };

  const IconWrapper = ({ name }) => {
    const Icon = Icons[name] || Icons.Reports;
    return <Icon className="w-10 h-10" />;
  };

  return (
    <>
      <Sidebar />
      <div className="min-h-screen bg-gray-50 mr-0 md:mr-20 pt-20 md:pt-0">
        <div className="mx-auto p-4 md:p-10">
          <Header
            title="التقارير والمتابعات"
            subtitle="متابعة جميع التقارير اليومية والحالات الخاصة بالمخيم"
          />

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard
              icon={<Icons.Reports />}
              value={reports.length}
              label="إجمالي التقارير"
              highlighted={true}
            />
            <StatCard
              icon={<Icons.Edit />}
              value="2"
              label="قيد المعالجة"
              badgeText="نشط"
              badgeColor="blue"
            />
            <StatCard
              icon={<Icons.CheckCircle />}
              value="15"
              label="تمت المعالجة"
              badgeText="مكتمل"
              badgeColor="green"
            />
            <StatCard
              icon={<Icons.Warning />}
              value="1"
              label="حالات عاجلة"
              badgeText="مهم"
              badgeColor="red"
            />
          </div>

          <div className="mb-6 flex gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="px-6 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all"
            >
              + إضافة تقرير
            </button>
          </div>

          <div className="space-y-6">
            {reports.map((report) => (
              <div key={report.id} className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <span className="text-4xl text-emerald-600"><IconWrapper name={report.icon} /></span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {report.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {report.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <span>{report.date}</span>
                      <span className="text-gray-400">•</span>
                      <span>{report.status}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 pt-6 border-t border-gray-200">
                  <button
                    className="px-4 py-2 rounded-lg font-semibold text-sm bg-green-100 text-green-700 hover:bg-green-200 transition-all"
                  >
                    عرض
                  </button>
                  <button
                    onClick={() => handleDeleteReport(report.id)}
                    className="px-4 py-2 rounded-lg font-semibold text-sm bg-red-100 text-red-700 hover:bg-red-200 transition-all"
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Report Modal */}
          <Modal isOpen={showAddModal} title="إضافة تقرير جديد" onClose={() => setShowAddModal(false)}>
            <form onSubmit={handleAddReport} className="space-y-4">
              <input
                type="text"
                placeholder="عنوان التقرير"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
              <textarea
                placeholder="وصف التقرير"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              >
                <option value="">اختر اسم المسؤول</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>{status}</option>
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
