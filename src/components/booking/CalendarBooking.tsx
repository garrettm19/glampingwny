import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Tent, Users, Clock, Check, X, Sparkles, Mail, Download } from 'lucide-react';
import { format, addDays, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isBefore, isAfter, addMonths, subMonths } from 'date-fns';

interface AvailabilityData {
  date: string;
  available: number;
  booked: number;
  themes: string[];
}

interface BookingData {
  date: Date;
  theme: string;
  guests: number;
  duration: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    childName: string;
    childAge: number;
    specialRequests: string;
  };
}

const themes = [
  { id: 'princess', name: 'Princess Party', color: 'bg-pink-100 text-pink-800', icon: '👑' },
  { id: 'superhero', name: 'Superhero Adventure', color: 'bg-blue-100 text-blue-800', icon: '🦸' },
  { id: 'unicorn', name: 'Unicorn Dreams', color: 'bg-purple-100 text-purple-800', icon: '🦄' },
  { id: 'dinosaur', name: 'Dinosaur Discovery', color: 'bg-green-100 text-green-800', icon: '🦕' },
  { id: 'space', name: 'Space Explorer', color: 'bg-indigo-100 text-indigo-800', icon: '🚀' },
  { id: 'mermaid', name: 'Mermaid Magic', color: 'bg-teal-100 text-teal-800', icon: '🧜‍♀️' },
  { id: 'pirate', name: 'Pirate Adventure', color: 'bg-orange-100 text-orange-800', icon: '🏴‍☠️' },
  { id: 'fairy', name: 'Fairy Garden', color: 'bg-emerald-100 text-emerald-800', icon: '🧚‍♀️' }
];

const CalendarBooking: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availability, setAvailability] = useState<AvailabilityData[]>([]);
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Mock availability data - in production, this would come from your backend
  useEffect(() => {
    const generateMockAvailability = () => {
      const start = startOfMonth(currentMonth);
      const end = endOfMonth(addMonths(currentMonth, 2));
      const days = eachDayOfInterval({ start, end });
      
      return days.map(day => ({
        date: format(day, 'yyyy-MM-dd'),
        available: Math.floor(Math.random() * 4) + 1, // 1-4 tents available
        booked: Math.floor(Math.random() * 2), // 0-1 tents booked
        themes: themes.slice(0, Math.floor(Math.random() * 4) + 2).map(t => t.id)
      }));
    };

    setAvailability(generateMockAvailability());
  }, [currentMonth]);

  const getDayAvailability = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return availability.find(a => a.date === dateStr);
  };

  const isDateAvailable = (date: Date) => {
    if (isBefore(date, new Date())) return false;
    const dayAvailability = getDayAvailability(date);
    return dayAvailability && dayAvailability.available > 0;
  };

  const handleDateSelect = (date: Date) => {
    if (!isDateAvailable(date)) return;
    setSelectedDate(date);
    setBookingData({ ...bookingData, date });
    setStep(2);
  };

  const handleThemeSelect = (themeId: string) => {
    setBookingData({ ...bookingData, theme: themeId });
    setStep(3);
  };

  const handleBookingSubmit = async (customerInfo: any) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const finalBooking: BookingData = {
      ...bookingData,
      customerInfo
    } as BookingData;

    // In production, send to backend
    console.log('Booking submitted:', finalBooking);
    
    setIsLoading(false);
    setIsConfirmed(true);
  };

  const renderCalendar = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const calendarDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <h2 className="text-xl font-bold text-primary-900">
            {format(currentMonth, 'MMMM yyyy')}
          </h2>
          
          <button
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map(day => {
            const dayAvailability = getDayAvailability(day);
            const available = isDateAvailable(day);
            const isPast = isBefore(day, new Date());
            
            return (
              <motion.button
                key={day.toISOString()}
                onClick={() => available && handleDateSelect(day)}
                disabled={!available}
                className={`
                  relative p-3 text-sm rounded-lg transition-all duration-200
                  ${available 
                    ? 'hover:bg-primary-100 cursor-pointer' 
                    : 'cursor-not-allowed opacity-50'
                  }
                  ${isToday(day) ? 'ring-2 ring-accent-400' : ''}
                  ${!isSameMonth(day, currentMonth) ? 'text-gray-300' : ''}
                `}
                whileHover={available ? { scale: 1.05 } : {}}
                whileTap={available ? { scale: 0.95 } : {}}
              >
                <div className="font-medium">{format(day, 'd')}</div>
                
                {/* Availability Indicator */}
                {dayAvailability && !isPast && (
                  <div className="mt-1">
                    {dayAvailability.available > 0 ? (
                      <div className="flex items-center justify-center gap-1">
                        <Tent className="w-3 h-3 text-green-600" />
                        <span className="text-xs text-green-600 font-medium">
                          {dayAvailability.available}
                        </span>
                      </div>
                    ) : (
                      <div className="text-xs text-red-600 font-medium">
                        Full
                      </div>
                    )}
                  </div>
                )}

                {/* Sparkle effect for available dates */}
                {available && (
                  <motion.div
                    className="absolute top-1 right-1 w-1 h-1 bg-accent-400 rounded-full"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-100 rounded border border-green-300"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-100 rounded border border-red-300"></div>
            <span>Fully Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-100 rounded border border-gray-300"></div>
            <span>Past Date</span>
          </div>
        </div>
      </div>
    );
  };

  const renderThemeSelection = () => {
    const dayAvailability = selectedDate ? getDayAvailability(selectedDate) : null;
    const availableThemes = dayAvailability?.themes || [];

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-primary-900 mb-2">
            Choose Your Theme
          </h3>
          <p className="text-gray-600">
            Selected Date: {selectedDate && format(selectedDate, 'EEEE, MMMM d, yyyy')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {themes
            .filter(theme => availableThemes.includes(theme.id))
            .map(theme => (
              <motion.button
                key={theme.id}
                onClick={() => handleThemeSelect(theme.id)}
                className={`
                  p-4 rounded-xl border-2 border-transparent hover:border-primary-300
                  ${theme.color} transition-all duration-200
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{theme.icon}</span>
                  <div className="text-left">
                    <div className="font-bold">{theme.name}</div>
                    <div className="text-sm opacity-75">Perfect for magical memories</div>
                  </div>
                </div>
              </motion.button>
            ))}
        </div>

        <button
          onClick={() => setStep(1)}
          className="mt-6 btn btn-outline w-full"
        >
          Back to Calendar
        </button>
      </motion.div>
    );
  };

  const renderBookingForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      childName: '',
      childAge: '',
      guests: '6',
      duration: '1',
      specialRequests: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleBookingSubmit({
        ...formData,
        childAge: parseInt(formData.childAge),
        guests: parseInt(formData.guests),
        duration: parseInt(formData.duration)
      });
    };

    const selectedTheme = themes.find(t => t.id === bookingData.theme);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-primary-900 mb-2">
            Complete Your Booking
          </h3>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span>{selectedDate && format(selectedDate, 'MMM d, yyyy')}</span>
            <span>•</span>
            <span className={selectedTheme?.color}>
              {selectedTheme?.icon} {selectedTheme?.name}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Child's Name *
              </label>
              <input
                type="text"
                required
                value={formData.childName}
                onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Child's Age *
              </label>
              <input
                type="number"
                required
                min="5"
                max="12"
                value={formData.childAge}
                onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Guests *
              </label>
              <select
                required
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {[...Array(8)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1} guest{i > 0 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration
            </label>
            <select
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="1">One Night</option>
              <option value="2">Two Nights</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Special Requests
            </label>
            <textarea
              rows={3}
              value={formData.specialRequests}
              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              placeholder="Any special requests, dietary restrictions, or additional information..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="btn btn-outline flex-1"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary flex-1 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Complete Booking
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    );
  };

  const renderConfirmation = () => {
    const selectedTheme = themes.find(t => t.id === bookingData.theme);
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Check className="w-10 h-10 text-green-600" />
        </motion.div>

        <h3 className="text-3xl font-bold text-primary-900 mb-4">
          🎉 Booking Confirmed!
        </h3>
        
        <p className="text-gray-600 mb-8">
          Your magical glamping experience is all set! We'll send you a confirmation email with all the details.
        </p>

        <div className="bg-primary-50 rounded-lg p-6 mb-8">
          <h4 className="font-bold text-primary-900 mb-4">Booking Summary</h4>
          <div className="space-y-2 text-left">
            <div className="flex justify-between">
              <span>Date:</span>
              <span className="font-medium">
                {selectedDate && format(selectedDate, 'EEEE, MMMM d, yyyy')}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Theme:</span>
              <span className={`font-medium ${selectedTheme?.color}`}>
                {selectedTheme?.icon} {selectedTheme?.name}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Guests:</span>
              <span className="font-medium">{bookingData.guests || 6}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => {
              // Generate calendar event
              const event = {
                title: `${selectedTheme?.name} Glamping Party`,
                start: selectedDate,
                description: `Magical glamping experience with ${selectedTheme?.name} theme`
              };
              console.log('Add to calendar:', event);
            }}
            className="btn btn-outline flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Add to Calendar
          </button>
          
          <button
            onClick={() => {
              // Generate PDF confirmation
              console.log('Download confirmation');
            }}
            className="btn btn-primary flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Confirmation
          </button>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-center gap-2 text-blue-800">
            <Mail className="w-5 h-5" />
            <span className="font-medium">Confirmation email sent!</span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-4">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex items-center">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center font-bold
                ${step >= stepNum 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
                }
                ${isConfirmed && stepNum === 3 ? 'bg-green-600' : ''}
              `}>
                {isConfirmed && stepNum === 3 ? (
                  <Check className="w-5 h-5" />
                ) : (
                  stepNum
                )}
              </div>
              {stepNum < 3 && (
                <div className={`
                  w-16 h-1 mx-2
                  ${step > stepNum ? 'bg-primary-600' : 'bg-gray-200'}
                `} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-16 mt-2 text-sm text-gray-600">
          <span>Select Date</span>
          <span>Choose Theme</span>
          <span>Book & Pay</span>
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        {isConfirmed ? (
          renderConfirmation()
        ) : step === 1 ? (
          <motion.div key="calendar">
            {renderCalendar()}
          </motion.div>
        ) : step === 2 ? (
          <motion.div key="themes">
            {renderThemeSelection()}
          </motion.div>
        ) : (
          <motion.div key="booking">
            {renderBookingForm()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CalendarBooking;