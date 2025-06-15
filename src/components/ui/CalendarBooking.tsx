import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Clock, Users, MapPin, Sparkles, Check, Star, Heart, Plus, Minus, AlertCircle, Package } from 'lucide-react';

interface BookingSlot {
  date: string;
  available: boolean;
  timeSlots: {
    time: string;
    available: boolean;
    inventory: {[serviceId: string]: number};
  }[];
}

interface ServiceOption {
  id: string;
  name: string;
  price: number;
  category: 'base' | 'tent' | 'addon';
  description: string;
  maxQuantity?: number;
  requiresBase?: boolean;
  totalInventory: number; // Total items we have
  shortName?: string; // For inventory display
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

  // All available services with realistic inventory
  const serviceOptions: ServiceOption[] = [
    // Base Packages - Limited inventory
    {
      id: 'indoor-base',
      name: 'Indoor Glamping Base Package',
      shortName: 'Indoor Base',
      price: 225,
      category: 'base',
      description: '1 tent with complete setup, bedding, and decorations',
      maxQuantity: 1,
      totalInventory: 12 // We have 12 base setups available
    },
    {
      id: 'bell-tent-16ft',
      name: '16ft Bell Tent (up to 6 people)',
      shortName: '16ft Bell Tent',
      price: 500,
      category: 'base',
      description: 'Outdoor bell tent for small groups',
      maxQuantity: 1,
      totalInventory: 3 // Limited outdoor tents
    },
    {
      id: 'bell-tent-23ft',
      name: '23ft Bell Tent (7-12 people)',
      shortName: '23ft Bell Tent',
      price: 700,
      category: 'base',
      description: 'Large outdoor bell tent for bigger groups',
      maxQuantity: 1,
      totalInventory: 2 // Very limited large tents
    },
    {
      id: 'day-dreamer-lounge',
      name: 'Day Dreamer Lounge Tent',
      shortName: 'Day Lounge',
      price: 500,
      category: 'base',
      description: 'Perfect for daytime events',
      maxQuantity: 1,
      totalInventory: 2
    },
    {
      id: 'canvas-tent-only',
      name: 'Canvas Tent Only',
      shortName: 'Canvas Only',
      price: 300,
      category: 'base',
      description: 'Basic tent rental for DIY setup',
      maxQuantity: 1,
      totalInventory: 5
    },
    
    // Additional Tents - More available but still limited
    {
      id: 'additional-indoor-tent',
      name: 'Additional Indoor Glamping Tent',
      shortName: 'Extra Tent',
      price: 50,
      category: 'tent',
      description: 'Extra tent to accommodate more guests',
      maxQuantity: 10,
      requiresBase: true,
      totalInventory: 20 // We have 20 extra tents
    },
    {
      id: 'additional-twin-bed',
      name: 'Additional Twin Bed',
      shortName: 'Twin Bed',
      price: 25,
      category: 'tent',
      description: 'Extra comfortable sleeping space',
      maxQuantity: 5,
      requiresBase: true,
      totalInventory: 15
    },
    
    // Add-ons - Good availability but still tracked
    {
      id: 'spa-party-addon',
      name: 'Spa Party Add-On',
      shortName: 'Spa Add-On',
      price: 250,
      category: 'addon',
      description: 'Complete spa experience (Save $75 vs standalone!)',
      maxQuantity: 1,
      requiresBase: true,
      totalInventory: 8 // Limited spa setups
    },
    {
      id: 'balloon-garland',
      name: 'Balloon Garland Topper',
      shortName: 'Balloon Garland',
      price: 25,
      category: 'addon',
      description: 'Beautiful balloon garland decoration',
      maxQuantity: 3,
      totalInventory: 10
    },
    {
      id: 'luxe-lace-teepee',
      name: 'Luxe Lace Teepee + Balloons',
      shortName: 'Lace Teepee',
      price: 65,
      category: 'addon',
      description: 'Premium lace teepee with balloons',
      maxQuantity: 2,
      totalInventory: 4
    },
    {
      id: 'picnic-party',
      name: 'Picnic Party Add-On',
      shortName: 'Picnic Setup',
      price: 200,
      category: 'addon',
      description: 'Complete picnic setup with decorations',
      maxQuantity: 1,
      totalInventory: 3
    },
    {
      id: 'in-home-theater',
      name: 'In-Home Theater',
      shortName: 'Theater',
      price: 35,
      category: 'addon',
      description: 'Movie experience with projector',
      maxQuantity: 1,
      totalInventory: 6
    },
    {
      id: 'movie-under-stars',
      name: 'Movie Night Under the Stars',
      shortName: 'Outdoor Movie',
      price: 150,
      category: 'addon',
      description: 'Outdoor movie experience',
      maxQuantity: 1,
      totalInventory: 2
    },
    {
      id: 'instant-camera',
      name: 'Instant Print Camera',
      shortName: 'Camera',
      price: 20,
      category: 'addon',
      description: 'Capture memories instantly',
      maxQuantity: 2,
      totalInventory: 8
    },
    {
      id: 'smores-bar',
      name: "S'Mores Bar Station",
      shortName: "S'Mores Bar",
      price: 65,
      category: 'addon',
      description: 'Complete s\'mores experience',
      maxQuantity: 1,
      totalInventory: 5
    },
    {
      id: 'portable-ac',
      name: 'Portable Air Conditioner',
      shortName: 'AC Unit',
      price: 50,
      category: 'addon',
      description: 'Stay cool during warm weather',
      maxQuantity: 2,
      totalInventory: 4
    },
    {
      id: 'yard-games',
      name: 'Yard Games',
      shortName: 'Games',
      price: 10,
      category: 'addon',
      description: 'Giant Jenga or Connect 4',
      maxQuantity: 3,
      totalInventory: 12
    },
    {
      id: 'lounger-sofa',
      name: 'Lounger Sofa',
      shortName: 'Sofa',
      price: 50,
      category: 'addon',
      description: 'Comfortable outdoor furniture',
      maxQuantity: 2,
      totalInventory: 6
    },
    {
      id: 'outdoor-bean-bag',
      name: 'Outdoor Bean Bag',
      shortName: 'Bean Bag',
      price: 10,
      category: 'addon',
      description: 'Comfortable outdoor seating',
      maxQuantity: 4,
      totalInventory: 15
    },
    {
      id: 'bring-pet',
      name: 'Bring Your Pet',
      shortName: 'Pet Fee',
      price: 20,
      category: 'addon',
      description: 'Pet-friendly accommodations',
      maxQuantity: 2,
      totalInventory: 999 // No real limit on pet fees
    }
  ];

  // Generate realistic booking data with inventory tracking
  useEffect(() => {
    const generateRealisticData = () => {
      const data: BookingSlot[] = [];
      const today = new Date();
      
      for (let i = 0; i < 90; i++) { // 3 months of data
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        
        const dateStr = date.toISOString().split('T')[0];
        const dayOfWeek = date.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        
        // Generate time slots with realistic inventory
        const timeSlots = [
          'Morning Setup (9am-12pm)',
          'Afternoon Setup (1pm-4pm)', 
          'Evening Setup (5pm-8pm)'
        ].map(time => {
          // Simulate existing bookings affecting inventory
          const bookingFactor = Math.random();
          const weekendFactor = isWeekend ? 0.7 : 0.9; // Weekends are busier
          
          const inventory: {[serviceId: string]: number} = {};
          
          serviceOptions.forEach(service => {
            // Calculate available inventory for this time slot
            let available = service.totalInventory;
            
            // Reduce availability based on existing bookings
            if (bookingFactor < 0.3) { // 30% chance of heavy booking
              available = Math.floor(available * 0.3);
            } else if (bookingFactor < 0.6) { // 30% chance of medium booking
              available = Math.floor(available * 0.6);
            } else { // 40% chance of light booking
              available = Math.floor(available * weekendFactor);
            }
            
            // Ensure we don't go below 0
            inventory[service.id] = Math.max(0, available);
          });
          
          // Time slot is available if we have at least one base package
          const hasBasePackages = serviceOptions
            .filter(s => s.category === 'base')
            .some(s => inventory[s.id] > 0);
          
          return {
            time,
            available: hasBasePackages,
            inventory
          };
        });
        
        // Date is available if any time slot is available
        const dateAvailable = timeSlots.some(slot => slot.available);
        
        data.push({
          date: dateStr,
          available: dateAvailable,
          timeSlots
        });
      }
      
      setBookingData(data);
      setIsLoading(false);
    };

    setTimeout(generateRealisticData, 1000);
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

  const getAvailableInventory = (serviceId: string): number => {
    if (!selectedDate || !selectedTime) return 0;
    
    const booking = bookingData.find(b => b.date === selectedDate);
    const timeSlot = booking?.timeSlots.find(t => t.time === selectedTime);
    
    return timeSlot?.inventory[serviceId] || 0;
  };

  const handleServiceQuantityChange = (serviceId: string, change: number) => {
    setSelectedServices(prev => {
      const service = serviceOptions.find(s => s.id === serviceId);
      const currentQuantity = prev[serviceId] || 0;
      const availableInventory = getAvailableInventory(serviceId);
      const maxAllowed = Math.min(service?.maxQuantity || 1, availableInventory);
      const newQuantity = Math.max(0, Math.min(currentQuantity + change, maxAllowed));
      
      if (newQuantity === 0) {
        const { [serviceId]: removed, ...rest } = prev;
        return rest;
      }
      
      // If this is a base package, clear other base packages
      if (service?.category === 'base' && newQuantity > 0) {
        const newServices = Object.fromEntries(
          Object.entries(prev).filter(([id]) => {
            const s = serviceOptions.find(opt => opt.id === id);
            return s?.category !== 'base';
          })
        );
        return { ...newServices, [serviceId]: newQuantity };
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

  const canAddService = (service: ServiceOption) => {
    if (service.requiresBase && !hasBasePackage()) {
      return false;
    }
    if (!selectedDate || !selectedTime) {
      return false;
    }
    return getAvailableInventory(service.id) > 0;
  };

  const getInventoryStatus = (serviceId: string): { available: number; status: 'high' | 'medium' | 'low' | 'none' } => {
    const available = getAvailableInventory(serviceId);
    const service = serviceOptions.find(s => s.id === serviceId);
    const total = service?.totalInventory || 1;
    const percentage = available / total;
    
    if (available === 0) return { available, status: 'none' };
    if (percentage > 0.6) return { available, status: 'high' };
    if (percentage > 0.3) return { available, status: 'medium' };
    return { available, status: 'low' };
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
        <p className="text-gray-600">Loading real-time availability...</p>
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
              {selectedDate && selectedTime && (
                <div className="mt-3 p-2 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-700 font-medium">
                    Showing availability for {selectedTime} on {new Date(selectedDate).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>

            {/* Base Packages */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-primary-600" />
                Base Package (Choose One)
              </h4>
              <div className="space-y-2">
                {serviceOptions.filter(s => s.category === 'base').map((service) => {
                  const inventory = getInventoryStatus(service.id);
                  const isSelected = selectedServices[service.id];
                  
                  return (
                    <div
                      key={service.id}
                      className={`p-3 border-2 rounded-lg transition-all duration-200 ${
                        isSelected 
                          ? 'border-primary-500 bg-primary-50' 
                          : inventory.status === 'none'
                            ? 'border-gray-200 bg-gray-50 opacity-60'
                            : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-medium text-gray-800 text-sm">{service.name}</div>
                          <div className="text-xs text-gray-600">{service.description}</div>
                          <div className="text-primary-600 font-bold">${service.price}</div>
                          
                          {/* Inventory Status */}
                          {selectedDate && selectedTime && (
                            <div className="mt-1 flex items-center gap-1">
                              <Package className="w-3 h-3 text-gray-500" />
                              <span className={`text-xs font-medium ${
                                inventory.status === 'none' ? 'text-red-600' :
                                inventory.status === 'low' ? 'text-orange-600' :
                                inventory.status === 'medium' ? 'text-yellow-600' :
                                'text-green-600'
                              }`}>
                                {inventory.status === 'none' ? 'Sold Out' :
                                 inventory.status === 'low' ? `Only ${inventory.available} left` :
                                 inventory.status === 'medium' ? `${inventory.available} available` :
                                 'Available'}
                              </span>
                            </div>
                          )}
                        </div>
                        <button
                          onClick={() => {
                            if (inventory.status !== 'none') {
                              const newServices = Object.fromEntries(
                                Object.entries(selectedServices).filter(([id]) => {
                                  const s = serviceOptions.find(opt => opt.id === id);
                                  return s?.category !== 'base';
                                })
                              );
                              setSelectedServices({ ...newServices, [service.id]: 1 });
                            }
                          }}
                          disabled={inventory.status === 'none' || (!selectedDate || !selectedTime)}
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            isSelected
                              ? 'border-primary-500 bg-primary-500 text-white'
                              : inventory.status === 'none' || (!selectedDate || !selectedTime)
                                ? 'border-gray-300 bg-gray-100 cursor-not-allowed'
                                : 'border-gray-300 hover:border-primary-400'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Tents */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Plus className="w-4 h-4 text-blue-600" />
                Additional Tents
              </h4>
              {!hasBasePackage() && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-3">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <p className="text-yellow-800 text-xs">
                      Select a base package first to add extra tents
                    </p>
                  </div>
                </div>
              )}
              <div className="space-y-2">
                {serviceOptions.filter(s => s.category === 'tent').map((service) => {
                  const inventory = getInventoryStatus(service.id);
                  const currentQuantity = selectedServices[service.id] || 0;
                  const canAdd = canAddService(service);
                  
                  return (
                    <div
                      key={service.id}
                      className={`p-3 border-2 rounded-lg transition-all duration-200 ${
                        !canAdd ? 'opacity-50' : 'hover:border-blue-300'
                      } border-gray-200`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-medium text-gray-800 text-sm">{service.name}</div>
                          <div className="text-xs text-gray-600">{service.description}</div>
                          <div className="text-blue-600 font-bold">${service.price}</div>
                          
                          {/* Inventory Status */}
                          {selectedDate && selectedTime && (
                            <div className="mt-1 flex items-center gap-1">
                              <Package className="w-3 h-3 text-gray-500" />
                              <span className={`text-xs font-medium ${
                                inventory.status === 'none' ? 'text-red-600' :
                                inventory.status === 'low' ? 'text-orange-600' :
                                inventory.status === 'medium' ? 'text-yellow-600' :
                                'text-green-600'
                              }`}>
                                {inventory.status === 'none' ? 'Sold Out' :
                                 inventory.status === 'low' ? `Only ${inventory.available} left` :
                                 `${inventory.available} available`}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleServiceQuantityChange(service.id, -1)}
                            disabled={!currentQuantity || !canAdd}
                            className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 flex items-center justify-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-medium">
                            {currentQuantity}
                          </span>
                          <button
                            onClick={() => handleServiceQuantityChange(service.id, 1)}
                            disabled={currentQuantity >= Math.min(service.maxQuantity || 1, inventory.available) || !canAdd}
                            className="w-6 h-6 rounded-full bg-blue-200 hover:bg-blue-300 disabled:opacity-50 flex items-center justify-center"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Add-ons */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-600" />
                Add-ons & Enhancements
              </h4>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {serviceOptions.filter(s => s.category === 'addon').map((service) => {
                  const inventory = getInventoryStatus(service.id);
                  const currentQuantity = selectedServices[service.id] || 0;
                  const canAdd = canAddService(service);
                  
                  return (
                    <div
                      key={service.id}
                      className={`p-3 border-2 rounded-lg transition-all duration-200 ${
                        service.requiresBase && !hasBasePackage() ? 'opacity-50' : 'hover:border-pink-300'
                      } border-gray-200 ${service.id === 'spa-party-addon' ? 'ring-2 ring-green-200 bg-green-50' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-medium text-gray-800 text-sm flex items-center gap-2">
                            {service.name}
                            {service.id === 'spa-party-addon' && (
                              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                Save $75!
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-gray-600">{service.description}</div>
                          <div className={`font-bold ${service.id === 'spa-party-addon' ? 'text-green-600' : 'text-pink-600'}`}>
                            ${service.price}
                          </div>
                          
                          {/* Inventory Status */}
                          {selectedDate && selectedTime && (
                            <div className="mt-1 flex items-center gap-1">
                              <Package className="w-3 h-3 text-gray-500" />
                              <span className={`text-xs font-medium ${
                                inventory.status === 'none' ? 'text-red-600' :
                                inventory.status === 'low' ? 'text-orange-600' :
                                inventory.status === 'medium' ? 'text-yellow-600' :
                                'text-green-600'
                              }`}>
                                {inventory.status === 'none' ? 'Sold Out' :
                                 inventory.status === 'low' ? `Only ${inventory.available} left` :
                                 inventory.available > 10 ? 'Available' : `${inventory.available} available`}
                              </span>
                            </div>
                          )}
                          
                          {service.requiresBase && !hasBasePackage() && (
                            <div className="text-xs text-yellow-600 mt-1">
                              Requires base package
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleServiceQuantityChange(service.id, -1)}
                            disabled={!currentQuantity || !canAdd}
                            className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 flex items-center justify-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-medium">
                            {currentQuantity}
                          </span>
                          <button
                            onClick={() => handleServiceQuantityChange(service.id, 1)}
                            disabled={currentQuantity >= Math.min(service.maxQuantity || 1, inventory.available) || !canAdd}
                            className="w-6 h-6 rounded-full bg-pink-200 hover:bg-pink-300 disabled:opacity-50 flex items-center justify-center"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Package Summary */}
            {Object.keys(selectedServices).length > 0 && (
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-bold text-gray-800 mb-3">Package Summary</h4>
                <div className="space-y-2 mb-4">
                  {getSelectedServicesList().map((service) => (
                    <div key={service.id} className="flex justify-between text-sm">
                      <span>{service.shortName || service.name} {service.quantity > 1 && `(×${service.quantity})`}</span>
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
                <span className="text-gray-600">Fully Booked</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full" />
                <span className="text-gray-600">Past Date</span>
              </div>
            </div>
          </motion.div>

          {/* Time Selection and Booking */}
          {selectedDate && (
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
                  {bookingData.find(b => b.date === selectedDate)?.timeSlots.map((timeSlot) => (
                    <motion.label
                      key={timeSlot.time}
                      className={`block cursor-pointer ${
                        selectedTime === timeSlot.time 
                          ? 'ring-2 ring-primary-500' 
                          : timeSlot.available
                            ? 'hover:ring-2 hover:ring-primary-300'
                            : 'opacity-50 cursor-not-allowed'
                      }`}
                      whileHover={timeSlot.available ? { scale: 1.02 } : {}}
                      whileTap={timeSlot.available ? { scale: 0.98 } : {}}
                    >
                      <input
                        type="radio"
                        name="time"
                        value={timeSlot.time}
                        checked={selectedTime === timeSlot.time}
                        onChange={(e) => timeSlot.available && handleTimeSelect(e.target.value)}
                        disabled={!timeSlot.available}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg">
                        <div>
                          <span className="font-medium text-gray-900">{timeSlot.time}</span>
                          {!timeSlot.available && (
                            <div className="text-xs text-red-600 mt-1">Fully Booked</div>
                          )}
                        </div>
                        {selectedTime === timeSlot.time && (
                          <Check className="w-5 h-5 text-primary-600" />
                        )}
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Final Booking Summary */}
              {selectedTime && hasBasePackage() && (
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
                            <span className="flex items-center gap-2">
                              {service.shortName || service.name} {service.quantity > 1 && `(×${service.quantity})`}
                              {service.id === 'spa-party-addon' && (
                                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                  Save $75!
                                </span>
                              )}
                            </span>
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
              {selectedTime && hasBasePackage() && (
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

              {/* Inventory Notice */}
              {selectedTime && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Package className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-800">
                      <p className="font-medium mb-1">Real-Time Availability</p>
                      <p>Inventory shown is live and updated in real-time. Popular items may sell out quickly, especially on weekends.</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarBooking;