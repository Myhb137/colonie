import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Modal } from "../components/Modal";
import { Header } from "../components/Header";
import { StatCard } from "../components/StatCard";
import { Icons } from "../components/Icons";

export function DocumentsPage() {
    const initialDocuments = [
        {
            id: 1,
            title: "تصريح أبوي",
            type: "PDF",
            size: "2.4 MB",
            date: "25-06-2025",
            category: "إداري",
            categoryColor: "blue",
            actions: ["تحميل", "حذف"]
        },
        {
            id: 2,
            title: "قائمة الطعام الأسبوعية",
            type: "Excel",
            size: "1.1 MB",
            date: "24-06-2025",
            category: "تغذية",
            categoryColor: "green",
            actions: ["تحميل", "حذف"]
        },
        {
            id: 3,
            title: "نموذج تقرير صحي",
            type: "Word",
            size: "500 KB",
            date: "23-06-2025",
            category: "صحي",
            categoryColor: "red",
            actions: ["تحميل", "حذف"]
        },
        {
            id: 4,
            title: "خطة النشاطات الصيفية",
            type: "PDF",
            size: "5.7 MB",
            date: "20-06-2025",
            category: "أنشطة",
            categoryColor: "orange",
            actions: ["تحميل", "حذف"]
        }
    ];

    const [documents, setDocuments] = useState(initialDocuments);
    const [showAddModal, setShowAddModal] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        type: "",
        category: ""
    });

    const categories = ["إداري", "تغذية", "صحي", "أنشطة", "مالية"];
    const types = ["PDF", "Excel", "Word", "Image"];

    const handleAddDocument = (e) => {
        e.preventDefault();
        if (formData.title && formData.type && formData.category) {
            const now = new Date();
            const dateStr = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;

            const newDoc = {
                id: documents.length + 1,
                title: formData.title,
                type: formData.type,
                size: "0 KB", // Mock size
                date: dateStr,
                category: formData.category,
                categoryColor: formData.category === "إداري" ? "blue" : formData.category === "تغذية" ? "green" : "gray",
                actions: ["تحميل", "حذف"]
            };
            setDocuments([...documents, newDoc]);
            setFormData({ title: "", type: "", category: "" });
            setShowAddModal(false);
        }
    };

    const handleDeleteDocument = (id) => {
        setDocuments(documents.filter(doc => doc.id !== id));
    };

    const getFileIcon = (type) => {
        switch (type) {
            case 'PDF': return <Icons.PDF />;
            case 'Excel': return <Icons.Excel />;
            case 'Word': return <Icons.Word />;
            case 'Image': return <Icons.Image />;
            default: return <Icons.Documents />;
        }
    };

    return (
        <>
            <Sidebar />
            <div className="min-h-screen bg-gray-50 mr-0 md:mr-20 pt-20 md:pt-0">
                <div className="mx-auto p-4 md:p-10">
                    <Header
                        title="الأوراق والوثائق"
                        subtitle="إدارة وتحميل المستندات والوثائق الخاصة بالمخيم"
                    />

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <StatCard
                            icon={<Icons.Documents />}
                            value={documents.length}
                            label="إجمالي الملفات"
                            highlighted={true}
                        />
                        <StatCard
                            icon={<Icons.PDF />}
                            value="PDF"
                            label="الأكثر استخداماً"
                            badgeText="شائع"
                            badgeColor="blue"
                        />
                        <StatCard
                            icon={<Icons.Calendar />}
                            value="New"
                            label="أحدث ملف"
                            badgeText="اليوم"
                            badgeColor="green"
                        />
                        <StatCard
                            icon={<Icons.Documents />}
                            value="150MB"
                            label="المساحة المستخدمة"
                            badgeColor="gray"
                        />
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-8">
                        <div className="flex items-center gap-4 mb-8">
                            <button
                                onClick={() => setShowAddModal(true)}
                                className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all"
                            >
                                + إضافة وثيقة
                            </button>
                        </div>

                        <div className="space-y-4">
                            {documents.map((doc) => (
                                <div key={doc.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all group">
                                    <div className="flex items-center gap-4 mb-4 md:mb-0 w-full md:w-auto">
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold bg-gray-100 text-emerald-600`}>
                                            {getFileIcon(doc.type)}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{doc.title}</h3>
                                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                                <span>{doc.size}</span>
                                                <span>•</span>
                                                <span>{doc.date}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between w-full md:w-auto gap-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${doc.categoryColor === 'blue' ? 'bg-blue-100 text-blue-700' :
                                            doc.categoryColor === 'green' ? 'bg-green-100 text-green-700' :
                                                doc.categoryColor === 'orange' ? 'bg-orange-100 text-orange-700' :
                                                    doc.categoryColor === 'red' ? 'bg-red-100 text-red-700' :
                                                        'bg-gray-100 text-gray-700'
                                            }`}>
                                            {doc.category}
                                        </span>

                                        <div className="flex gap-2">
                                            <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                                                <Icons.Download />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteDocument(doc.id)}
                                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                            >
                                                <Icons.Trash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Add Document Modal */}
                    <Modal isOpen={showAddModal} title="إضافة وثيقة جديدة" onClose={() => setShowAddModal(false)}>
                        <form onSubmit={handleAddDocument} className="space-y-4">
                            <input
                                type="text"
                                placeholder="عنوان الوثيقة"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                                required
                            />
                            <select
                                value={formData.type}
                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                                required
                            >
                                <option value="">اختر نوع الملف</option>
                                {types.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                                required
                            >
                                <option value="">اختر التصنيف</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>{category}</option>
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
