export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-8 bg-black text-white">
      <div className="text-2xl font-bold tracking-tight">ThanAI</div>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#" className="hover:text-blue-400 transition">Platform</a>
        <a href="#" className="hover:text-blue-400 transition">Solutions</a>
        <a href="#" className="hover:text-blue-400 transition">Customers</a>
        <a href="#" className="hover:text-blue-400 transition">Security</a>
        <a href="#" className="hover:text-blue-400 transition">News</a>
        <a href="#" className="hover:text-blue-400 transition">Company</a>
      </div>
      <div>
        <a href="#" className="text-blue-300 hover:text-blue-500 font-semibold transition">Login</a>
      </div>
    </nav>
  );
} 