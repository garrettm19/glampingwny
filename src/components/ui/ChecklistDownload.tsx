import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, Heart } from 'lucide-react';

const ChecklistDownload: React.FC = () => {
  const handleDownload = () => {
    const checklistContent = `Family Glamping Party Planning Checklist

BEFORE YOUR FAMILY CELEBRATION:
□ Confirm final family member count with Glamping WNY
□ Plan family activities and entertainment
□ Prepare family treats and gifts
□ Check weather forecast for outdoor family events
□ Prepare family-friendly food, cake, and refreshments
□ Set up family playlist for background music
□ Coordinate with family members on arrival times

WHAT TO BRING FOR YOUR FAMILY:
□ Comfortable clothes for the whole family
□ Extra blankets or pillows if desired
□ Personal family items and toiletries
□ Camera or phone for family memories
□ Family snacks and beverages
□ Any special dietary items needed for family members
□ Family games or activities for entertainment

WHAT WE PROVIDE FOR YOUR FAMILY:
✓ Complete family tent setup and decorations
✓ Family-friendly themed lighting and ambiance
✓ Tables and comfortable seating/bedding for all family members
✓ Basic family party supplies
✓ Safety equipment and first aid
✓ Professional family setup and cleanup

FAMILY SAFETY REMINDERS:
□ Adult supervision recommended for all family events
□ Keep pathways clear and well-lit for family safety
□ Have emergency contact numbers ready
□ Review any allergies with all family members
□ Ensure all family participants know safety guidelines

SPECIAL FAMILY OCCASION TIPS:
□ For family birthdays: Don't forget the birthday cake!
□ For family anniversaries: Consider romantic touches for parents
□ For family celebrations: Plan fun group activities for all ages
□ For family date nights: Create intimate atmosphere for parents

FAMILY CONTACT INFORMATION:
Phone: (716) 555-1234
Email: info@glampingwny.com
Emergency: Call 911 for any serious emergencies

Have an amazing family glamping celebration!
- The Glamping WNY Family Team`;

    const blob = new Blob([checklistContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'family-glamping-celebration-checklist.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/80 backdrop-blur-sm border border-lavender-200 p-8 text-center relative overflow-hidden rounded-xl"
    >
      {/* Background sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-lavender-400 rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scale: [1, 1.2, 1],
              x: Math.random() * 40 - 20,
              y: Math.random() * 40 - 20,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${20 + i * 20}%`,
              top: '50%',
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10">
        <div className="w-16 h-16 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="w-8 h-8 text-lavender-600" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Free Family Celebration Planning Checklist 👨‍👩‍👧‍👦
        </h3>
        
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Download our comprehensive family checklist to ensure your glamping celebration goes off without a hitch. 
          Everything you need to know for an unforgettable family experience!
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            'Family pre-event preparation',
            'What to bring family guide',
            'Family safety reminders'
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center gap-2 text-gray-800"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-5 h-5 text-lavender-500" />
              <span className="font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Download Button */}
        <motion.button
          onClick={handleDownload}
          className="bg-gradient-to-r from-lavender-500 to-teal-500 hover:from-lavender-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-xl inline-flex items-center gap-2 group transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5 group-hover:animate-bounce" />
          Download Free Family Checklist
        </motion.button>

        <p className="text-sm text-gray-600 mt-4">
          No email required • Instant download • 100% free for families
        </p>
      </div>
    </motion.div>
  );
};

export default ChecklistDownload;