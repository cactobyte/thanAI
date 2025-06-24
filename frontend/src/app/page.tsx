import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <NavBar />
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Professional<br />Class AI for Law</h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-xl mx-auto">
          Instantly generate Thai-law-compliant contracts and legal documents—at a fraction of lawyer fees—using AI prompts and templates.
        </p>
        <a href="#" className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-lg text-lg shadow hover:bg-gray-200 transition mb-6">
          Get Started
        </a>
      </main>
    </div>
  );
}
