import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  const comparisonData = [
    {
      feature: 'Setup & Cleanup',
      glamping: true,
      traditional: false,
      venue: false
    },
    {
      feature: 'Weather Protection',
      glamping: true,
      traditional: false,
      venue: true
    },
    {
      feature: 'Unique Experience',
      glamping: true,
      traditional: false,
      venue: false
    },
    {
      feature: 'All Decorations Included',
      glamping: true,
      traditional: false,
      venue: false
    },
    {
      feature: 'Memorable Photos',
      glamping: true,
      traditional: false,
      venue: true
    },
    {
      feature: 'Stress-Free Planning',
      glamping: true,
      traditional: false,
      venue: false
    },
    {
      feature: 'Custom Themes',
      glamping: true,
      traditional: false,
      venue: false
    },
    {
      feature: 'Outdoor Adventure',
      glamping: true,
      traditional: false,
      venue: false
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-primary-200">
            <th className="text-left py-4 px-4 font-bold text-primary-900">Features</th>
            <th className="text-center py-4 px-4 font-bold text-accent-600">
              Glamping WNY
            </th>
            <th className="text-center py-4 px-4 font-bold text-gray-600">
              Traditional Party
            </th>
            <th className="text-center py-4 px-4 font-bold text-gray-600">
              Venue Rental
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, index) => (
            <tr 
              key={index} 
              className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}
            >
              <td className="py-4 px-4 font-medium text-gray-900">
                {row.feature}
              </td>
              <td className="py-4 px-4 text-center">
                {row.glamping ? (
                  <Check className="w-6 h-6 text-accent-600 mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-gray-400 mx-auto" />
                )}
              </td>
              <td className="py-4 px-4 text-center">
                {row.traditional ? (
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-gray-400 mx-auto" />
                )}
              </td>
              <td className="py-4 px-4 text-center">
                {row.venue ? (
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-gray-400 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 mb-4">
          See why families choose our hassle-free glamping experience over traditional party planning.
        </p>
        <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 px-4 py-2 rounded-full text-sm font-medium">
          <Check className="w-4 h-4" />
          All-inclusive packages starting at $299
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;