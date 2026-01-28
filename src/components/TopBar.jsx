import { Icons } from "./Icons";

export function TopBar() {
  const today = new Date();
  const dateAr = today.toLocaleDateString('ar-EG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Arabic day names and months with normal digits
  const daysAr = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const monthsAr = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 
                     'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  const dayName = daysAr[today.getDay()];
  const monthName = monthsAr[today.getMonth()];
  const dayNum = today.getDate();
  const yearNum = today.getFullYear();
  
  const dateArabic = `${dayName}، ${monthName} ${dayNum}، ${yearNum}`;

  return (
    <div className="fixed top-0 right-0 left-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="mr-0 md:mr-20 px-3 md:px-8 py-3 md:py-4 flex items-center justify-between gap-2 md:gap-4">
        {/* Left Section - User Profile */}
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-xs md:text-sm flex-shrink-0">
            ع
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-xs md:text-sm font-bold text-gray-900">عبد الكريم حمادو</p>
            <p className="text-xs text-gray-500">مدير المخيم</p>
          </div>
        </div>

        {/* Center Section - Title and Date */}
        <div className="flex-1 flex flex-col items-center gap-0.5 md:gap-1 min-w-0">
          <h1 className="text-sm md:text-lg font-bold text-gray-900 truncate">نظرة سريعة على أداء المخيم الصيفي</h1>
          <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
            <button className="p-0.5 md:p-1 hover:bg-gray-100 rounded transition-colors">←</button>
            <div className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200 shadow-sm truncate text-xs md:text-sm font-medium text-blue-700">
              <span>{dayName}</span>
              <span> {monthName} {dayNum}، {yearNum}</span>
            </div>
            <button className="p-0.5 md:p-1 hover:bg-gray-100 rounded transition-colors">→</button>
          </div>
        </div>

        {/* Right Section - Notification and Info */}
        <div className="flex items-center gap-2 md:gap-4 min-w-0">
          <div className="text-right hidden md:block">
            <p className="text-xs md:text-sm font-bold text-gray-900">مدخل الخزائن المتصرف الفرقة 2</p>
            <p className="text-xs text-gray-500">سيدمودسي حجيل</p>
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold cursor-pointer hover:shadow-lg transition-all flex-shrink-0 text-base md:text-lg">
            <Icons.Bell />
          </div>
        </div>
      </div>
    </div>
  );
}
