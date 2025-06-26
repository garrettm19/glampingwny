import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, isAfter, isBefore, addDays } from 'date-fns';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Check, X, Clock, Users, MapPin } from 'lucide-react';

interface BookingCalendarProps {
  onDateSelect?: (date: Date) => void;
  className?: string;
}

interface BookingSlot {
  date: Date;
  available: boolean;
  price?: number;
  slots: number;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ 
  onDateSelect,
  className = ''
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generate fake availability data
  const generateAvailability = (month: Date): BookingSlot[] => {
    const start = startOfMonth(month);
    const end = endOfMonth(month);
    const days = eachDayOfInterval({ start, end });
    
    return days.map(day => {
      // Make weekends more likely to be booked
      const isWeekend = day.getDay() === 0 || day.getDay() === 6;
      const randomFactor = Math.random();
      const isAvailable = isWeekend 
        ? randomFactor > 0.7  // 30% chance weekends are available
        : randomFactor > 0.3; // 70% chance weekdays are available
      
      // More slots available on weekdays
      const slots = isWeekend ? Math.floor(Math.random() * 2) + 1 : Math.floor(Math.random() * 3) + 1;
      
      // Base price with weekend premium
      const basePrice = 225;
      const weekendPremium = isWeekend ? 50 : 0;
      const price = basePrice + weekendPremium;
      
      return {
        date: day,
        available: isAvailable && isAfter(day, new Date()),
        price,
        slots: isAvailable ? slots : 0
      };
    });
  };

  const availability = generateAvailability(currentMonth);

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    const prevMonth = subMonths(currentMonth, 1);
    if (!isBefore(startOfMonth(prevMonth), startOfMonth(new Date()))) {
      setCurrentMonth(prevMonth);
    }
  };

  const handleDateClick = (day: Date, available: boolean) => {
    if (!available) return;
    setSelectedDate(day);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    if (selectedDate && onDateSelect) {
      onDateSelect(selectedDate);
    }
  };

  const timeSlots = [
    '9:00 AM - 12:00 PM',
    '1:00 PM - 4:00 PM',
    '5:00 PM - 8:00 PM'
  ];

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center">
          <CalendarIcon className="w-5 h-5 mr-2 text-blue-600" />
          Check Availability
        </h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h4 className="text-lg font-medium text-gray-900">
            {format(currentMonth, 'MMMM yyyy')}
          </h4>
          <button
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="mb-6">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {availability.map((slot, i) => {
            const dayNumber = slot.date.getDate();
            const isCurrentMonth = isSameMonth(slot.date, currentMonth);
            const isSelected = selectedDate ? isSameDay(slot.date, selectedDate) : false;
            const isDisabled = !slot.available || !isCurrentMonth || isBefore(slot.date, new Date());
            
            return (
              <motion.button
                key={i}
                onClick={() => handleDateClick(slot.date, slot.available && isCurrentMonth)}
                disabled={isDisabled}
                className={`
                  relative h-12 rounded-lg flex items-center justify-center transition-all
                  ${isSelected ? 'bg-blue-600 text-white' : ''}
                  ${!isDisabled ? 'hover:bg-blue-50' : ''}
                  ${isDisabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-900'}
                  ${isToday(slot.date) && !isSelected ? 'ring-2 ring-blue-300' : ''}
                `}
                whileHover={!isDisabled ? { scale: 1.05 } : {}}
                whileTap={!isDisabled ? { scale: 0.95 } : {}}
              >
                <span className="text-sm font-medium">{dayNumber}</span>
                
                {/* Availability indicator */}
                {isCurrentMonth && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-0.5">
                    {slot.available ? (
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    )}
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center space-x-4 text-xs text-gray-600 mb-6">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
          <span>Booked</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 border-2 border-blue-300 rounded-full mr-1"></div>
          <span>Today</span>
        </div>
      </div>

      {/* Selected Date Info */}
      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t pt-6"
        >
          <h4 className="font-semibold text-gray-900 mb-4">
            {format(selectedDate, 'EEEE, MMMM d, yyyy')}
          </h4>

          <div className="space-y-3 mb-6">
            <p className="text-sm text-gray-600 flex items-center">
              <Clock className="w-4 h-4 mr-2 text-blue-600" />
              Select a time slot:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {timeSlots.map((time, index) => {
                const isAvailable = Math.random() > 0.3; // Random availability
                
                return (
                  <button
                    key={index}
                    onClick={() => isAvailable && handleTimeSelect(time)}
                    disabled={!isAvailable}
                    className={`
                      p-3 border rounded-lg text-sm transition-colors
                      ${selectedTime === time ? 'bg-blue-600 text-white border-blue-600' : ''}
                      ${isAvailable && selectedTime !== time ? 'hover:bg-blue-50 border-gray-200' : ''}
                      ${!isAvailable ? 'bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200' : ''}
                    `}
                  >
                    <div className="flex justify-between items-center">
                      <span>{time}</span>
                      {isAvailable ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <X className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {selectedTime && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 p-4 rounded-lg"
            >
              <h5 className="font-semibold text-blue-900 mb-2">Booking Summary</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <CalendarIcon className="w-4 h-4 mr-2 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Date & Time</div>
                    <div className="text-gray-700">
                      {format(selectedDate, 'MMMM d, yyyy')} • {selectedTime}
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-4 h-4 mr-2 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Package</div>
                    <div className="text-gray-700">Indoor Glamping (1 Tent)</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Delivery</div>
                    <div className="text-gray-700">Free (within 20 miles of Hamburg)</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-blue-200 flex justify-between">
                <span className="font-semibold text-blue-900">Total:</span>
                <span className="font-bold text-blue-900">$225</span>
              </div>
              
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Continue to Booking
              </button>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default BookingCalendar;