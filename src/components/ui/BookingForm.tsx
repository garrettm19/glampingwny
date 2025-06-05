import React, { useState } from 'react';
import { Calendar, Clock, Users, Info } from 'lucide-react';

interface BookingFormProps {
  className?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    specialRequirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 ${className}`}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Make a Reservation</h2>
      
      <div className="space-y-4">
        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <Calendar className="w-5 h-5 mr-2" />
            <span>Date</span>
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <Clock className="w-5 h-5 mr-2" />
            <span>Time</span>
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <Users className="w-5 h-5 mr-2" />
            <span>Number of Guests</span>
          </label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max="10"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <Info className="w-5 h-5 mr-2" />
            <span>Special Requirements</span>
          </label>
          <textarea
            name="specialRequirements"
            value={formData.specialRequirements}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Book Now
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        * Bookings are subject to availability. We'll confirm your reservation within 24 hours.
      </p>
    </form>
  );
};

export default BookingForm;