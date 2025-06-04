import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertTriangle } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  const features = [
    { name: 'Decor', glamping: true, hotel: false, camping: false },
    { name: 'Bathrooms', glamping: true, hotel: true, camping: false },
    { name: 'Setup Needed', glamping: false, hotel: false, camping: true },
    { name: 'Booking Ease', glamping: true, hotel: true, camping: false },
    { name: 'Kid Safe', glamping: true, hotel: 'warning', camping: 'warning' }
  ];

  const getIcon = (value: boolean | string) => {
    if (value === true) return <Check className="w-6 h-6 text-emerald-500" />;
    if (value === false) return <X className="w-6 h-6 text-red-500" />;
    if (value === 'warning') return <AlertTriangle className="w-6 h-6 text-amber-500" />;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-4 text-left text-gray-600 font-medium">Feature</th>
            <th className="p-4 text-center bg-primary-50 text-primary-900 font-bold rounded-tl-xl">
              Glamping WNY
            </th>
            <th className="p-4 text-center bg-gray-50 text-gray-900 font-medium">
              Hotel
            </th>
            <th className="p-4 text-center bg-gray-50 text-gray-900 font-medium rounded-tr-xl">
              Traditional Camping
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <motion.tr
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-gray-100 last:border-0"
            >
              <td className="p-4 text-gray-900 font-medium">{feature.name}</td>
              <td className="p-4 bg-primary-50">
                <div className="flex justify-center">
                  {getIcon(feature.glamping)}
                </div>
              </td>
              <td className="p-4 bg-gray-50">
                <div className="flex justify-center">
                  {getIcon(feature.hotel)}
                </div>
              </td>
              <td className="p-4 bg-gray-50">
                <div className="flex justify-center">
                  {getIcon(feature.camping)}
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;