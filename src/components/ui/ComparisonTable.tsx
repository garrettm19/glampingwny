import React from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonFeature {
  name: string;
  basic: boolean;
  pro: boolean;
  enterprise: boolean;
}

const features: ComparisonFeature[] = [
  { name: 'Basic Features', basic: true, pro: true, enterprise: true },
  { name: 'Priority Support', basic: false, pro: true, enterprise: true },
  { name: 'Custom Solutions', basic: false, pro: false, enterprise: true },
];

const ComparisonTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 text-left border">Features</th>
            <th className="p-4 text-center border">Basic</th>
            <th className="p-4 text-center border">Pro</th>
            <th className="p-4 text-center border">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-4 border">{feature.name}</td>
              <td className="p-4 text-center border">
                {feature.basic ? (
                  <Check className="inline h-5 w-5 text-green-500" />
                ) : (
                  <X className="inline h-5 w-5 text-red-500" />
                )}
              </td>
              <td className="p-4 text-center border">
                {feature.pro ? (
                  <Check className="inline h-5 w-5 text-green-500" />
                ) : (
                  <X className="inline h-5 w-5 text-red-500" />
                )}
              </td>
              <td className="p-4 text-center border">
                {feature.enterprise ? (
                  <Check className="inline h-5 w-5 text-green-500" />
                ) : (
                  <X className="inline h-5 w-5 text-red-500" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;