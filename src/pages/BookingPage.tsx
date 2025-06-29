import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import CalendarBooking from '../components/ui/CalendarBooking';
import BookingForm from '../components/ui/BookingForm';
import { Star, Calendar, Shield, MapPin, Info, Clock, Users, Sparkles, Check, ArrowLeft, Heart, Award } from 'lucide-react';

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
        <title>Book Your Family Glamping Experience | Real-Time Availability | Glamping WNY</title>
        <meta name="description" content="Book your luxury family glamping experience with real-time availability. Choose your date, select your services, and create unforgettable memories in the Buffalo Metro Area." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-lavender-400 via-lavender-500 to-lavender-600 relative overflow-hidden">
        {/* Gentle floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
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
            className="max-w-4xl mx-auto text-center text-white"
          >
            {/* Step Indicator */}
            <div className="flex justify-center items-center gap-4 mb-8">
              {[
                { step: 'calendar', label: 'Select Services & Date', icon: Calendar },
                { step: 'details', label: 'Your Details', icon: Users },
                { step: 'confirmation', label: 'Confirmation', icon: Check }
              ].map((item, index) => (
                <div key={item.step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    bookingStep === item.step 
                      ? 'bg-white text-lavender-600' 
                      : bookingComplete && index < 2
                        ? 'bg-green-500 text-white'
                        : 'bg-white/20 text-white'
                  }`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="ml-2 text-sm font-medium hidden sm:block text-white">{item.label}</span>
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

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {bookingStep === 'calendar' && 'Build Your Perfect Package 🎉'}
              {bookingStep === 'details' && 'Tell Us About Your Celebration 📝'}
              {bookingStep === 'confirmation' && '🎉 Booking Confirmed!'}
            </h1>
            
            <p className="text-xl text-white/90 mb-8">
              {bookingStep === 'calendar' && 'Select your services, choose your date, and see real-time availability'}
              {bookingStep === 'details' && 'Just a few more details to make your experience perfect'}
              {bookingStep === 'confirmation' && 'Your magical family glamping experience is all set!'}
            </p>
            
            {/* Quick Stats */}
            {bookingStep === 'calendar' && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: Calendar, label: 'Real-Time Availability', desc: 'See exactly what dates are open' },
                  { icon: Sparkles, label: 'All Services Available', desc: 'Indoor, outdoor, spa, and add-ons' },
                  { icon: Shield, label: 'Secure Booking', desc: 'Your information is protected' },
                  { icon: Award, label: '200+ Happy Families', desc: 'Join our satisfied customers' }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-center rounded-xl"
                  >
                    <feature.icon className="w-8 h-8 mx-auto mb-2 text-white" />
                    <h3 className="font-bold text-white mb-1 text-sm">{feature.label}</h3>
                    <p className="text-xs text-white/80">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Service Area Banner */}
      <section className="py-6 bg-sage-50 border-b border-sage-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-sage-600" />
              <span className="font-bold text-sage-800">Proudly Servicing the Buffalo Metro Area</span>
            </div>
            <p className="text-sage-700">
              <strong>FREE delivery within 20 miles of Hamburg, NY (14075)</strong> • 
              Extended delivery: 21-31 miles ($50) • 32-42 miles ($100)
            </p>
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
                    className="inline-flex items-center gap-2 text-lavender-600 hover:text-lavender-700 font-medium"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Package Selection
                  </button>
                </div>

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
                className="max-w-3xl mx-auto text-center"
              >
                <div className="bg-white border border-lavender-200 rounded-xl p-8 shadow-lg">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-10 h-10 text-green-600" />
                  </motion.div>

                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Your Family Glamping Experience is Confirmed! 🎉
                  </h2>
                  
                  <p className="text-gray-600 mb-8">
                    We're so excited to create magic for your special family celebration! 
                    You'll receive a confirmation email with all the details shortly.
                  </p>

                  {selectedBooking && (
                    <div className="bg-lavender-50 rounded-lg p-6 mb-8">
                      <h3 className="font-bold text-gray-800 mb-4">Booking Details</h3>
                      <div className="space-y-3 text-left max-w-md mx-auto">
                        {selectedBooking.date && (
                          <div className="flex justify-between">
                            <span className="text-gray-700">Date:</span>
                            <span className="font-medium text-gray-800">
                              {new Date(selectedBooking.date).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                        {selectedBooking.time && (
                          <div className="flex justify-between">
                            <span className="text-gray-700">Setup Time:</span>
                            <span className="font-medium text-gray-800">{selectedBooking.time}</span>
                          </div>
                        )}
                        {selectedBooking.services && (
                          <div className="border-t border-lavender-200 pt-3">
                            <div className="space-y-1">
                              {selectedBooking.services.map((service: any, index: number) => (
                                <div key={index} className="flex justify-between text-sm">
                                  <span className="text-gray-700">{service.name} {service.quantity > 1 && `(×${service.quantity})`}</span>
                                  <span className="text-gray-800">${service.price * service.quantity}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {selectedBooking.total && (
                          <div className="flex justify-between font-bold text-lg border-t border-lavender-200 pt-3">
                            <span className="text-gray-800">Total:</span>
                            <span className="text-lavender-700">${selectedBooking.total}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <button className="btn btn-outline border-lavender-200 text-lavender-600 hover:bg-lavender-50">
                      <Calendar className="w-5 h-5 mr-2" />
                      Add to Calendar
                    </button>
                    <button className="btn btn-primary bg-lavender-500 hover:bg-lavender-600">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Download Confirmation
                    </button>
                  </div>

                  {/* What's Next */}
                  <div className="bg-blue-50 rounded-lg p-6 text-left">
                    <h4 className="font-bold text-blue-800 mb-3">What Happens Next?</h4>
                    <div className="space-y-2 text-blue-700 text-sm">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>You'll receive a confirmation email within 15 minutes</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>We'll contact you 1 week before to confirm setup details</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Setup arrives by 4pm on your event date</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Cleanup happens after 10am the next day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Information Cards - Only show on calendar step */}
      {bookingStep === 'calendar' && (
        <section className="section bg-cream-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Everything You Need to Know</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">Important information about your family glamping experience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: Clock, 
                  title: "Setup & Pickup", 
                  description: "Setup by 4 PM, pickup after 10 AM next day", 
                  color: "bg-lavender-100 text-lavender-600" 
                },
                { 
                  icon: MapPin, 
                  title: "Service Area", 
                  description: "Free delivery within 20 miles of Hamburg, NY", 
                  color: "bg-sage-100 text-sage-600" 
                },
                { 
                  icon: Users, 
                  title: "All Ages Welcome", 
                  description: "Perfect for kids, teens, and adults (5+ years)", 
                  color: "bg-cream-100 text-cream-600" 
                },
                { 
                  icon: Shield, 
                  title: "Safety First", 
                  description: "All equipment sanitized between uses", 
                  color: "bg-lavender-100 text-lavender-600" 
                }
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{info.title}</h3>
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