export function Header({ title, subtitle }) {
  return (
    <header className="bg-white rounded-2xl shadow-sm p-12 mb-12 text-center animate-fade-in-up border border-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
        {title}
      </h1>
      <p className="text-base text-gray-500 tracking-wide font-medium">
        {subtitle}
      </p>
    </header>
  );
}
