import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, Sparkles } from 'lucide-react';

const ChecklistDownload: React.FC = () => {
  const handleDownload = () => {
    const checklistContent = `Glamping Party Planning Checklist

BEFORE THE CELEBRATION:
□ Confirm final guest count with Glamping WNY
□ Plan activities and entertainment
□ Prepare party favors and gifts
□ Check weather forecast for outdoor events
□ Prepare food, cake, and refreshments
□ Set up playlist for background music
□ Coordinate with guests on arrival times

WHAT TO BRING:
□ Comfortable clothes for the occasion
□ Extra blankets or pillows if desired
□ Personal items and toiletries
□ Camera or phone for memories
□ Party snacks and beverages
□ Any special dietary items needed
□ Games or activities for entertainment

WHAT WE PROVIDE:
✓ Complete tent setup and decorations
✓ Themed lighting and ambiance
✓ Tables and comfortable seating/bedding
✓ Basic party supplies
✓ Safety equipment and first aid
✓ Professional setup and cleanup

SAFETY REMINDERS:
□ Adult supervision recommended for all events
□ Keep pathways clear and well-lit
□ Have emergency contact numbers ready
□ Review any allergies with all guests
□ Ensure all participants know safety guidelines

SPECIAL OCCASION TIPS:
□ For birthdays: Don't forget the birthday cake!
□ For anniversaries: Consider romantic touches
□ For bachelorettes: Plan fun group activities
□ For date nights: Create intimate atmosphere

CONTACT INFORMATION:
Phone: (716) 555-1234
Email: info@glampingwny.com
Emergency: Call 911 for any serious emergencies

Have an amazing glamping celebration!
- The Glamping WNY Team`;

    const blob = new Blob([checklistContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'glamping-celebration-checklist.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-card p-8 text-center relative overflow-hidden"
    >
      {/* Background sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-400 rounded-full"
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
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-8 h-8 text-primary-600" />
        </div>
        
        <h3 className="text-2xl font-bold text-primary-900 mb-4">
          Free Celebration Planning Checklist
        </h3>
        
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Download our comprehensive checklist to ensure your glamping celebration goes off without a hitch. 
          Everything you need to know for an unforgettable experience!
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            'Pre-event preparation',
            'What to bring guide',
            'Safety reminders'
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center gap-2 text-primary-900"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-5 h-5 text-accent-500" />
              <span className="font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Download Button */}
        <motion.button
          onClick={handleDownload}
          className="btn btn-primary inline-flex items-center gap-2 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5 group-hover:animate-bounce" />
          Download Free Checklist
        </motion.button>

        <p className="text-sm text-gray-600 mt-4">
          No email required • Instant download • 100% free
        </p>
      </div>
    </motion.div>
  );
};

export default ChecklistDownload;