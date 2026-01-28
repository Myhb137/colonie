export const dashboardData = {
  header: {
    title: "نظرة سريعة على أداء المخيم الصيفي",
    subtitle: "الأحد 29 جوان 2025"
  },

  todayActivities: [
    {
      id: 1,
      name: "المسابقة حول المحال في ساحة المركز",
      timeStart: "08:00",
      timeEnd: "10:00",
      status: "منتهى",
      statusColor: "green"
    },
    {
      id: 2,
      name: "دولة حول المدينة",
      timeStart: "10:00",
      timeEnd: "12:00",
      status: "ألغي",
      statusColor: "red"
    },
    {
      id: 3,
      name: "أنشطة رياضية",
      timeStart: "18:00",
      timeEnd: "19:00",
      status: "قادم",
      statusColor: "gray"
    },
    {
      id: 4,
      name: "مسيرة ترفيهية",
      timeStart: "20:00",
      timeEnd: "21:00",
      status: "قادم",
      statusColor: "gray"
    }
  ],

  statistics: [
    {
      id: 1,
      label: "تقارير المنتشطين",
      value: 6,
      icon: "Reports",
      badgeText: "3 تنبيرات عاجلة",
      badgeColor: "red"
    },
    {
      id: 2,
      label: "الحالات المرضية",
      value: 4,
      icon: "Warning",
      badgeText: "2 حالات خطيرة",
      badgeColor: "red"
    },
    {
      id: 3,
      label: "المنشطين الغائبين",
      value: 2,
      icon: "XCircle",
      badgeText: "أفواج محدودة",
      badgeColor: "red"
    },
    {
      id: 4,
      label: "عدد الأطفال",
      value: 72,
      icon: "Children",
      badgeText: "عدد كامل",
      badgeColor: "green",
      highlighted: true
    }
  ],

  groups: [
    {
      id: 1,
      name: "فوج إسلام حمادو",
      childrenCount: 17,
      coordinatorName: "فوج",
      backgroundColor: "bg-blue-100",
      status: "غائب"
    },
    {
      id: 2,
      name: "فوج محمد رزيقي",
      childrenCount: 13,
      coordinatorName: "فوج",
      backgroundColor: "bg-blue-100",
      status: "نشط"
    },
    {
      id: 3,
      name: "فوج مريم بغاني",
      childrenCount: 12,
      coordinatorName: "مريم",
      backgroundColor: "bg-pink-100",
      status: "غائب"
    },
    {
      id: 4,
      name: "فوج ياسين وضيايف",
      childrenCount: 12,
      coordinatorName: "فوج",
      backgroundColor: "bg-blue-100",
      status: "نشط"
    }
  ],

  activities: [
    {
      id: 1,
      name: "النشاط الأول",
      progress: { completed: 1, total: 6 },
      status: "ملغي",
      progressColor: "red"
    },
    {
      id: 2,
      name: "النشاط الثاني",
      progress: { completed: 6, total: 6 },
      status: "تم بنجاح",
      progressColor: "green"
    },
    {
      id: 3,
      name: "النشاط الثالث",
      progress: { completed: 0, total: 6 },
      status: "لم يبدأ بعد",
      progressColor: "gray"
    },
    {
      id: 4,
      name: "النشاط الرابع",
      progress: { completed: 0, total: 6 },
      status: "لم يبدأ بعد",
      progressColor: "gray"
    }
  ],

  legend: [
    { color: "red", label: "ملغي" },
    { color: "yellow", label: "غير مكتمل" },
    { color: "green", label: "تم بنجاح" },
    { color: "gray", label: "لم يبدأ بعد" }
  ]
};
