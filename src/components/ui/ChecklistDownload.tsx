import React from 'react';
import { Download } from 'lucide-react';

const ChecklistDownload: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Parent's Checklist</h3>
        <Download className="w-6 h-6 text-blue-600" />
      </div>
      <p className="text-gray-600 mb-4">
        Download our comprehensive checklist to help prepare your child for success.
      </p>
      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center gap-2"
        onClick={() => {
          // Download logic would go here
          console.log('Downloading checklist...');
        }}
      >
        <Download className="w-5 h-5" />
        Download Checklist
      </button>
    </div>
  );
};

export default ChecklistDownload;