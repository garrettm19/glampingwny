'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Users, MessageSquare, Send } from 'lucide-react';

const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    guests: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Book Your <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to create unforgettable memories? Let's get started with your perfect glamping experience.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Quick Booking Form</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="(716) 555-1234"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Select Service</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Choose your experience...</option>
                      <option value="outdoor-glamping">Outdoor Glamping</option>
                      <option value="teepee-sleepovers">Teepee Sleepovers</option>
                      <option value="spa-party">Spa Party</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Preferred Date</label>
                    <input 
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Number of Guests</label>
                    <select 
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select guest count...</option>
                      <option value="1-5">1-5 guests</option>
                      <option value="6-10">6-10 guests</option>
                      <option value="11-15">11-15 guests</option>
                      <option value="16+">16+ guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Special Requests</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all h-32 resize-none"
                    placeholder="Tell us about your special occasion, theme preferences, or any special requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 group"
                >
                  <span className="flex items-center justify-center">
                    <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Get Quote & Check Availability
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">(716) 555-1234</div>
                    <div className="text-gray-600">Call or text us anytime</div>
                  </div>
                </div>

                <div className="flex items-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">reservations@glampingwny.com</div>
                    <div className="text-gray-600">Email us your questions</div>
                  </div>
                </div>

                <div className="flex items-center bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">Hamburg, NY 14075</div>
                    <div className="text-gray-600">Serving Western New York</div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-4 text-xl">Why Choose GlampingWNY?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Professional setup and cleanup included
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    25+ customizable themes available
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    All ages welcome - family-friendly
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    FREE delivery within 20 miles
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    200+ satisfied families
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;