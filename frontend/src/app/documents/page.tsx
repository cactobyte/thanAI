import NavBar from '../../components/NavBar';
import DocumentCard from '../../components/DocumentCard';
import { ShieldCheckIcon, LockClosedIcon, BriefcaseIcon, DocumentTextIcon, HomeModernIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <NavBar />
      <main className="flex flex-col items-center w-full px-4 py-10">
        {/* Breadcrumb */}
        <div className="w-full max-w-4xl mb-6 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="hover:underline">Home</a>
          <span>/</span>
          <span className="text-gray-700 font-semibold">Documents</span>
        </div>
        {/* Headline */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-100 text-blue-500 rounded-full p-3 mb-3">
            <DocumentTextIcon className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center">Generate a Legal Document</h1>
          <p className="text-gray-600 mb-4 text-center max-w-xl">Select the type of legal document you need to generate.</p>
        </div>
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="flex items-center gap-1 text-green-600 text-sm font-medium"><span className="text-lg">✔</span> AI-powered generation</span>
          <span className="flex items-center gap-1 text-green-600 text-sm font-medium"><span className="text-lg">✔</span> Legally verified content</span>
          <span className="flex items-center gap-1 text-green-600 text-sm font-medium"><span className="text-lg">✔</span> Immediate PDF download</span>
        </div>
        {/* Document Cards Grid */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow p-8">
          <h2 className="text-lg font-semibold mb-6">General Documents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <DocumentCard
              icon={<ShieldCheckIcon className="w-8 h-8" />}
              title="Power of Attorney (POA)"
              description="Quickly authorize someone to act on your behalf for legal or financial matters."
            />
            <DocumentCard
              icon={<LockClosedIcon className="w-8 h-8" />}
              title="Non-Disclosure Agreement (NDA)"
              description="Protect your confidential information when sharing ideas or business details."
            />
            <DocumentCard
              icon={<BriefcaseIcon className="w-8 h-8" />}
              title="Freelance/Consulting Contract"
              description="Define project scope, payment terms, and protect your work with clients."
            />
            <DocumentCard
              icon={<ClipboardDocumentCheckIcon className="w-8 h-8" />}
              title="Last Will & Testament"
              description="Ensure your assets are distributed according to your wishes. Protect your loved ones."
            />
            <DocumentCard
              icon={<HomeModernIcon className="w-8 h-8" />}
              title="Rental/Lease Agreement"
              description="Create a clear, legally sound agreement for landlords and tenants."
            />
            <DocumentCard
              icon={<DocumentTextIcon className="w-8 h-8" />}
              title="Privacy Policy"
              description="Comply with regulations (like GDPR/CCPA) and inform users how you handle their data."
            />
          </div>
        </div>
      </main>
    </div>
  );
} 