import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Modal } from "../components/Modal";
import { Header } from "../components/Header";
import { StatCard } from "../components/StatCard";
import { Icons } from "../components/Icons";

export function AnnouncementsPage() {
  const initialAnnouncements = [
    {
      id: 1,
      title: "تذكير مهم",
      description: "جميع الأطفال ملزمون بوضع شعارات في الشاطات",
      status: "ملغي",
      statusColor: "red",
      audience: "جميع المشرفين",
      actions: ["حذف", "تعديل"]
    },
    {
      id: 2,
      title: "اجتماع هام",
      description: "اجتماع هام لإجراع الموظرفين حول سير النشاطات اليومية",
      status: "اجتماع",
      statusColor: "orange",
      audience: "جميع المشرفين",
      actions: ["حذف", "تعديل"]
    },
    {
      id: 3,
      title: "إلغاء نشاط السباحة",
      description: "تم إلغاء النشاط بسبب سوء الأحوال الدوية",
      status: "نشاط",
      statusColor: "blue",
      audience: "جميع الأفواج",
      actions: ["حذف", "تعديل"]
    }
  ];

  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    audience: ""
  });

  const statuses = ["ملغي", "اجتماع", "نشاط", "مهم جداً", "تعطيل"];
  const audiences = ["جميع المشرفين", "جميع الأفواج", "جميع الأطفال", "مجموعة محددة"];

  const handleAddAnnouncement = (e) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.status && formData.audience) {
      const newAnnouncement = {
        id: announcements.length + 1,
        title: formData.title,
        description: formData.description,
        status: formData.status,
        statusColor: formData.status === "ملغي" ? "red" : formData.status === "اجتماع" ? "orange" : "blue",
        audience: formData.audience,
        actions: ["حذف", "تعديل"]
      };
      setAnnouncements([...announcements, newAnnouncement]);
      setFormData({ title: "", description: "", status: "", audience: "" });
      setShowAddModal(false);
    }
  };

  const handleDeleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter(announcement => announcement.id !== id));
  };

  return (
    <>
      <Sidebar />
      <div className="min-h-screen bg-gray-50 mr-0 md:mr-20 pt-20 md:pt-0">
        <div className="mx-auto p-4 md:p-10">
          <Header
            title="الإعلانات والتنبيهات"
            subtitle="لوحة التحكم بالإعلانات والتنبيهات الموجهة للطاقم والأطفال"
          />

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard
              icon={<Icons.Announcements />}
              value={announcements.length}
              label="الإعلانات النشطة"
              highlighted={true}
            />
            <StatCard
              icon={<Icons.Users />}
              value="3"
              label="اجتماعات"
              badgeText="اليوم"
              badgeColor="orange"
            />
            <StatCard
              icon={<Icons.Warning />}
              value="1"
              label="تنبيهات هامة"
              badgeText="عاجل"
              badgeColor="red"
            />
            <StatCard
              icon={<Icons.Documents />}
              value="12"
              label="الأرشيف"
              badgeColor="gray"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-all"
              >
                + إضافة إعلان
              </button>
            </div>

            <div className="space-y-6">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {announcement.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${announcement.statusColor === 'red'
                          ? 'bg-red-100 text-red-700'
                          : announcement.statusColor === 'orange'
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-blue-100 text-blue-700'
                          }`}>
                          {announcement.status}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                          مفعل
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                          قواعد
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {announcement.actions.map((action) => (
                        <button
                          key={action}
                          className={`px-3 py-1 rounded-lg font-semibold text-sm transition-all ${action === 'تعديل'
                            ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                            }`}
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    {announcement.description}
                  </p>

                  <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                    <span className="text-emerald-600"><Icons.Users /></span>
                    <span className="text-sm font-medium text-gray-700">{announcement.audience}</span>
                    <button
                      onClick={() => handleDeleteAnnouncement(announcement.id)}
                      className="ar-mr-auto text-red-600 hover:text-red-700 text-sm font-semibold transition-colors"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Announcement Modal */}
          <Modal isOpen={showAddModal} title="إضافة إعلان جديد" onClose={() => setShowAddModal(false)}>
            <form onSubmit={handleAddAnnouncement} className="space-y-4">
              <input
                type="text"
                placeholder="عنوان الإعلان"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
              <textarea
                placeholder="محتوى الإعلان"
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
                <option value="">اختر نوع الإعلان</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
              <select
                value={formData.audience}
                onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              >
                <option value="">اختر الجمهور المستهدف</option>
                {audiences.map((audience) => (
                  <option key={audience} value={audience}>{audience}</option>
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
