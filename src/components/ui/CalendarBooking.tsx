import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Clock, Users, MapPin, Sparkles, Check, Star, Heart, Plus, Minus, AlertCircle, Package, Crown } from 'lucide-react';

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
  totalInventory: number;
  shortName?: string;
  booqableId?: string;
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
  const [selectedPackageType, setSelectedPackageType] = useState<'indoor' | 'outdoor' | 'spa'>('indoor');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  // All available services with realistic inventory and Booqable IDs
  const serviceOptions: ServiceOption[] = [
    // Base Packages - Each with different inventory levels and booking patterns
    {
      id: 'indoor-base',
      name: 'Indoor Glamping Base Package',
      shortName: 'Indoor Base',
      price: 225,
      category: 'base',
      description: '1 tent with complete setup, bedding, and decorations',
      maxQuantity: 1,
      totalInventory: 12, // Good availability
      booqableId: 'indoor-base-001'
    },
    {
      id: 'bell-tent-16ft',
      name: '16ft Bell Tent (up to 6 people)',
      shortName: '16ft Bell Tent',
      price: 500,
      category: 'base',
      description: 'Outdoor bell tent for small groups',
      maxQuantity: 1,
      totalInventory: 3, // Limited stock - popular item
      booqableId: 'bell-tent-16-001'
    },
    {
      id: 'bell-tent-23ft',
      name: '23ft Bell Tent (7-12 people)',
      shortName: '23ft Bell Tent',
      price: 700,
      category: 'base',
      description: 'Large outdoor bell tent for bigger groups',
      maxQuantity: 1,
      totalInventory: 2, // Very limited stock - premium item
      booqableId: 'bell-tent-23-001'
    },
    {
      id: 'day-dreamer-lounge',
      name: 'Day Dreamer Lounge Tent',
      shortName: 'Day Lounge',
      price: 500,
      category: 'base',
      description: 'Perfect for daytime events',
      maxQuantity: 1,
      totalInventory: 2, // Limited availability
      booqableId: 'day-lounge-001'
    },
    {
      id: 'canvas-tent-only',
      name: 'Canvas Tent Only',
      shortName: 'Canvas Only',
      price: 300,
      category: 'base',
      description: 'Basic tent rental for DIY setup',
      maxQuantity: 1,
      totalInventory: 5, // Moderate availability
      booqableId: 'canvas-tent-001'
    },
    
    // NEW: Spa Party as Standalone Package
    {
      id: 'spa-party-standalone',
      name: 'Spa Party Experience (Standalone)',
      shortName: 'Spa Party',
      price: 325,
      category: 'base',
      description: 'Complete spa party experience with all treatments and activities',
      maxQuantity: 1,
      totalInventory: 6, // Limited spa setups - specialized service
      booqableId: 'spa-standalone-001'
    },
    
    // Additional Tents
    {
      id: 'additional-indoor-tent',
      name: 'Additional Indoor Glamping Tent',
      shortName: 'Extra Tent',
      price: 50,
      category: 'tent',
      description: 'Extra tent to accommodate more guests',
      maxQuantity: 10,
      requiresBase: true,
      totalInventory: 20, // Good availability
      booqableId: 'extra-tent-001'
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
      totalInventory: 15, // Good availability
      booqableId: 'twin-bed-001'
    },
    
    // Add-ons with varying inventory
    {
      id: 'spa-party-addon',
      name: 'Spa Party Add-On',
      shortName: 'Spa Add-On',
      price: 250,
      category: 'addon',
      description: 'Complete spa experience (Save $75 vs standalone!)',
      maxQuantity: 1,
      requiresBase: true,
      totalInventory: 8, // Limited spa equipment
      booqableId: 'spa-addon-001'
    },
    {
      id: 'balloon-garland',
      name: 'Balloon Garland Topper',
      shortName: 'Balloon Garland',
      price: 25,
      category: 'addon',
      description: 'Beautiful balloon garland decoration',
      maxQuantity: 3,
      totalInventory: 10, // Good availability
      booqableId: 'balloon-garland-001'
    },
    {
      id: 'luxe-lace-teepee',
      name: 'Luxe Lace Teepee + Balloons',
      shortName: 'Lace Teepee',
      price: 65,
      category: 'addon',
      description: 'Premium lace teepee with balloons',
      maxQuantity: 2,
      totalInventory: 4, // Limited premium items
      booqableId: 'lace-teepee-001'
    },
    {
      id: 'picnic-party',
      name: 'Picnic Party Add-On',
      shortName: 'Picnic Setup',
      price: 200,
      category: 'addon',
      description: 'Complete picnic setup with decorations',
      maxQuantity: 1,
      totalInventory: 3, // Limited picnic setups
      booqableId: 'picnic-addon-001'
    },
    {
      id: 'in-home-theater',
      name: 'In-Home Theater',
      shortName: 'Theater',
      price: 35,
      category: 'addon',
      description: 'Movie experience with projector',
      maxQuantity: 1,
      totalInventory: 6, // Moderate availability
      booqableId: 'theater-001'
    },
    {
      id: 'movie-under-stars',
      name: 'Movie Night Under the Stars',
      shortName: 'Outdoor Movie',
      price: 150,
      category: 'addon',
      description: 'Outdoor movie experience',
      maxQuantity: 1,
      totalInventory: 2, // Very limited outdoor equipment
      booqableId: 'outdoor-movie-001'
    },
    {
      id: 'instant-camera',
      name: 'Instant Print Camera',
      shortName: 'Camera',
      price: 20,
      category: 'addon',
      description: 'Capture memories instantly',
      maxQuantity: 2,
      totalInventory: 8, // Good availability
      booqableId: 'camera-001'
    },
    {
      id: 'smores-bar',
      name: "S'Mores Bar Station",
      shortName: "S'Mores Bar",
      price: 65,
      category: 'addon',
      description: 'Complete s\'mores experience',
      maxQuantity: 1,
      totalInventory: 5, // Moderate availability
      booqableId: 'smores-001'
    },
    {
      id: 'portable-ac',
      name: 'Portable Air Conditioner',
      shortName: 'AC Unit',
      price: 50,
      category: 'addon',
      description: 'Stay cool during warm weather',
      maxQuantity: 2,
      totalInventory: 4, // Limited AC units
      booqableId: 'ac-unit-001'
    },
    {
      id: 'yard-games',
      name: 'Yard Games',
      shortName: 'Games',
      price: 10,
      category: 'addon',
      description: 'Giant Jenga or Connect 4',
      maxQuantity: 3,
      totalInventory: 12, // Good availability
      booqableId: 'yard-games-001'
    },
    {
      id: 'lounger-sofa',
      name: 'Lounger Sofa',
      shortName: 'Sofa',
      price: 50,
      category: 'addon',
      description: 'Comfortable outdoor furniture',
      maxQuantity: 2,
      totalInventory: 6, // Moderate availability
      booqableId: 'sofa-001'
    },
    {
      id: 'outdoor-bean-bag',
      name: 'Outdoor Bean Bag',
      shortName: 'Bean Bag',
      price: 10,
      category: 'addon',
      description: 'Comfortable outdoor seating',
      maxQuantity: 4,
      totalInventory: 15, // Good availability
      booqableId: 'bean-bag-001'
    },
    {
      id: 'bring-pet',
      name: 'Bring Your Pet',
      shortName: 'Pet Fee',
      price: 20,
      category: 'addon',
      description: 'Pet-friendly accommodations',
      maxQuantity: 2,
      totalInventory: 999, // No real limit on pet fees
      booqableId: 'pet-fee-001'
    }
  ];

  // Generate realistic booking data with product-specific inventory tracking and example bookings
  useEffect(() => {
    const generateRealisticData = () => {
      const data: BookingSlot[] = [];
      const today = new Date();
      
      for (let i = 0; i < 180; i++) { // 6 months of data
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        
        const dateStr = date.toISOString().split('T')[0];
        const dayOfWeek = date.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const day = date.getDate();
        
        // Generate time slots with product-specific inventory and realistic booking patterns
        const timeSlots = [
          'Morning Setup (9am-12pm)',
          'Afternoon Setup (1pm-4pm)', 
          'Evening Setup (5pm-8pm)'
        ].map(time => {
          const inventory: {[serviceId: string]: number} = {};
          
          serviceOptions.forEach(service => {
            // Each product has its own booking pattern and demand
            let baseBookingRate = 0.2; // Base 20% booking rate
            
            // Adjust booking rates by product popularity and type
            switch(service.id) {
              case 'bell-tent-16ft':
                baseBookingRate = 0.7; // Very popular, often booked
                break;
              case 'bell-tent-23ft':
                baseBookingRate = 0.85; // Extremely popular, limited stock
                break;
              case 'spa-party-standalone':
                baseBookingRate = 0.6; // High demand for spa experiences
                break;
              case 'spa-party-addon':
                baseBookingRate = 0.45; // Popular add-on
                break;
              case 'indoor-base':
                baseBookingRate = 0.4; // Steady demand
                break;
              case 'luxe-lace-teepee':
                baseBookingRate = 0.5; // Premium item, moderate demand
                break;
              case 'movie-under-stars':
                baseBookingRate = 0.6; // Popular but limited equipment
                break;
              case 'picnic-party':
                baseBookingRate = 0.4; // Seasonal demand
                break;
              default:
                baseBookingRate = 0.25; // Default moderate demand
            }
            
            // Weekend effect (higher demand)
            if (isWeekend) baseBookingRate += 0.15;
            
            // Special high-demand dates (simulate popular booking dates)
            const isHighDemandDate = (
              day === 15 || day === 16 || // Mid-month weekend
              day === 22 || day === 23 || // Popular weekend
              day === 8 || day === 9      // Another popular weekend
            );
            if (isHighDemandDate) baseBookingRate += 0.2;
            
            // Random factor for this specific date/time
            const randomFactor = Math.random();
            
            // Calculate available inventory based on booking patterns
            let available = service.totalInventory;
            
            if (randomFactor < baseBookingRate) {
              // Calculate how many items are booked
              let bookedItems = 0;
              
              if (service.totalInventory <= 2) {
                // For very limited items (like 23ft bell tent), often fully booked
                bookedItems = randomFactor < (baseBookingRate * 0.8) ? service.totalInventory : Math.floor(service.totalInventory * 0.5);
              } else if (service.totalInventory <= 5) {
                // For limited items, book 60-80% when there's demand
                bookedItems = Math.floor(service.totalInventory * (0.6 + Math.random() * 0.2));
              } else {
                // For items with good availability, book 30-60% when there's demand
                bookedItems = Math.floor(service.totalInventory * (0.3 + Math.random() * 0.3));
              }
              
              available = Math.max(0, service.totalInventory - bookedItems);
            }
            
            // Create some completely sold-out scenarios for popular items
            if (isHighDemandDate && service.totalInventory <= 3 && randomFactor < 0.3) {
              available = 0; // Completely sold out
            }
            
            inventory[service.id] = available;
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

  // When a product is selected, filter calendar data specific to that product
  useEffect(() => {
    if (selectedProduct && bookingData.length > 0) {
      // Don't regenerate data, just use existing data filtered by product
      // This maintains the realistic booking patterns we created
    }
  }, [selectedProduct]);

  const getMonthsToShow = () => {
    const months = [];
    for (let i = 0; i < 3; i++) {
      const date = new Date(currentDate);
      date.setMonth(currentDate.getMonth() + i);
      months.push(date);
    }
    return months;
  };

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

  const navigateMonths = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 3 : -3));
      return newDate;
    });
  };

  const handleDateSelect = (date: Date) => {
    const booking = getBookingForDate(date);
    // Check if the selected product is available on this date
    const productAvailable = selectedProduct && booking?.timeSlots.some(slot => 
      slot.inventory[selectedProduct] > 0
    );
    
    if (booking?.available && productAvailable) {
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
    if (selectedDate && selectedTime && selectedProduct) {
      const bookingDetails = {
        date: selectedDate,
        time: selectedTime,
        services: [
          {
            ...serviceOptions.find(s => s.id === selectedProduct),
            quantity: 1
          },
          ...getSelectedServicesList()
        ].filter(Boolean),
        total: (serviceOptions.find(s => s.id === selectedProduct)?.price || 0) + calculateTotal()
      };
      onBookingSelect?.(bookingDetails);
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getFilteredServices = () => {
    if (selectedPackageType === 'indoor') {
      return serviceOptions.filter(s => 
        s.id === 'indoor-base' || 
        s.id === 'additional-indoor-tent' || 
        s.id === 'additional-twin-bed' ||
        (s.category === 'addon' && !s.id.includes('outdoor') && !s.id.includes('bell-tent'))
      );
    } else if (selectedPackageType === 'outdoor') {
      return serviceOptions.filter(s => 
        s.id.includes('bell-tent') || 
        s.id.includes('canvas-tent') || 
        s.id.includes('day-dreamer') ||
        (s.category === 'addon')
      );
    } else if (selectedPackageType === 'spa') {
      return serviceOptions.filter(s => 
        s.id === 'spa-party-standalone' ||
        (s.category === 'addon' && !s.id.includes('spa-party-addon')) // Exclude the add-on version for standalone spa
      );
    }
    return [];
  };

  const getBasePackages = () => {
    return getFilteredServices().filter(s => s.category === 'base');
  };

  // Helper function to determine if a date should show check-in/check-out styling
  const getDateStyle = (date: Date, booking: any, isSelected: boolean, isPast: boolean) => {
    const day = date.getDate();
    
    // Example check-in/check-out dates for demonstration (realistic booking patterns)
    const isCheckIn = (day === 15 || day === 22 || day === 8) && booking?.available;
    const isCheckOut = (day === 18 || day === 25 || day === 11) && booking?.available;
    
    // Check if this date is between check-in and check-out (should be greyed out)
    const isBetweenBooking = (
      (day > 15 && day < 18) || // 3-day booking
      (day > 22 && day < 25) || // 3-day booking  
      (day > 8 && day < 11)     // 3-day booking
    ) && booking?.available;
    
    let cellClass = "h-12 w-full border border-gray-200 flex items-center justify-center text-sm font-medium cursor-pointer transition-all duration-200 relative ";
    
    if (isPast) {
      cellClass += "text-gray-300 cursor-not-allowed bg-gray-50 ";
    } else if (isBetweenBooking) {
      // Days between check-in and check-out should be greyed out (unavailable)
      cellClass += "bg-gray-200 text-gray-500 cursor-not-allowed ";
    } else if (booking?.available) {
      if (isSelected) {
        cellClass += "bg-purple-600 text-white shadow-lg ";
      } else {
        cellClass += "bg-purple-100 text-purple-800 hover:bg-purple-200 ";
      }
    } else {
      cellClass += "bg-gray-100 text-gray-400 cursor-not-allowed ";
    }

    return { cellClass, isCheckIn, isCheckOut, isBetweenBooking };
  };

  if (isLoading) {
    return (
      <div className="glass-card p-8 text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full mx-auto mb-4"
        />
        <p className="text-gray-600">Loading real-time inventory...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Package Selection */}
      <div className="mb-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Package</h2>
          <p className="text-gray-600 mb-6">Select a package to see its specific availability calendar with real inventory levels</p>
        </div>

        {/* Package Type Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => {
              setSelectedPackageType('indoor');
              setSelectedProduct(null);
            }}
            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
              selectedPackageType === 'indoor'
                ? 'bg-purple-500 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-purple-50 border-2 border-purple-200'
            }`}
          >
            🏠 Indoor Glamping
          </button>
          <button
            onClick={() => {
              setSelectedPackageType('outdoor');
              setSelectedProduct(null);
            }}
            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
              selectedPackageType === 'outdoor'
                ? 'bg-green-500 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-green-50 border-2 border-green-200'
            }`}
          >
            🌲 Outdoor Glamping
          </button>
          <button
            onClick={() => {
              setSelectedPackageType('spa');
              setSelectedProduct(null);
            }}
            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
              selectedPackageType === 'spa'
                ? 'bg-pink-500 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-pink-50 border-2 border-pink-200'
            }`}
          >
            👑 Spa Party
          </button>
        </div>

        {/* Individual Package Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {getBasePackages().map((service) => {
            const isSelected = selectedProduct === service.id;
            
            // Calculate overall availability for this product across all dates
            const totalAvailableDates = bookingData.filter(booking => 
              booking.timeSlots.some(slot => slot.inventory[service.id] > 0)
            ).length;
            
            const availabilityPercentage = totalAvailableDates / bookingData.length;
            
            let availabilityStatus = 'high';
            if (availabilityPercentage < 0.3) availabilityStatus = 'low';
            else if (availabilityPercentage < 0.6) availabilityStatus = 'medium';
            
            return (
              <motion.button
                key={service.id}
                onClick={() => setSelectedProduct(service.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left relative ${
                  isSelected
                    ? 'border-purple-500 bg-purple-50 shadow-lg transform scale-105'
                    : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
                } ${service.id === 'spa-party-standalone' ? 'ring-2 ring-pink-200' : ''}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Special Spa Badge */}
                {service.id === 'spa-party-standalone' && (
                  <div className="absolute top-2 right-2">
                    <Crown className="w-6 h-6 text-pink-500" />
                  </div>
                )}

                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-800">{service.shortName}</h3>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${service.id === 'spa-party-standalone' ? 'text-pink-600' : 'text-purple-600'}`}>
                      ${service.price}
                    </div>
                    <div className={`text-xs font-medium ${
                      availabilityStatus === 'low' ? 'text-red-600' :
                      availabilityStatus === 'medium' ? 'text-orange-600' :
                      'text-green-600'
                    }`}>
                      {availabilityStatus === 'low' ? 'Limited Availability' :
                       availabilityStatus === 'medium' ? 'Moderate Availability' :
                       'Good Availability'}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                
                {/* Inventory Info */}
                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-600">Total Inventory:</span>
                    <span className="font-bold text-gray-800">{service.totalInventory} units</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-600">Available Dates:</span>
                    <span className="font-bold text-gray-800">{totalAvailableDates} of {bookingData.length}</span>
                  </div>
                </div>
                
                {/* Special Spa Note */}
                {service.id === 'spa-party-standalone' && (
                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 mb-3">
                    <p className="text-pink-800 text-xs font-medium">
                      ✨ Complete spa experience with all treatments, activities, and setup included!
                    </p>
                  </div>
                )}
                
                {/* Selection indicator */}
                {isSelected && (
                  <div className="flex items-center gap-2 text-purple-600">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">Selected - View Calendar Below</span>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {!selectedProduct && (
          <div className="text-center mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl max-w-2xl mx-auto">
            <AlertCircle className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
            <h3 className="font-bold text-yellow-800 mb-2">Select a Package First</h3>
            <p className="text-yellow-700">Choose a package above to see its specific availability calendar with real-time inventory and example bookings.</p>
          </div>
        )}
      </div>

      {/* Calendar and Booking - Only show when product is selected */}
      {selectedProduct && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Calendar Section */}
          <div className="lg:col-span-3 order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100"
            >
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-8">
                <motion.button
                  onClick={() => navigateMonths('prev')}
                  className="p-3 hover:bg-purple-50 rounded-xl transition-colors border border-purple-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-6 h-6 text-purple-600" />
                </motion.button>
                
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-purple-900">
                    {serviceOptions.find(s => s.id === selectedProduct)?.shortName} Calendar
                  </h2>
                  <p className="text-purple-600">Real-time availability with example bookings</p>
                </div>
                
                <motion.button
                  onClick={() => navigateMonths('next')}
                  className="p-3 hover:bg-purple-50 rounded-xl transition-colors border border-purple-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-6 h-6 text-purple-600" />
                </motion.button>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-8 mb-8 p-4 bg-purple-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-purple-100 rounded border border-purple-200"></div>
                  <span className="text-purple-800 font-medium">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gray-100 rounded border border-gray-200"></div>
                  <span className="text-gray-600 font-medium">Sold Out</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gray-200 rounded border border-gray-300"></div>
                  <span className="text-gray-600 font-medium">Booked Period</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-purple-600 rounded relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-0 h-0 border-l-[10px] border-l-purple-800 border-b-[10px] border-b-transparent"></div>
                  </div>
                  <span className="text-purple-800 font-medium">Check-In</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-purple-600 rounded relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-0 h-0 border-r-[10px] border-r-purple-800 border-b-[10px] border-b-transparent"></div>
                  </div>
                  <span className="text-purple-800 font-medium">Check-Out</span>
                </div>
              </div>

              {/* Multi-Month Calendar Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {getMonthsToShow().map((monthDate, monthIndex) => (
                  <div key={monthIndex} className="bg-gradient-to-b from-purple-50 to-white rounded-xl border border-purple-200 overflow-hidden">
                    {/* Month Header */}
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-center py-4">
                      <h3 className="font-bold text-lg">
                        {monthNames[monthDate.getMonth()]} {monthDate.getFullYear()}
                      </h3>
                    </div>

                    {/* Day Headers */}
                    <div className="grid grid-cols-7 bg-purple-100">
                      {dayNames.map((day) => (
                        <div key={day} className="p-3 text-center text-sm font-bold text-purple-800">
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-0">
                      {getDaysInMonth(monthDate).map((date, index) => {
                        if (!date) {
                          return <div key={index} className="h-12 border border-gray-100" />;
                        }

                        const booking = getBookingForDate(date);
                        const isToday = formatDate(date) === formatDate(new Date());
                        const isSelected = selectedDate === formatDate(date);
                        const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

                        // Check product-specific availability
                        const productAvailable = selectedProduct && booking?.timeSlots.some(slot => 
                          slot.inventory[selectedProduct] > 0
                        );

                        const { cellClass, isCheckIn, isCheckOut, isBetweenBooking } = getDateStyle(date, { available: productAvailable }, isSelected, isPast);

                        let finalCellClass = cellClass;
                        if (isToday && !isSelected) {
                          finalCellClass += "ring-2 ring-purple-400 ";
                        }

                        return (
                          <motion.button
                            key={index}
                            onClick={() => !isPast && !isBetweenBooking && productAvailable && handleDateSelect(date)}
                            disabled={isPast || !productAvailable || isBetweenBooking}
                            className={finalCellClass}
                            whileHover={productAvailable && !isPast && !isBetweenBooking ? { scale: 1.05 } : {}}
                            whileTap={productAvailable && !isPast && !isBetweenBooking ? { scale: 0.95 } : {}}
                          >
                            {date.getDate()}
                            
                            {/* Check-in corner triangle */}
                            {isCheckIn && (
                              <div className="absolute top-0 left-0 w-0 h-0 border-l-[12px] border-l-purple-800 border-b-[12px] border-b-transparent"></div>
                            )}
                            
                            {/* Check-out corner triangle */}
                            {isCheckOut && (
                              <div className="absolute top-0 right-0 w-0 h-0 border-r-[12px] border-r-purple-800 border-b-[12px] border-b-transparent"></div>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-center mt-8 gap-4">
                <button
                  onClick={() => navigateMonths('prev')}
                  className="px-8 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors shadow-lg"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => navigateMonths('next')}
                  className="px-8 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors shadow-lg"
                >
                  Next →
                </button>
              </div>
            </motion.div>

            {/* Time Selection */}
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-xl p-8 mt-8 border border-purple-100"
              >
                <h3 className="text-2xl font-bold text-purple-900 mb-6">Select Your Setup Time</h3>
                
                {/* Selected Date Display */}
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-6 h-6 text-purple-600" />
                    <span className="font-bold text-purple-900 text-lg">Selected Date</span>
                  </div>
                  <p className="text-purple-800 font-bold text-xl">
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
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-purple-600" />
                    <span className="font-bold text-purple-900 text-lg">Setup Time</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {bookingData.find(b => b.date === selectedDate)?.timeSlots.map((timeSlot) => {
                      const productAvailable = selectedProduct && timeSlot.inventory[selectedProduct] > 0;
                      const inventoryCount = selectedProduct ? timeSlot.inventory[selectedProduct] : 0;
                      
                      return (
                        <motion.label
                          key={timeSlot.time}
                          className={`block cursor-pointer ${
                            selectedTime === timeSlot.time 
                              ? 'ring-4 ring-purple-300' 
                              : productAvailable
                                ? 'hover:ring-2 hover:ring-purple-200'
                                : 'opacity-50 cursor-not-allowed'
                          }`}
                          whileHover={productAvailable ? { scale: 1.02 } : {}}
                          whileTap={productAvailable ? { scale: 0.98 } : {}}
                        >
                          <input
                            type="radio"
                            name="time"
                            value={timeSlot.time}
                            checked={selectedTime === timeSlot.time}
                            onChange={(e) => productAvailable && handleTimeSelect(e.target.value)}
                            disabled={!productAvailable}
                            className="sr-only"
                          />
                          <div className={`p-6 border-2 rounded-xl transition-all duration-300 ${
                            selectedTime === timeSlot.time
                              ? 'border-purple-500 bg-purple-50'
                              : productAvailable
                                ? 'border-gray-200 bg-white hover:border-purple-300'
                                : 'border-gray-200 bg-gray-50'
                          }`}>
                            <div className="text-center">
                              <span className="font-bold text-gray-900 text-lg block mb-2">{timeSlot.time}</span>
                              {!productAvailable ? (
                                <div className="text-sm text-red-600 font-medium">Sold Out</div>
                              ) : (
                                <div className="text-sm text-green-600 font-medium">
                                  {inventoryCount} available
                                </div>
                              )}
                              {selectedTime === timeSlot.time && (
                                <Check className="w-6 h-6 text-purple-600 mx-auto mt-2" />
                              )}
                            </div>
                          </div>
                        </motion.label>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Service Selection Sidebar */}
          <div className="lg:col-span-1 order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl p-6 sticky top-8 border border-purple-100"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  selectedProduct === 'spa-party-standalone' ? 'bg-pink-100' : 'bg-purple-100'
                }`}>
                  {selectedProduct === 'spa-party-standalone' ? (
                    <Crown className="w-8 h-8 text-pink-600" />
                  ) : (
                    <Sparkles className="w-8 h-8 text-purple-600" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  {selectedProduct === 'spa-party-standalone' ? 'Your Spa Experience' : 'Customize Your Package'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {selectedProduct === 'spa-party-standalone' 
                    ? 'Complete spa party with all treatments included'
                    : `Add extras to your ${serviceOptions.find(s => s.id === selectedProduct)?.shortName}`
                  }
                </p>
                {selectedDate && selectedTime && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs text-blue-700 font-medium">
                      {selectedTime} on {new Date(selectedDate).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>

              {/* Selected Base Package */}
              {selectedProduct && (
                <div className={`mb-6 p-4 rounded-lg border ${
                  selectedProduct === 'spa-party-standalone' 
                    ? 'bg-pink-50 border-pink-200' 
                    : 'bg-purple-50 border-purple-200'
                }`}>
                  <h4 className={`font-bold mb-2 ${
                    selectedProduct === 'spa-party-standalone' ? 'text-pink-900' : 'text-purple-900'
                  }`}>
                    {selectedProduct === 'spa-party-standalone' ? 'Your Spa Package' : 'Your Base Package'}
                  </h4>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{serviceOptions.find(s => s.id === selectedProduct)?.shortName}</span>
                    <span className={`font-bold ${
                      selectedProduct === 'spa-party-standalone' ? 'text-pink-600' : 'text-purple-600'
                    }`}>
                      ${serviceOptions.find(s => s.id === selectedProduct)?.price}
                    </span>
                  </div>
                  
                  {/* Real-time inventory for selected product */}
                  {selectedDate && selectedTime && (
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Available:</span>
                        <span className="font-bold text-green-600">
                          {getAvailableInventory(selectedProduct)} units
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Special Spa Package Details */}
                  {selectedProduct === 'spa-party-standalone' && (
                    <div className="mt-3 pt-3 border-t border-pink-200">
                      <p className="text-pink-800 text-xs">
                        ✨ Includes: Professional spa setup, kid-safe treatments, relaxing activities, themed decorations, and complete cleanup
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Add-ons (only show if not standalone spa) */}
              {selectedProduct !== 'spa-party-standalone' && (
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-600" />
                    Add-ons
                  </h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {getFilteredServices().filter(s => s.category === 'addon').slice(0, 5).map((service) => {
                      const inventory = getInventoryStatus(service.id);
                      const currentQuantity = selectedServices[service.id] || 0;
                      const canAdd = canAddService(service);
                      
                      return (
                        <div
                          key={service.id}
                          className={`p-2 border rounded-lg transition-all duration-200 hover:border-pink-300 border-gray-200 ${service.id === 'spa-party-addon' ? 'ring-2 ring-green-200 bg-green-50' : ''}`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="font-medium text-gray-800 text-xs flex items-center gap-2">
                                {service.shortName}
                                {service.id === 'spa-party-addon' && (
                                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                    Save $75!
                                  </span>
                                )}
                              </div>
                              <div className={`font-bold text-sm ${service.id === 'spa-party-addon' ? 'text-green-600' : 'text-pink-600'}`}>
                                ${service.price}
                              </div>
                              
                              {/* Individual Product Inventory */}
                              {selectedDate && selectedTime && (
                                <div className="mt-1 flex items-center gap-1">
                                  <Package className="w-3 h-3 text-gray-500" />
                                  <span className={`text-xs font-medium ${
                                    inventory.status === 'none' ? 'text-red-600' :
                                    inventory.status === 'low' ? 'text-orange-600' :
                                    'text-green-600'
                                  }`}>
                                    {inventory.status === 'none' ? 'Sold Out' :
                                     inventory.status === 'low' ? `${inventory.available} left` :
                                     `${inventory.available} available`}
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => handleServiceQuantityChange(service.id, -1)}
                                disabled={!currentQuantity || !canAdd}
                                className="w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 flex items-center justify-center"
                              >
                                <Minus className="w-2 h-2" />
                              </button>
                              <span className="w-4 text-center text-xs font-medium">
                                {currentQuantity}
                              </span>
                              <button
                                onClick={() => handleServiceQuantityChange(service.id, 1)}
                                disabled={currentQuantity >= Math.min(service.maxQuantity || 1, inventory.available) || !canAdd}
                                className="w-5 h-5 rounded-full bg-pink-200 hover:bg-pink-300 disabled:opacity-50 flex items-center justify-center"
                              >
                                <Plus className="w-2 h-2" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Package Summary */}
              {selectedProduct && (
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-800 mb-3">Summary</h4>
                  <div className="space-y-1 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>{serviceOptions.find(s => s.id === selectedProduct)?.shortName}</span>
                      <span className="font-medium">${serviceOptions.find(s => s.id === selectedProduct)?.price}</span>
                    </div>
                    {getSelectedServicesList().map((service) => (
                      <div key={service.id} className="flex justify-between text-sm">
                        <span>{service.shortName} {service.quantity > 1 && `(×${service.quantity})`}</span>
                        <span className="font-medium">${service.price * service.quantity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className={selectedProduct === 'spa-party-standalone' ? 'text-pink-700' : 'text-purple-700'}>
                        ${(serviceOptions.find(s => s.id === selectedProduct)?.price || 0) + calculateTotal()}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Book Now Button */}
              {selectedTime && selectedProduct && (
                <motion.button
                  onClick={handleBookingConfirm}
                  className={`w-full font-bold py-4 rounded-xl mt-6 transition-all duration-300 shadow-lg ${
                    selectedProduct === 'spa-party-standalone'
                      ? 'bg-gradient-to-r from-pink-600 to-pink-700 text-white hover:from-pink-700 hover:to-pink-800'
                      : 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    {selectedProduct === 'spa-party-standalone' ? (
                      <Crown className="w-5 h-5" />
                    ) : (
                      <Sparkles className="w-5 h-5" />
                    )}
                    Book Now - ${(serviceOptions.find(s => s.id === selectedProduct)?.price || 0) + calculateTotal()}
                  </span>
                </motion.button>
              )}

              {/* Product-Specific Inventory Notice */}
              {selectedTime && selectedProduct && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Package className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-800">
                      <p className="font-medium mb-1">Real-Time Inventory</p>
                      <p>This calendar shows live availability for {serviceOptions.find(s => s.id === selectedProduct)?.shortName}. Each package has independent inventory tracking with realistic booking patterns.</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarBooking;