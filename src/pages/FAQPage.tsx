import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import FAQAccordion from '../components/ui/FAQAccordion';
import { MessageCircle, Clock, MapPin, Bed, Sun, CreditCard, CloudLightning, Shield, Dog, Calendar, Users, Monitor, HelpCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('booking');

  const faqCategories = [
    {
      id: 'booking',
      title: "Booking & Scheduling",
      icon: Calendar,
      color: "bg-blue-50 text-blue-600",
      questions: [
        {
          question: "When do you set up and pick up?",
          answer: "Your set up + clean up times may vary due to your location & various factors, but you can expect us to arrive for set up no later than 4pm & return to clean up sometime after 10am. We will outreach one week prior to your reservation with an estimated time of arrival."
        },
        {
          question: "How long can we keep the tents?",
          answer: "Our standard package is for a one night rental with the option to add additional nights, if available."
        },
        {
          question: "Can I reserve multiple tents and/or multiple nights?",
          answer: "Yes, depending on availability. Contact us to discuss your specific needs and we'll work with you to create the perfect setup."
        },
        {
          question: "Is there an age requirement?",
          answer: "We ask that all guests be 5 and over for safety reasons and to ensure everyone can fully enjoy the experience."
        },
        {
          question: "Do you stay and host the party?",
          answer: "We don't stay and host the party, but we ensure everything is set up just as you need it. You'll have complete privacy to enjoy your celebration."
        }
      ]
    },
    {
      id: 'delivery',
      title: "Delivery & Setup",
      icon: MapPin,
      color: "bg-green-50 text-green-600",
      questions: [
        {
          question: "Is delivery included?",
          answer: "We offer delivery, setup, and cleanup at no extra charge if you are within a 20-mile radius of Hamburg, New York (14075). Anything outside of 20 miles will have an additional travel fee."
        },
        {
          question: "How to prepare the space?",
          answer: "We'll provide you with a detailed checklist specific to your package type before your event. This includes space requirements, access needs, and any preparation steps to ensure smooth setup."
        },
        {
          question: "What space do I need for setup?",
          answer: "Space requirements vary by package. Indoor setups need approximately 4ft x 7ft per tent. Outdoor bell tents require 20ft x 20ft (16ft tent) or 26ft x 26ft (23ft tent) of flat, stakeable ground."
        }
      ]
    },
    {
      id: 'amenities',
      title: "Amenities & Equipment",
      icon: Bed,
      color: "bg-purple-50 text-purple-600",
      questions: [
        {
          question: "How does bedding work?",
          answer: "For both our outdoor glamping and indoor glamping experience, we provide a standard bed sheet, pillows, and light décor blanket for each bed. All bedding is freshly laundered before each event."
        },
        {
          question: "How does the theater experience work?",
          answer: "Our theater comes with a screen and wireless projector that connects to your home wi-fi to stream Netflix, Hulu, etc. You can also connect to a computer with the included HDMI to show content from your own device."
        },
        {
          question: "What's included in each package?",
          answer: "Each package includes complete setup, themed decorations, comfortable bedding, ambient lighting, and full cleanup. Specific amenities vary by package - check our services page for detailed inclusions."
        }
      ]
    },
    {
      id: 'safety',
      title: "Safety & Cleanliness",
      icon: Shield,
      color: "bg-orange-50 text-orange-600",
      questions: [
        {
          question: "How are the tents and bedding cleaned?",
          answer: "All décor linens are washed with a fragrance free hypoallergenic detergent after each use. Trays and other accessories are cleaned and disinfected. We maintain the highest standards of cleanliness for your family's safety."
        },
        {
          question: "What if severe weather is expected?",
          answer: "The Outdoor Bell Tent canvas is 100% rainproof. If light rain is expected, we will set up your outdoor glamping experience as normal; we will not accept cancellations for rain. In the event that severe wind or lightning is predicted, we reserve the right to cancel your reservation with a full refund. We don't want to risk putting any of our guests in danger or damage our tents."
        },
        {
          question: "Are your setups safe for children?",
          answer: "Absolutely! All our equipment is designed with safety in mind. We use child-safe materials, secure all structures properly, and provide safety guidelines. Adult supervision is always recommended during events."
        }
      ]
    },
    {
      id: 'policies',
      title: "Policies & Payments",
      icon: CreditCard,
      color: "bg-red-50 text-red-600",
      questions: [
        {
          question: "Can I cancel my reservation?",
          answer: "Life happens, plans change. We totally get it! If your plans change and you wish to cancel for any reason at all, contact us no later than 14 days of your booking date to receive a full refund. There are no refunds for any cancellation less than 14 days before the booking date, however the full amount paid can be applied to a different date."
        },
        {
          question: "Do you accept tips?",
          answer: "We sincerely appreciate your recognition of the hard work and love that goes into our setups! While tipping is not expected, any gratuities received will be shared with our amazing glamping team who assisted with the setup and cleanup. Thank you for your kind appreciation and generosity!"
        },
        {
          question: "What's your payment schedule?",
          answer: "We require a 50% deposit to secure your booking, with the remaining balance due 7 days before your event. We accept all major credit cards and digital payments for your convenience."
        }
      ]
    },
    {
      id: 'pets',
      title: "Pet-Friendly Options",
      icon: Dog,
      color: "bg-yellow-50 text-yellow-600",
      questions: [
        {
          question: "Can we bring our pets?",
          answer: "We are pet friendly, however your pets must be very well behaved. If your pets like to chase wildlife, the bell tent will NOT contain them in the tents. Pets should never be left unattended in the tent. Any damages due to pet or human alike, are subject to damage charges. Please notify us if you will be having your furry friends join you. The pet fee is $20 for the first pet and $30 for the second. Maximum is 2 pets."
        },
        {
          question: "What should I know about pets and outdoor setups?",
          answer: "For outdoor bell tents, pets should be leashed or closely supervised as the tents are not fully enclosed. We recommend bringing familiar bedding for your pets and ensuring they're comfortable with new environments before your event."
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.title }))
  );

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Glamping WNY Family Experiences</title>
        <meta name="description" content="Find answers to common questions about our family glamping experiences. Learn about booking, setup, safety, weather policies, and more for your perfect celebration." />
        
        {/* FAQ Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": allQuestions.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              initial={{ opacity: 0 }}
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
            <div className="inline-block p-3 bg-white/20 rounded-full mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions 🤔
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Everything you need to know about creating magical family memories with Glamping WNY.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-white/80">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24hr</div>
                <div className="text-sm text-white/80">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white/80">Family Safe</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm md:text-base ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          {faqCategories.map((category) => (
            <motion.div
              key={category.id}
              className={`${activeCategory === category.id ? 'block' : 'hidden'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className={`inline-block p-4 ${category.color} rounded-full mb-6`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {category.title}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {category.id === 'booking' && "Everything about reserving your magical family experience"}
                  {category.id === 'delivery' && "Setup, delivery, and space preparation details"}
                  {category.id === 'amenities' && "What's included in your glamping experience"}
                  {category.id === 'safety' && "Our commitment to family safety and cleanliness"}
                  {category.id === 'policies' && "Payment terms, cancellations, and policies"}
                  {category.id === 'pets' && "Bringing your furry family members along"}
                </p>
              </div>

              {/* FAQ Items */}
              <FAQAccordion questions={category.questions} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="section bg-orange-50">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-orange-200 rounded-xl p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Still Have Questions? 💬
              </h2>
              <p className="text-gray-700 mb-8">
                Can't find what you're looking for? Our family-friendly team is here to help create your perfect glamping experience!
              </p>
              
              {/* Contact Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Live Chat</h3>
                  <p className="text-sm text-gray-600">Quick answers to simple questions</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">24hr Response</h3>
                  <p className="text-sm text-gray-600">We'll get back to you quickly</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Family Experts</h3>
                  <p className="text-sm text-gray-600">We understand family celebrations</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="/contact"
                  className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Our Family Team
                </motion.a>
                <motion.a
                  href="/book-now"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Experience
                </motion.a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Quick Contact:</strong> Call us at{' '}
                  <a href="tel:+17165551234" className="text-orange-600 hover:text-orange-700 font-medium">
                    (716) 555-1234
                  </a>{' '}
                  or email{' '}
                  <a href="mailto:info@glampingwny.com" className="text-orange-600 hover:text-orange-700 font-medium">
                    info@glampingwny.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;