import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Modal } from "../components/Modal";
import { Header } from "../components/Header";
import { StatCard } from "../components/StatCard";
import { Icons } from "../components/Icons";

export function DailyProgramPage() {
  const initialActivities = [
    {
      id: 1,
      title: "سباحة صباحية",
      description: "نشاط رياضي منتظم في بداية اليوم يساعد على تنشيط الجسم، وتعزيز الطاقة الإيجابية والروح المعنوية تحت إشراف فريق المشرفين.",
      status: "رياضة",
      statusColor: "green",
      time: "09:00 - 11:00",
      location: "ساحة المركز",
      audience: "للذكور فقط",
      actions: ["حذف", "تعديل"]
    },
    {
      id: 2,
      title: "تلوين",
      description: "نشاط إبداعي يتيح للأطفال التعبير عن شخصيتهم من خلال الألوان ومشاركتهم بمشاركتهم في الأنشطة الحرة خلال الأنشطة الحرة.",
      status: "فنون",
      statusColor: "orange",
      time: "09:00 - 11:00",
      location: "المكتبة",
      audience: "للإناث فقط",
      actions: ["حذف", "تعديل"]
    },
    {
      id: 3,
      title: "مسيرة وطنية",
      description: "نشاط رياضي منتظم في بداية اليوم يساعد على تنشيط الجسم، وتعزيز الطاقة الإيجابية والروح المعنوية تحت إشراف فريق المشرفين.",
      status: "نشاط",
      statusColor: "blue",
      time: "20:00 - 21:00",
      location: "ساحة المركز",
      audience: "لجميع الأطفال",
      actions: ["حذف", "تعديل"]
    }
  ];

  const [activities, setActivities] = useState(initialActivities);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    time: "",
    location: "",
    audience: ""
  });

  const statusOptions = ["رياضة", "فنون", "نشاط", "تعليمي", "ترفيهي"];
  const audiences = ["للذكور فقط", "للإناث فقط", "لجميع الأطفال"];
  const locations = ["ساحة المركز", "المكتبة", "قاعة الفنون", "حمام السباحة", "الملعب"];

  const handleAddActivity = (e) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.status && formData.time && formData.location && formData.audience) {
      const newActivity = {
        id: activities.length + 1,
        title: formData.title,
        description: formData.description,
        status: formData.status,
        statusColor: formData.status === "رياضة" ? "green" : formData.status === "فنون" ? "orange" : "blue",
        time: formData.time,
        location: formData.location,
        audience: formData.audience,
        actions: ["حذف", "تعديل"]
      };
      setActivities([...activities, newActivity]);
      setFormData({ title: "", description: "", status: "", time: "", location: "", audience: "" });
      setShowAddModal(false);
    }
  };

  const handleDeleteActivity = (id) => {
    setActivities(activities.filter(activity => activity.id !== id));
  };

  return (
    <>
      <Sidebar />
      <div className="min-h-screen bg-gray-50 mr-0 md:mr-20 pt-20 md:pt-0">
        <div className="mx-auto p-4 md:p-10">
          <Header
            title="البرنامج اليومي"
            subtitle="جدول الأنشطة والفعاليات لليوم الحالي"
          />

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard
              icon={<Icons.Calendar />}
              value={activities.length}
              label="نشاطات اليوم"
              highlighted={true}
            />
            <StatCard
              icon={<Icons.Activities />}
              value="2"
              label="أنشطة رياضية"
              badgeText="جارية"
              badgeColor="green"
            />
            <StatCard
              icon={<Icons.Edit />}
              value="1"
              label="ورشات فنية"
              badgeText="مجدول"
              badgeColor="orange"
            />
            <StatCard
              icon={<Icons.Clock />}
              value="4h"
              label="ساعات النشاط"
              badgeColor="blue"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-all"
              >
                + إضافة نشاط
              </button>
            </div>

            <div className="space-y-6">
              {activities.map((activity) => (
                <div key={activity.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {activity.title}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${activity.statusColor === 'green'
                        ? 'bg-green-100 text-green-700'
                        : activity.statusColor === 'orange'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-blue-100 text-blue-700'
                        }`}>
                        {activity.status}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {activity.actions.map((action) => (
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

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {activity.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600"><Icons.Clock /></span>
                      <span className="text-sm font-medium text-gray-700">{activity.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600"><Icons.Location /></span>
                      <span className="text-sm font-medium text-gray-700">{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600"><Icons.Users /></span>
                      <span className="text-sm font-medium text-gray-700">{activity.audience}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteActivity(activity.id)}
                      className="mt-4 text-red-600 hover:text-red-700 text-sm font-semibold transition-colors"
                    >
                      حذف النشاط
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Activity Modal */}
          <Modal isOpen={showAddModal} title="إضافة نشاط جديد" onClose={() => setShowAddModal(false)}>
            <form onSubmit={handleAddActivity} className="space-y-4 max-h-96 overflow-y-auto">
              <input
                type="text"
                placeholder="عنوان النشاط"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
              <textarea
                placeholder="وصف النشاط"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              >
                <option value="">اختر نوع النشاط</option>
                {statusOptions.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="الوقت (مثال: 09:00 - 11:00)"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              />
              <select
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                required
              >
                <option value="">اختر المكان</option>
                {locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
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
