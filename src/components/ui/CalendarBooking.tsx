import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Clock, Users, MapPin, Sparkles, Check, Star, Heart, Plus, Minus } from 'lucide-react';

interface BookingSlot {
  date: string;
  available: boolean;
  price: number;
  timeSlots: string[];
  bookedSlots?: string[];
}

interface ServiceOption {
  id: string;
  name: string;
  price: number;
  category: 'base' | 'tent' | 'addon';
  description: string;
  maxQuantity?: number;
}

interface CalendarBookingProps {
  onBookingSelect?: (booking: any) => void;
}

const CalendarBooking: React.FC<CalendarBookingProps> = ({ onBookingSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<{[key: string]: number}>({});
  const [bookingData, setBookingData] = useState<BookingSlot[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // All available services organized by category
  const serviceOptions: ServiceOption[] = [
    // Base Packages
    {
      id: 'indoor-base',
      name: 'Indoor Glamping Base Package',
      price: 225,
      category: 'base',
      description: '1 tent with complete setup, bedding, and decorations',
      maxQuantity: 1
    },
    {
      id: 'spa-party-only',
      name: 'Spa Party Only',
      price: 325,
      category: 'base',
      description: 'Complete spa experience for kids',
      maxQuantity: 1
    },
    {
      id: 'spa-party-addon',
      name: 'Spa Party Add-On',
      price: 250,
      category: 'base',
      description: 'Add spa activities to existing package',
      maxQuantity: 1
    },
    {
      id: 'bell-tent-16ft',
      name: '16ft Bell Tent (up to 6 people)',
      price: 500,
      category: 'base',
      description: 'Outdoor bell tent for small groups',
      maxQuantity: 1
    },
    {
      id: 'bell-tent-23ft',
      name: '23ft Bell Tent (7-12 people)',
      price: 700,
      category: 'base',
      description: 'Large outdoor bell tent for bigger groups',
      maxQuantity: 1
    },
    {
      id: 'day-dreamer-lounge',
      name: 'Day Dreamer Lounge Tent',
      price: 500,
      category: 'base',
      description: 'Perfect for daytime events',
      maxQuantity: 1
    },
    {
      id: 'canvas-tent-only',
      name: 'Canvas Tent Only',
      price: 300,
      category: 'base',
      description: 'Basic tent rental for DIY setup',
      maxQuantity: 1
    },
    
    // Additional Tents
    {
      id: 'additional-indoor-tent',
      name: 'Additional Indoor Glamping Tent',
      price: 50,
      category: 'tent',
      description: 'Extra tent to accommodate more guests',
      maxQuantity: 10
    },
    {
      id: 'additional-twin-bed',
      name: 'Additional Twin Bed',
      price: 25,
      category: 'tent',
      description: 'Extra comfortable sleeping space',
      maxQuantity: 5
    },
    
    // Add-ons
    {
      id: 'balloon-garland',
      name: 'Balloon Garland Topper',
      price: 25,
      category: 'addon',
      description: 'Beautiful balloon garland decoration',
      maxQuantity: 3
    },
    {
      id: 'luxe-lace-teepee',
      name: 'Luxe Lace Teepee + Balloons',
      price: 65,
      category: 'addon',
      description: 'Premium lace teepee with balloons',
      maxQuantity: 2
    },
    {
      id: 'picnic-party',
      name: 'Picnic Party Add-On',
      price: 200,
      category: 'addon',
      description: 'Complete picnic setup with decorations',
      maxQuantity: 1
    },
    {
      id: 'in-home-theater',
      name: 'In-Home Theater',
      price: 35,
      category: 'addon',
      description: 'Movie experience with projector',
      maxQuantity: 1
    },
    {
      id: 'movie-under-stars',
      name: 'Movie Night Under the Stars',
      price: 150,
      category: 'addon',
      description: 'Outdoor movie experience',
      maxQuantity: 1
    },
    {
      id: 'instant-camera',
      name: 'Instant Print Camera',
      price: 20,
      category: 'addon',
      description: 'Capture memories instantly',
      maxQuantity: 2
    },
    {
      id: 'smores-bar',
      name: "S'Mores Bar Station",
      price: 65,
      category: 'addon',
      description: 'Complete s\'mores experience',
      maxQuantity: 1
    },
    {
      id: 'portable-ac',
      name: 'Portable Air Conditioner',
      price: 50,
      category: 'addon',
      description: 'Stay cool during warm weather',
      maxQuantity: 2
    },
    {
      id: 'yard-games',
      name: 'Yard Games',
      price: 10,
      category: 'addon',
      description: 'Giant Jenga or Connect 4',
      maxQuantity: 3
    },
    {
      id: 'lounger-sofa',
      name: 'Lounger Sofa',
      price: 50,
      category: 'addon',
      description: 'Comfortable outdoor furniture',
      maxQuantity: 2
    },
    {
      id: 'outdoor-bean-bag',
      name: 'Outdoor Bean Bag',
      price: 10,
      category: 'addon',
      description: 'Comfortable outdoor seating',
      maxQuantity: 4
    },
    {
      id: 'bring-pet',
      name: 'Bring Your Pet',
      price: 20,
      category: 'addon',
      description: 'Pet-friendly accommodations',
      maxQuantity: 2
    }
  ];

  // Mock data generation
  useEffect(() => {
    const generateMockData = () => {
      const data: BookingSlot[] = [];
      const today = new Date();
      
      for (let i = 0; i < 60; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        
        const dateStr = date.toISOString().split('T')[0];
        const dayOfWeek = date.getDay();
        
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const available = Math.random() > (isWeekend ? 0.3 : 0.5);
        
        data.push({
          date: dateStr,
          available,
          price: isWeekend ? 299 : 249,
          timeSlots: ['Morning Setup (9am-12pm)', 'Afternoon Setup (1pm-4pm)', 'Evening Setup (5pm-8pm)'],
          bookedSlots: available ? [] : ['Morning Setup (9am-12pm)', 'Afternoon Setup (1pm-4pm)']
        });
      }
      
      setBookingData(data);
      setIsLoading(false);
    };

    setTimeout(generateMockData, 1000);
  }, []);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
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

  const handleServiceQuantityChange = (serviceId: string, change: number) => {
    setSelectedServices(prev => {
      const service = serviceOptions.find(s => s.id === serviceId);
      const currentQuantity = prev[serviceId] || 0;
      const newQuantity = Math.max(0, Math.min(currentQuantity + change, service?.maxQuantity || 1));
      
      if (newQuantity === 0) {
        const { [serviceId]: removed, ...rest } = prev;
        return rest;
      }
      
      return { ...prev, [serviceId]: newQuantity };
    });
  };

  const calculateTotal = () => {
    return Object.entries(selectedServices).reduce((total, [serviceId, quantity]) => {
      const service = serviceOptions.find(s => s.id === serviceId);
      return total + (service?.price || 0) * quantity;
    }, 0);
  };

  const getSelectedServicesList = () => {
    return Object.entries(selectedServices).map(([serviceId, quantity]) => {
      const service = serviceOptions.find(s => s.id === serviceId);
      return service ? { ...service, quantity } : null;
    }).filter(Boolean);
  };

  const hasBasePackage = () => {
    return Object.keys(selectedServices).some(serviceId => {
      const service = serviceOptions.find(s => s.id === serviceId);
      return service?.category === 'base';
    });
  };

  const handleBookingConfirm = () => {
    if (selectedDate && selectedTime && hasBasePackage()) {
      const bookingDetails = {
        date: selectedDate,
        time: selectedTime,
        services: getSelectedServicesList(),
        total: calculateTotal()
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
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Service Selection */}
        <div className="xl:col-span-1 order-2 xl:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-6 sticky top-8"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Build Your Package</h3>
              <p className="text-gray-600 text-sm">Select services for your celebration</p>
            </div>

            {/* Base Packages */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-primary-600" />
                Base Package (Choose One)
              </h4>
              <div className="space-y-2">
                {serviceOptions.filter(s => s.category === 'base').map((service) => (
                  <div
                    key={service.id}
                    className={`p-3 border-2 rounded-lg transition-all duration-200 ${
                      selectedServices[service.id] 
                        ? 'border-primary-500 bg-primary-50' 
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-gray-800 text-sm">{service.name}</div>
                        <div className="text-xs text-gray-600">{service.description}</div>
                        <div className="text-primary-600 font-bold">${service.price}</div>
                      </div>
                      <button
                        onClick={() => {
                          // Clear other base packages and set this one
                          const newServices = Object.fromEntries(
                            Object.entries(selectedServices).filter(([id]) => {
                              const s = serviceOptions.find(opt => opt.id === id);
                              return s?.category !== 'base';
                            })
                          );
                          setSelectedServices({ ...newServices, [service.id]: 1 });
                        }}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedServices[service.id]
                            ? 'border-primary-500 bg-primary-500 text-white'
                            : 'border-gray-300 hover:border-primary-400'
                        }`}
                      >
                        {selectedServices[service.id] && <Check className="w-3 h-3" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Tents */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Plus className="w-4 h-4 text-blue-600" />
                Additional Tents
              </h4>
              <div className="space-y-2">
                {serviceOptions.filter(s => s.category === 'tent').map((service) => (
                  <div
                    key={service.id}
                    className="p-3 border-2 border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-gray-800 text-sm">{service.name}</div>
                        <div className="text-xs text-gray-600">{service.description}</div>
                        <div className="text-blue-600 font-bold">${service.price}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleServiceQuantityChange(service.id, -1)}
                          disabled={!selectedServices[service.id]}
                          className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">
                          {selectedServices[service.id] || 0}
                        </span>
                        <button
                          onClick={() => handleServiceQuantityChange(service.id, 1)}
                          disabled={(selectedServices[service.id] || 0) >= (service.maxQuantity || 1)}
                          className="w-6 h-6 rounded-full bg-blue-200 hover:bg-blue-300 disabled:opacity-50 flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-600" />
                Add-ons & Enhancements
              </h4>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {serviceOptions.filter(s => s.category === 'addon').map((service) => (
                  <div
                    key={service.id}
                    className="p-3 border-2 border-gray-200 rounded-lg hover:border-pink-300 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-gray-800 text-sm">{service.name}</div>
                        <div className="text-xs text-gray-600">{service.description}</div>
                        <div className="text-pink-600 font-bold">${service.price}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleServiceQuantityChange(service.id, -1)}
                          disabled={!selectedServices[service.id]}
                          className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">
                          {selectedServices[service.id] || 0}
                        </span>
                        <button
                          onClick={() => handleServiceQuantityChange(service.id, 1)}
                          disabled={(selectedServices[service.id] || 0) >= (service.maxQuantity || 1)}
                          className="w-6 h-6 rounded-full bg-pink-200 hover:bg-pink-300 disabled:opacity-50 flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Package Summary */}
            {Object.keys(selectedServices).length > 0 && (
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-bold text-gray-800 mb-3">Package Summary</h4>
                <div className="space-y-2 mb-4">
                  {getSelectedServicesList().map((service) => (
                    <div key={service.id} className="flex justify-between text-sm">
                      <span>{service.name} {service.quantity > 1 && `(×${service.quantity})`}</span>
                      <span className="font-medium">${service.price * service.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-primary-700">${calculateTotal()}</span>
                  </div>
                </div>
              </div>
            )}

            {!hasBasePackage() && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
                <p className="text-yellow-800 text-sm font-medium">
                  Please select a base package to continue
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Calendar and Booking */}
        <div className="xl:col-span-2 order-1 xl:order-2">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-6 mb-8"
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
                    onClick={() => !isPast && hasBasePackage() && handleDateSelect(date)}
                    disabled={isPast || !booking?.available || !hasBasePackage()}
                    className={`
                      relative p-2 h-12 text-sm font-medium rounded-lg transition-all duration-200
                      ${isPast 
                        ? 'text-gray-300 cursor-not-allowed' 
                        : booking?.available && hasBasePackage()
                          ? isSelected
                            ? 'bg-primary-600 text-white shadow-lg'
                            : 'hover:bg-primary-50 text-primary-900 cursor-pointer'
                          : 'text-gray-400 cursor-not-allowed bg-gray-50'
                      }
                      ${isToday && !isSelected ? 'ring-2 ring-primary-300' : ''}
                      ${!hasBasePackage() ? 'opacity-50' : ''}
                    `}
                    whileHover={booking?.available && !isPast && hasBasePackage() ? { scale: 1.05 } : {}}
                    whileTap={booking?.available && !isPast && hasBasePackage() ? { scale: 0.95 } : {}}
                  >
                    {date.getDate()}
                    
                    {/* Availability indicator */}
                    {booking && !isPast && hasBasePackage() && (
                      <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                        booking.available ? 'bg-green-400' : 'bg-red-400'
                      }`} />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
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

          {/* Time Selection and Booking */}
          {selectedDate && hasBasePackage() && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-primary-900 mb-6">Select Setup Time</h3>
              
              {/* Selected Date Display */}
              <div className="bg-primary-50 rounded-lg p-4 mb-6">
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
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-primary-600" />
                  <span className="font-medium text-primary-900">Setup Time</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
                      <div className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg">
                        <span className="font-medium text-gray-900">{time}</span>
                        {selectedTime === time && (
                          <Check className="w-5 h-5 text-primary-600" />
                        )}
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Final Booking Summary */}
              {selectedTime && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-lg p-6 mb-6"
                >
                  <h4 className="font-bold text-primary-900 mb-4">Final Booking Summary</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-medium">{new Date(selectedDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Setup Time:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                    <div className="border-t border-primary-200 pt-3">
                      <div className="space-y-2">
                        {getSelectedServicesList().map((service) => (
                          <div key={service.id} className="flex justify-between text-sm">
                            <span>{service.name} {service.quantity > 1 && `(×${service.quantity})`}</span>
                            <span>${service.price * service.quantity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-primary-200 pt-3">
                      <div className="flex justify-between font-bold text-xl">
                        <span>Total:</span>
                        <span className="text-primary-700">${calculateTotal()}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Book Now Button */}
              {selectedTime && (
                <motion.button
                  onClick={handleBookingConfirm}
                  className="w-full btn btn-primary group relative overflow-hidden py-4 text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Confirm Booking - ${calculateTotal()}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarBooking;