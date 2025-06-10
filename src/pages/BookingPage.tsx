import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import CalendarBooking from '../components/ui/CalendarBooking';
import BookingForm from '../components/ui/BookingForm';
import { Star, Calendar, Shield, MapPin, Info, Clock, Users, Sparkles, Check, ArrowLeft } from 'lucide-react';

const BookingPage: React.FC = () => {
  const [bookingStep, setBookingStep] = useState<'calendar' | 'details' | 'confirmation'>('calendar');
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [bookingComplete, setBookingComplete] = useState(false);

  const handleCalendarSelection = (booking: any) => {
    setSelectedBooking(booking);
    setBookingStep('details');
  };

  const handleFormSubmit = (formData: any) => {
    // Combine calendar selection with form data
    const completeBooking = {
      ...selectedBooking,
      ...formData
    };
    
    console.log('Complete booking:', completeBooking);
    setBookingComplete(true);
    setBookingStep('confirmation');
  };

  const handleBackToCalendar = () => {
    setBookingStep('calendar');
    setSelectedBooking(null);
  };

  return (
    <>
      <Helmet>
        <title>Book Your Glamping Experience | Real-Time Availability</title>
        <meta name="description" content="Book your luxury glamping experience with real-time availability. Choose your date, select your package, and create unforgettable memories." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 1.2, 1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Step Indicator */}
            <div className="flex justify-center items-center gap-4 mb-8">
              {[
                { step: 'calendar', label: 'Select Date', icon: Calendar },
                { step: 'details', label: 'Your Details', icon: Users },
                { step: 'confirmation', label: 'Confirmation', icon: Check }
              ].map((item, index) => (
                <div key={item.step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    bookingStep === item.step 
                      ? 'bg-white text-primary-900' 
                      : bookingComplete && index < 2
                        ? 'bg-green-500 text-white'
                        : 'bg-white/20 text-white'
                  }`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="ml-2 text-sm font-medium hidden sm:block">{item.label}</span>
                  {index < 2 && (
                    <div className={`w-8 h-0.5 mx-4 ${
                      (bookingStep === 'details' && index === 0) || 
                      (bookingStep === 'confirmation' && index <= 1) ||
                      bookingComplete
                        ? 'bg-white' 
                        : 'bg-white/20'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {bookingStep === 'calendar' && 'Choose Your Perfect Date'}
              {bookingStep === 'details' && 'Tell Us About Your Celebration'}
              {bookingStep === 'confirmation' && '🎉 Booking Confirmed!'}
            </h1>
            
            <p className="text-xl text-white/90 mb-8">
              {bookingStep === 'calendar' && 'Real-time availability • Instant confirmation • Best price guaranteed'}
              {bookingStep === 'details' && 'Just a few more details to make your experience perfect'}
              {bookingStep === 'confirmation' && 'Your magical glamping experience is all set!'}
            </p>
            
            {/* Quick Stats */}
            {bookingStep === 'calendar' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Calendar, label: 'Real-Time Availability', desc: 'See exactly what dates are open' },
                  { icon: Sparkles, label: 'Instant Confirmation', desc: 'Book now, celebrate later' },
                  { icon: Shield, label: 'Secure Booking', desc: 'Your information is protected' }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="glass-card p-4 text-center"
                  >
                    <feature.icon className="w-8 h-8 mx-auto mb-2 text-accent-400" />
                    <h3 className="font-bold text-white mb-1">{feature.label}</h3>
                    <p className="text-sm text-white/80">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Booking Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {bookingStep === 'calendar' && (
              <motion.div
                key="calendar"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <CalendarBooking onBookingSelect={handleCalendarSelection} />
              </motion.div>
            )}

            {bookingStep === 'details' && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Back Button */}
                <div className="mb-6">
                  <button
                    onClick={handleBackToCalendar}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Calendar
                  </button>
                </div>

                {/* Selected Booking Summary */}
                {selectedBooking && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-6 mb-8"
                  >
                    <h3 className="text-lg font-bold text-primary-900 mb-4">Your Selection</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div>
                        <Calendar className="w-6 h-6 mx-auto mb-2 text-primary-600" />
                        <p className="font-medium text-primary-900">
                          {new Date(selectedBooking.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <div>
                        <Clock className="w-6 h-6 mx-auto mb-2 text-primary-600" />
                        <p className="font-medium text-primary-900">{selectedBooking.time}</p>
                      </div>
                      <div>
                        <Sparkles className="w-6 h-6 mx-auto mb-2 text-primary-600" />
                        <p className="font-medium text-primary-900">${selectedBooking.price}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <BookingForm 
                  onSubmit={handleFormSubmit}
                  preselectedData={selectedBooking}
                />
              </motion.div>
            )}

            {bookingStep === 'confirmation' && (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl mx-auto text-center"
              >
                <div className="glass-card p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-10 h-10 text-green-600" />
                  </motion.div>

                  <h2 className="text-3xl font-bold text-primary-900 mb-4">
                    Your Glamping Experience is Confirmed!
                  </h2>
                  
                  <p className="text-gray-600 mb-8">
                    We're so excited to create magic for your special celebration! 
                    You'll receive a confirmation email with all the details shortly.
                  </p>

                  {selectedBooking && (
                    <div className="bg-primary-50 rounded-lg p-6 mb-8">
                      <h3 className="font-bold text-primary-900 mb-4">Booking Details</h3>
                      <div className="space-y-2 text-left">
                        <div className="flex justify-between">
                          <span>Date:</span>
                          <span className="font-medium">
                            {new Date(selectedBooking.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time:</span>
                          <span className="font-medium">{selectedBooking.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Package:</span>
                          <span className="font-medium">{selectedBooking.package}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg border-t pt-2">
                          <span>Total:</span>
                          <span className="text-primary-700">${selectedBooking.price}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="btn btn-outline">
                      <Calendar className="w-5 h-5 mr-2" />
                      Add to Calendar
                    </button>
                    <button className="btn btn-primary">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Download Confirmation
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Information Cards - Only show on calendar step */}
      {bookingStep === 'calendar' && (
        <section className="section bg-primary-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Everything You Need to Know</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">Important information about your glamping experience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Clock, title: "Setup & Pickup", description: "Setup by 4 PM, pickup after 10 AM next day", color: "bg-blue-50 text-blue-600" },
                { icon: MapPin, title: "Service Area", description: "Free delivery within 20 miles of Hamburg, NY", color: "bg-green-50 text-green-600" },
                { icon: Users, title: "All Ages Welcome", description: "Perfect for kids, teens, and adults", color: "bg-purple-50 text-purple-600" },
                { icon: Shield, title: "Safety First", description: "All equipment sanitized between uses", color: "bg-orange-50 text-orange-600" }
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center hover-lift"
                >
                  <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-primary-900 mb-2">{info.title}</h3>
                  <p className="text-gray-700 text-sm">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BookingPage;