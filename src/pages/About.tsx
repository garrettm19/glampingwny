import React from 'react';
import { Heart, Users, Shield, Star } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Family First',
      description: 'We believe in creating experiences that bring families together and create lasting memories.'
    },
    {
      icon: Shield,
      title: 'Safety & Quality',
      description: 'Every piece of equipment is thoroughly cleaned and safety-checked before each event.'
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'We work closely with each family to create the perfect experience for their celebration.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We go above and beyond to ensure every detail contributes to a magical experience.'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Glamping WNY
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating unforgettable glamping experiences for families across Western New York
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Founded in 2021, Glamping WNY was born from a simple vision: to create unforgettable 
                experiences that bring families together and make every celebration extra special.
              </p>
              <p>
                Whether it's a child's birthday party, a family anniversary celebration, or a fun 
                sleepover with cousins, we believe every family moment deserves to be extraordinary.
              </p>
              <p>
                We're a family-owned business that understands the importance of creating magical 
                memories. From our home base in Hamburg, NY, we serve families throughout the 
                Buffalo Metro Area with professional glamping experiences.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600&h=400&fit=crop"
              alt="Glamping setup"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at Glamping WNY
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-700">Happy Families</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700">Theme Options</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5★</div>
              <div className="text-gray-700">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;