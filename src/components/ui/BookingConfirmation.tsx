import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, Wallet, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingConfirmationProps {
  firstName: string;
  bookingDetails: {
    date: string;
    time: string;
    package: string;
  };
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ firstName, bookingDetails }) => {
  useEffect(() => {
    // Trigger confetti animation
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const confettiInterval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(confettiInterval);
        return;
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#9333ea', '#f98f29', '#ef4444']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#9333ea', '#f98f29', '#ef4444']
      });
    }, 150);

    return () => clearInterval(confettiInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto text-center"
    >
      <motion.h2 
        className="text-4xl font-bold text-primary-900 mb-4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        🎊 You're Booked, {firstName}!
      </motion.h2>
      
      <motion.p 
        className="text-xl text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        We can't wait to glamp with you.
      </motion.p>

      {/* Booking Details Card */}
      <motion.div 
        className="glass-card p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div>
            <p className="text-sm text-gray-600">Date</p>
            <p className="font-medium text-primary-900">{bookingDetails.date}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Time</p>
            <p className="font-medium text-primary-900">{bookingDetails.time}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Package</p>
            <p className="font-medium text-primary-900">{bookingDetails.package}</p>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.button
          className="btn btn-primary flex items-center justify-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          onClick={() => {
            const event = {
              title: `Glamping Party - ${bookingDetails.package}`,
              description: 'Your magical glamping experience with Glamping WNY',
              startTime: `${bookingDetails.date}T${bookingDetails.time}`,
              endTime: `${bookingDetails.date}T${bookingDetails.time}`,
              location: 'Your Location',
            };
            
            // Generate ICS file content
            const icsContent = generateICSFile(event);
            
            // Create and trigger download
            const blob = new Blob([icsContent], { type: 'text/calendar' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'glamping-party.ics';
            a.click();
            window.URL.revokeObjectURL(url);
          }}
        >
          <Calendar className="w-5 h-5" />
          Add to Calendar
        </motion.button>

        <motion.button
          className="btn btn-primary flex items-center justify-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          onClick={() => {
            const checklistContent = generateChecklist();
            const blob = new Blob([checklistContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'glamping-checklist.txt';
            a.click();
            window.URL.revokeObjectURL(url);
          }}
        >
          <Download className="w-5 h-5" />
          Download Checklist
        </motion.button>
      </div>

      {/* Apple Wallet Pass */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button 
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
          onClick={() => {
            // Generate and download Apple Wallet pass
            // This would typically integrate with the Apple Wallet API
            console.log('Generate Apple Wallet pass');
          }}
        >
          <Wallet className="w-5 h-5" />
          Add to Apple Wallet
        </button>
      </motion.div>

      {/* Email Confirmation Notice */}
      <motion.div
        className="mt-8 text-gray-600 flex items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Send className="w-5 h-5" />
        <p>Confirmation email sent to your inbox</p>
      </motion.div>
    </motion.div>
  );
};

// Helper function to generate ICS file content
const generateICSFile = (event: any) => {
  return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DESCRIPTION:${event.description}
DTSTART:${event.startTime.replace(/[-:]/g, '')}
DTEND:${event.endTime.replace(/[-:]/g, '')}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;
};

// Helper function to generate checklist content
const generateChecklist = () => {
  return `Glamping Party Checklist

Before the Party:
□ Confirm final guest count
□ Plan party activities
□ Prepare party favors
□ Check weather forecast

What to Bring:
□ Comfortable clothes
□ Sleeping bags or blankets
□ Pillows
□ Personal toiletries
□ Flashlight
□ Camera
□ Birthday cake and candles
□ Party snacks and drinks

We'll Handle:
✓ Tent setup and decorations
✓ Lighting and ambiance
✓ Tables and seating
✓ Basic party supplies
✓ Safety equipment
✓ Cleanup

Have questions? Contact us at:
Phone: (716) 555-1234
Email: info@glampingwny.com`;
};

export default BookingConfirmation;