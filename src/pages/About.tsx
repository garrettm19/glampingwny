import React from 'react';
import { Heart, Users, Shield, Star, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Family First',
      description: 'We believe in creating experiences that bring families together and create lasting memories for all ages.'
    },
    {
      icon: Shield,
      title: 'Safety & Quality',
      description: 'Every piece of equipment is thoroughly cleaned with hypoallergenic detergent and safety-checked before each event.'
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'Holly and Joe work closely with each family to create the perfect experience for their celebration.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We go above and beyond to ensure every detail contributes to a magical, stress-free experience.'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet Holly, the founder of Glamping WNY, and learn how we're creating unforgettable 
            glamping experiences for families across Western New York.
          </p>
        </div>

        {/* Founder Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Holly</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Hi there! I'm Holly, the founder of Glamping WNY and a small-town business owner 
                with big dreams for creating magical family memories. When I'm not setting up 
                enchanting glamping experiences, you can find me working as a Product Manager at 
                Independent Health.
              </p>
              <p>
                I launched Glamping WNY in 2021 with a simple vision: to bring luxury sleepovers 
                and bell tent glamping straight to your doorstep. Whether it's a child's birthday 
                party, a romantic proposal, or a family celebration, I believe every moment 
                deserves to be extraordinary.
              </p>
              <p>
                When I'm not creating magical experiences for amazing families like yours, you can 
                find me enjoying DIY projects, staying active with fitness adventures, or spending 
                time with my dogs. I'm often accompanied by my husband Joe during setups - we're 
                a true family business!
              </p>
              <p className="font-semibold text-blue-600">
                "I'm passionate about creating memorable moments that people will treasure forever. 
                Every tent we set up is a new opportunity to bring joy and wonder to a family's special day."
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=400&fit=crop"
              alt="Holly - Founder of Glamping WNY"
              className="rounded-lg shadow-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Holly - Founder & Chief Experience Creator</p>
              <p className="text-xs text-gray-500">Product Manager at Independent Health • Dog Mom • Adventure Seeker</p>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at Glamping WNY as we serve families 
              throughout Western New York.
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

        {/* Company Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2021 - The Beginning</h3>
                  <p className="text-gray-700">
                    Holly founded Glamping WNY with a passion for creating magical family experiences. 
                    Starting from Hamburg, NY, we began serving the Buffalo Metro Area with luxury 
                    glamping delivered right to your doorstep.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2022-2023 - Growing Our Family</h3>
                  <p className="text-gray-700">
                    We expanded our services to include outdoor bell tents, spa parties, and over 25 
                    themed experiences. Joe joined the team full-time, making us a true family business 
                    serving families throughout Western New York.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2024 - 200+ Happy Families</h3>
                  <p className="text-gray-700">
                    Today, we're proud to have served over 200 families with magical glamping experiences. 
                    From birthday parties to romantic proposals, we continue to create unforgettable 
                    memories across the Buffalo Metro Area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-50 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-700">Happy Families Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700">Theme Options</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-700">Years of Magic</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5★</div>
              <div className="text-gray-700">Customer Rating</div>
            </div>
          </div>
        </div>

        {/* Service Area */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-blue-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900">Proudly Serving Western New York</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Based in Hamburg, NY 14075, we bring magical glamping experiences throughout the Buffalo Metro Area
            </p>
            <p className="text-sm text-gray-600">
              FREE delivery within 20 miles • Extended delivery available up to 42 miles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;