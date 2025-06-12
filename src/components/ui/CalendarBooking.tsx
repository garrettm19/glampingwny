import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Clock, Users, MapPin, Sparkles, Check, Star, Heart } from 'lucide-react';

interface BookingSlot {
  date: string;
  available: boolean;
  price: number;
  timeSlots: string[];
  bookedSlots?: string[];
}

interface CalendarBookingProps {
  onBookingSelect?: (booking: any) => void;
}

const CalendarBooking: React.FC<CalendarBookingProps> = ({ onBookingSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string>('base');
  const [bookingData, setBookingData] = useState<BookingSlot[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data - in real implementation, this would come from Booqable API
  useEffect(() => {
    const generateMockData = () => {
      const data: BookingSlot[] = [];
      const today = new Date();
      
      for (let i = 0; i < 60; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        
        const dateStr = date.toISOString().split('T')[0];
        const dayOfWeek = date.getDay();
        
        // Mock availability logic
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const available = Math.random() > (isWeekend ? 0.3 : 0.5);
        
        data.push({
          date: dateStr,
          available,
          price: isWeekend ? 299 : 249,
          timeSlots: ['Morning (9am-12pm)', 'Afternoon (1pm-4pm)', 'Evening (5pm-8pm)'],
          bookedSlots: available ? [] : ['Morning (9am-12pm)', 'Afternoon (1pm-4pm)']
        });
      }
      
      setBookingData(data);
      setIsLoading(false);
    };

    setTimeout(generateMockData, 1000); // Simulate API call
  }, []);

  const packages = [
    { id: 'base', name: 'Indoor Base Package', price: 225, icon: '🏠', popular: false },
    { id: 'group', name: 'Indoor Group Package', price: 375, icon: '👥', popular: true },
    { id: 'ultimate', name: 'Indoor Ultimate Package', price: 525, icon: '✨', popular: false }
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const getBookingForDate = (date: Date) => {
    return bookingData.find(booking => booking.date === formatDate(date));
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return newDate;
    });
  };

  const handleDateSelect = (date: Date) => {
    const booking = getBookingForDate(date);
    if (booking?.available) {
      setSelectedDate(formatDate(date));
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleBookingConfirm = () => {
    if (selectedDate && selectedTime && selectedPackage) {
      const bookingDetails = {
        date: selectedDate,
        time: selectedTime,
        package: selectedPackage,
        price: packages.find(p => p.id === selectedPackage)?.price || 0
      };
      onBookingSelect?.(bookingDetails);
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  if (isLoading) {
    return (
      <div className="glass-card p-8 text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full mx-auto mb-4"
        />
        <p className="text-gray-600">Loading availability...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Package Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">Choose Your Package</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {packages.map((pkg) => (
            <motion.label
              key={pkg.id}
              className={`relative cursor-pointer group ${
                selectedPackage === pkg.id 
                  ? 'ring-2 ring-primary-500' 
                  : 'hover:ring-2 hover:ring-primary-300'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <input
                type="radio"
                name="package"
                value={pkg.id}
                checked={selectedPackage === pkg.id}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="sr-only"
              />
              <div className="glass-card p-6 text-center relative overflow-hidden">
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="text-3xl mb-3">{pkg.icon}</div>
                <h4 className="font-bold text-primary-900 mb-2">{pkg.name}</h4>
                <div className="text-2xl font-bold text-primary-700 mb-2">${pkg.price}</div>
                
                {selectedPackage === pkg.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 left-4 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center"
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                )}
              </div>
            </motion.label>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-6"
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <motion.button
                onClick={() => navigateMonth('prev')}
                className="p-2 hover:bg-primary-50 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 text-primary-600" />
              </motion.button>
              
              <h2 className="text-xl font-bold text-primary-900">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              
              <motion.button
                onClick={() => navigateMonth('next')}
                className="p-2 hover:bg-primary-50 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 text-primary-600" />
              </motion.button>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {getDaysInMonth(currentDate).map((date, index) => {
                if (!date) {
                  return <div key={index} className="p-2" />;
                }

                const booking = getBookingForDate(date);
                const isToday = formatDate(date) === formatDate(new Date());
                const isSelected = selectedDate === formatDate(date);
                const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

                return (
                  <motion.button
                    key={index}
                    onClick={() => !isPast && handleDateSelect(date)}
                    disabled={isPast || !booking?.available}
                    className={`
                      relative p-2 h-12 text-sm font-medium rounded-lg transition-all duration-200
                      ${isPast 
                        ? 'text-gray-300 cursor-not-allowed' 
                        : booking?.available
                          ? isSelected
                            ? 'bg-primary-600 text-white shadow-lg'
                            : 'hover:bg-primary-50 text-primary-900 cursor-pointer'
                          : 'text-gray-400 cursor-not-allowed bg-gray-50'
                      }
                      ${isToday && !isSelected ? 'ring-2 ring-primary-300' : ''}
                    `}
                    whileHover={booking?.available && !isPast ? { scale: 1.05 } : {}}
                    whileTap={booking?.available && !isPast ? { scale: 0.95 } : {}}
                  >
                    {date.getDate()}
                    
                    {/* Availability indicator */}
                    {booking && !isPast && (
                      <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                        booking.available ? 'bg-purple-400' : 'bg-red-400'
                      }`} />
                    )}
                    
                    {/* Price indicator for available dates */}
                    {booking?.available && !isPast && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-primary-600 font-bold">
                        ${booking.price}
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full" />
                <span className="text-gray-600">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full" />
                <span className="text-gray-600">Booked</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full" />
                <span className="text-gray-600">Past</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Booking Details */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-6 sticky top-8"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Select Your Date & Time</h3>
              <p className="text-gray-600 text-sm">Choose your perfect celebration date</p>
            </div>

            {selectedDate ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Selected Date */}
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary-600" />
                    <span className="font-medium text-primary-900">Selected Date</span>
                  </div>
                  <p className="text-primary-700 font-bold">
                    {new Date(selectedDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>

                {/* Time Selection */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-primary-600" />
                    <span className="font-medium text-primary-900">Setup Time</span>
                  </div>
                  <div className="space-y-2">
                    {bookingData.find(b => b.date === selectedDate)?.timeSlots.map((time) => (
                      <motion.label
                        key={time}
                        className={`block cursor-pointer ${
                          selectedTime === time 
                            ? 'ring-2 ring-primary-500' 
                            : 'hover:ring-2 hover:ring-primary-300'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="radio"
                          name="time"
                          value={time}
                          checked={selectedTime === time}
                          onChange={(e) => handleTimeSelect(e.target.value)}
                          className="sr-only"
                        />
                        <div className="flex items-center justify-between p-3 border-2 border-gray-200 rounded-lg">
                          <span className="font-medium text-gray-900">{time}</span>
                          {selectedTime === time && (
                            <Check className="w-5 h-5 text-primary-600" />
                          )}
                        </div>
                      </motion.label>
                    ))}
                  </div>
                </div>

                {/* Booking Summary */}
                {selectedTime && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-lg p-4"
                  >
                    <h4 className="font-bold text-primary-900 mb-3">Booking Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Package:</span>
                        <span className="font-medium">{packages.find(p => p.id === selectedPackage)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="font-medium">{new Date(selectedDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-medium">{selectedTime}</span>
                      </div>
                      <div className="border-t border-primary-200 pt-2 mt-2">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total:</span>
                          <span className="text-primary-700">
                            ${packages.find(p => p.id === selectedPackage)?.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Book Now Button */}
                {selectedTime && (
                  <motion.button
                    onClick={handleBookingConfirm}
                    className="w-full btn btn-primary group relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Confirm Booking
                    </span>
                    
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>
                )}
              </motion.div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500">Select a date to continue</p>
              </div>
            )}

            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-500" />
                  <span>Instant confirmation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-500" />
                  <span>Free cancellation up to 14 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-500" />
                  <span>Setup & cleanup included</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CalendarBooking;