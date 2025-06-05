import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import BookingForm from '../components/ui/BookingForm';
import PricingTable from '../components/ui/PricingTable';
import { Star, Calendar, Shield, MapPin, Info } from 'lucide-react';

const BookingPage: React.FC = () => {
  const handleBookingSubmit = (formData: any) => {
    console.log('Booking submitted:', formData);
    // Handle form submission
  };

  return (
    <>
      <Helmet>
        <title>Book Your Glamping Experience | Indoor & Outdoor Options</title>
        <meta 
          name="description" 
          content="Book your magical glamping experience with Glamping WNY. Choose from indoor or outdoor options, customize with add-ons, and create unforgettable memories." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <span 
              key={i}
              className="sparkle-dot"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Experience</h1>
            <p className="text-xl text-white/90">
              Choose from our indoor or outdoor glamping options and create magical memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Information */}
            <div className="space-y-8">
              {/* Service Types */}
              <div className="glass-card p-6">
                <h2 className="text-2xl font-bold text-primary-900 mb-6">
                  Choose Your Experience
                </h2>
                
                {/* Indoor Option */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">
                    Indoor Glamping
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-accent-500 mt-1" />
                      <span>Available year-round</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-accent-500 mt-1" />
                      <span>Each tent is approximately 4ft wide x 7ft long</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-accent-500 mt-1" />
                      <span>Perfect for sleepovers and parties</span>
                    </li>
                  </ul>
                </div>

                {/* Outdoor Option */}
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">
                    Outdoor Glamping
                  </h3>
                  <div className="bg-primary-50 p-4 rounded-lg mb-4">
                    <p className="text-primary-900 font-medium">
                      Coming Spring/Summer 2025! 🌟
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-accent-500 mt-1" />
                      <span>16ft Bell Tent (2-6 glampers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-accent-500 mt-1" />
                      <span>23ft Bell Tent (7-12 glampers)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pricing Table */}
              <PricingTable />

              {/* Important Notes */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-4">
                  Important Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary-600 mt-1" />
                    <p className="text-gray-700">
                      Setup is no later than 4pm & cleanup is after 10am the next day
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary-600 mt-1" />
                    <p className="text-gray-700">
                      All equipment is thoroughly sanitized between uses
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <p className="text-gray-700">
                      Free delivery within 20 miles of Hamburg, NY (14075)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary-600 mt-1" />
                    <p className="text-gray-700">
                      Minimum age requirement: 5 years old
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div>
              <BookingForm onSubmit={handleBookingSubmit} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;