import NavBar from '../../components/NavBar';
import ChatAssistant from '../../components/ChatAssistant';

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <NavBar />
      <main className="flex flex-col items-center w-full px-4 py-10">
        {/* Headline */}
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center">Generate a Legal Document</h1>
          <p className="text-gray-600 mb-4 text-center max-w-xl">Select the type of legal document you need to generate.</p>
        </div>
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="flex items-center gap-1 text-green-600 text-sm font-medium"><span className="text-lg">✔</span> AI-powered generation</span>
          <span className="flex items-center gap-1 text-green-600 text-sm font-medium"><span className="text-lg">✔</span> Legally verified content</span>
          <span className="flex items-center gap-1 text-green-600 text-sm font-medium"><span className="text-lg">✔</span> Immediate PDF download</span>
        </div>
        {/* Chat Assistant */}
        <ChatAssistant />
      </main>
    </div>
  );
} 