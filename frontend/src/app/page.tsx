import NavBar from '../components/NavBar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <NavBar />
      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <div className="w-full max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            AI-Powered Legal Documents in <span className="text-blue-400">Under 1 Minute</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Create professional legal documents quickly and affordably. <span className="text-blue-200">Save up to 90% compared to traditional lawyers.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-gray-800 text-yellow-300 px-4 py-1 rounded-full text-sm font-semibold">★ 4.9/5 (350+ reviews)</span>
            <span className="bg-gray-800 text-green-300 px-4 py-1 rounded-full text-sm font-semibold">Secure & Confidential</span>
            <span className="bg-gray-800 text-blue-300 px-4 py-1 rounded-full text-sm font-semibold">Ready in Under 1 Minute</span>
            <span className="bg-gray-800 text-green-200 px-4 py-1 rounded-full text-sm font-semibold">90% Cheaper than Lawyers</span>
          </div>
          <Link href="/documents" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow transition mb-6">
            Generate Document Now
          </Link>
        </div>
      </main>
    </div>
  );
}
