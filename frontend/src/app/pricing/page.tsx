import NavBar from '../../components/NavBar';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <NavBar />
      {/* Promo Bar */}
      <div className="w-full bg-yellow-400 text-black text-center py-2 font-semibold text-sm shadow">
        <span>🚀 Launch Promotion: 50% OFF All Documents! Limited Time Offer 🏷️</span>
      </div>
      <main className="flex flex-col items-center w-full px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center">Simple, Transparent Pricing</h1>
        <p className="text-gray-700 mb-10 text-center max-w-2xl">Professional legal documents at a fraction of the cost of hiring an attorney. All documents include AI-powered generation and downloadable PDFs.</p>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
          {/* Simple Documents */}
          <div className="flex-1 bg-blue-50 border border-blue-200 rounded-2xl shadow p-6 flex flex-col min-w-[280px] max-w-sm">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Simple Documents</h2>
            <p className="text-sm mb-4">Essential legal documents with core protections</p>
            <div className="mb-2">
              <span className="text-2xl font-extrabold text-blue-900 line-through mr-2">$49</span>
              <span className="text-3xl font-extrabold text-blue-700">$24.50</span>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-gray-700 text-sm">Ready in ~30 seconds</span>
              <span className="bg-yellow-300 text-yellow-900 px-2 py-0.5 rounded-full text-xs font-bold">50% OFF</span>
            </div>
            <div className="mb-4 space-y-2 text-sm">
              <div className="flex justify-between"><span>Power of Attorney (POA)</span><span className="text-blue-700 font-semibold cursor-pointer">Generate →</span></div>
              <div className="flex justify-between"><span>Non-Disclosure Agreement (NDA)</span><span className="text-blue-700 font-semibold cursor-pointer">Generate →</span></div>
              <div className="flex justify-between"><span>Freelance/Consulting Contract</span><span className="text-blue-700 font-semibold cursor-pointer">Generate →</span></div>
            </div>
            <div className="border-t my-4" />
            <div className="text-xs text-gray-700 font-medium mb-2">Included in Simple Documents:</div>
            <ul className="text-xs text-green-700 space-y-1 mb-2">
              <li>✔ Essential legal provisions</li>
              <li>✔ Fast generation time</li>
              <li>✔ Basic customization</li>
            </ul>
          </div>
          {/* Standard Documents */}
          <div className="flex-1 bg-blue-600 border-2 border-blue-700 rounded-2xl shadow-lg p-6 flex flex-col min-w-[280px] max-w-sm text-white relative z-10">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-300 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow">MOST POPULAR</div>
            <h2 className="text-xl font-bold mb-2">Standard Documents</h2>
            <p className="text-sm mb-4">Comprehensive documents with enhanced protections</p>
            <div className="mb-2">
              <span className="text-2xl font-extrabold line-through mr-2">$99</span>
              <span className="text-3xl font-extrabold">$49.50</span>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-white text-sm">Ready in 1-2 minutes</span>
              <span className="bg-yellow-300 text-yellow-900 px-2 py-0.5 rounded-full text-xs font-bold">50% OFF</span>
            </div>
            <div className="mb-4 space-y-2 text-sm">
              <div className="flex justify-between"><span>Last Will & Testament</span><span className="text-yellow-200 font-semibold cursor-pointer">Generate →</span></div>
              <div className="flex justify-between"><span>Rental/Lease Agreement</span><span className="text-yellow-200 font-semibold cursor-pointer">Generate →</span></div>
              <div className="flex justify-between"><span>Privacy Policy</span><span className="text-yellow-200 font-semibold cursor-pointer">Generate →</span></div>
              <div className="flex justify-between"><span>Website Terms of Service</span><span className="text-yellow-200 font-semibold cursor-pointer">Generate →</span></div>
              <div className="flex justify-between"><span>Business Plan</span><span className="text-yellow-200 font-semibold cursor-pointer">Generate →</span></div>
              <div className="flex justify-between"><span>Market Analysis</span><span className="text-yellow-200 font-semibold cursor-pointer">Generate →</span></div>
            </div>
            <div className="border-t my-4 border-blue-400" />
            <div className="text-xs font-medium mb-2">Included in Standard Documents:</div>
            <ul className="text-xs text-green-200 space-y-1 mb-2">
              <li>✔ Enhanced legal protections</li>
              <li>✔ Editable templates</li>
              <li>✔ Downloadable PDF & DOCX</li>
            </ul>
          </div>
          {/* Complex Documents */}
          <div className="flex-1 bg-gray-900 border border-gray-800 rounded-2xl shadow p-6 flex flex-col min-w-[280px] max-w-sm text-white">
            <h2 className="text-xl font-bold mb-2">Complex Documents</h2>
            <p className="text-sm mb-4">Advanced legal documents with maximum protections</p>
            <div className="mb-2">
              <span className="text-2xl font-extrabold line-through mr-2">$149 - $199</span>
              <span className="text-3xl font-extrabold">$74.50 - $99.50</span>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-white text-sm">Ready in 1 minute</span>
              <span className="bg-yellow-300 text-yellow-900 px-2 py-0.5 rounded-full text-xs font-bold">50% OFF</span>
            </div>
            <div className="mb-4 space-y-2 text-sm">
              <div className="flex justify-between"><span>Employment Agreement</span><span className="text-blue-200 font-semibold cursor-pointer">Generate →</span></div>
              <div className="flex justify-between"><span>Partnership Agreement</span><span className="text-blue-200 font-semibold cursor-pointer">Generate →</span></div>
              <div className="flex justify-between"><span>LLC Operating Agreement</span><span className="text-blue-200 font-semibold cursor-pointer">Generate →</span></div>
            </div>
            <div className="border-t my-4 border-gray-700" />
            <div className="text-xs font-medium mb-2">Included in Complex Documents:</div>
            <ul className="text-xs text-green-200 space-y-1 mb-2">
              <li>✔ Industry-specific clauses</li>
              <li>✔ Extensive context processing</li>
              <li>✔ Priority support</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
} 