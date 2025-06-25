import { ReactNode } from 'react';

interface DocumentCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
}

export default function DocumentCard({ icon, title, description, link = '#' }: DocumentCardProps) {
  return (
    <div className="flex flex-col items-start border rounded-xl bg-white text-gray-900 shadow-sm p-6 min-w-[240px] max-w-xs w-full h-full">
      <div className="mb-4 text-3xl text-blue-500">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-6 flex-1">{description}</p>
      <a href={link} className="mt-auto text-blue-600 font-semibold hover:underline flex items-center gap-1">
        Create <span className="text-lg">&rarr;</span>
      </a>
    </div>
  );
} 