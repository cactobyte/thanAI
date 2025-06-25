import { UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-black text-white shadow">
      {/* Logo/Name */}
      <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
        <Link href="/" className="hover:text-blue-400 transition">
          ThanAI
        </Link>
      </div>
      {/* Center Links */}
      <div className="flex gap-8 text-base font-medium">
        <Link href="/documents" className="hover:text-blue-400 transition">Documents</Link>
        <Link href="/pricing" className="hover:text-blue-400 transition">Pricing</Link>
        <a href="#" className="hover:text-blue-400 transition">FAQ</a>
      </div>
      {/* User */}
      <div className="flex items-center gap-2">
        <UserCircleIcon className="w-7 h-7 text-gray-300" />
        <span className="text-sm text-gray-200 font-semibold">Guest User</span>
      </div>
    </nav>
  );
} 