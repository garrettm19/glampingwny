import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Star, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Create Magic Together
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to plan your perfect glamping experience? Holly and Joe are here to help 
            make your celebration unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Experience</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="(716) 555-1234"
                  />
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select event type</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="sleepover">Sleepover</option>
                    <option value="bachelorette">Bachelorette Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="proposal">Romantic Proposal</option>
                    <option value="graduation">Graduation</option>
                    <option value="family">Family Night</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select guest count</option>
                    <option value="1-4">1-4 guests</option>
                    <option value="5-8">5-8 guests</option>
                    <option value="9-12">9-12 guests</option>
                    <option value="13+">13+ guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your event
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your celebration, preferred themes, special requests, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message & Get Quote
              </button>

              <p className="text-sm text-gray-600 text-center">
                We typically respond within 24 hours with availability and pricing
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Call or Text</h3>
                  <p className="text-gray-600 text-lg">(716) 200-7692</p>
                  <p className="text-sm text-gray-500">Available 7 days a week</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">reservations@glampingwny.com</p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Service Area</h3>
                  <p className="text-gray-600">Western New York</p>
                  <p className="text-sm text-gray-500">Based in Hamburg, NY 14075</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Setup & Pickup</h3>
                  <p className="text-gray-600">Setup by 4 PM</p>
                  <p className="text-sm text-gray-500">Pickup after 10 AM next day</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Heart className="w-5 h-5 text-red-500 mr-2" />
                Why Families Choose Us
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  200+ happy families served since 2021
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  Professional setup & cleanup included
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  25+ customizable themes available
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  All ages welcome (5+ years)
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  FREE delivery within 20 miles
                </li>
              </ul>
            </div>

            {/* Delivery Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Delivery Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Within 20 miles of Hamburg, NY:</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>21-31 miles:</span>
                  <span className="font-semibold">$50</span>
                </div>
                <div className="flex justify-between">
                  <span>32-42 miles:</span>
                  <span className="font-semibold">$100</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Serving Buffalo, Cheektowaga, West Seneca, Orchard Park, East Aurora, 
                Lancaster, Williamsville, Amherst, and surrounding areas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;