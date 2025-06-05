import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import FAQAccordion from '../components/ui/FAQAccordion';
import { MessageCircle, Clock, MapPin, Bed, Sun, CreditCard, CloudLightning, Shield, Dog } from 'lucide-react';

const FAQPage: React.FC = () => {
  const faqSections = [
    {
      title: "Booking & Scheduling",
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
          question: "Do you stay and host the party?",
          answer: "We don't stay and host the party, but we ensure everything is set up just as you need it."
        },
        {
          question: "Is there an age requirement?",
          answer: "We ask that all guests be 5 and over."
        }
      ]
    },
    {
      title: "Services & Amenities",
      questions: [
        {
          question: "Is delivery included?",
          answer: "We offer delivery, setup, and cleanup at no extra charge if you are within a 20-mile radius of Hamburg, New York (14075). Anything outside of 20 miles will have an additional travel fee. See Areas We Service for detailed information."
        },
        {
          question: "How does bedding work?",
          answer: "For both our outdoor glamping and indoor glamping experience, we provide a standard bed sheet, pillows, and light décor blanket for each bed."
        },
        {
          question: "Can I reserve multiple tents and/or multiple nights?",
          answer: "Yes, depending on availability."
        },
        {
          question: "How does the theater experience work?",
          answer: "Our theater comes with a screen and wireless projector that connects to your home wi-fi to stream Netflix, Hulu, etc. You can also connect to a computer with the included HDMI to show content from your own device."
        }
      ]
    },
    {
      title: "Preparation & Safety",
      questions: [
        {
          question: "How are the tents and bedding cleaned?",
          answer: "All décor linens are washed with a fragrance free hypoallergenic detergent after each use. Trays and other accessories are cleaned and disinfected."
        },
        {
          question: "How to prepare the space?",
          answer: "Please review our setup checklists based on your package: Indoor Teepee Checklist, Standard 16ft Bell Tent Checklist, or 23ft Bell Tent Checklist."
        },
        {
          question: "What if severe weather is expected?",
          answer: "The Outdoor Bell Tent canvas is 100% rainproof. If light rain is expected, we will set up your outdoor glamping experience as normal; we will not accept cancellations for rain. In the event that severe wind or lightning is predicted, we reserve the right to cancel your reservation with a full refund. We don't want to risk putting any of our guests in danger or damage our tents."
        }
      ]
    },
    {
      title: "Policies & Payments",
      questions: [
        {
          question: "Can I cancel my reservation?",
          answer: "Life happens, plans change. We totally get it! We want you to have the best time as possible, so we don't like charging fees. If your plans change and you wish to cancel for any reason at all, contact us no later than 14 days of your booking date to receive a full refund. There are no refunds for any cancellation less than 14 days before the booking date, however the full amount paid can be applied to a different date."
        },
        {
          question: "Do you accept tips?",
          answer: "We sincerely appreciate your recognition of the hard work and love that goes into our setups! While tipping is not expected, any gratuities received will be shared with our amazing glamping team who assisted with the setup and cleanup. Thank you for your kind appreciation and generosity!"
        },
        {
          question: "Can we bring our pets?",
          answer: "We are pet friendly, however your pets must be very well behaved. If your pets like to chase wildlife, the bell tent will NOT contain them in the tents. Pets should never be left unattended in the tent. Any damages due to pet or human alike, are subject to damage charges. Please notify us if you will be having your furry friends join you. The pet fee is $20 for the first pet and $30 for the second. Maximum is 2 pets."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Glamping WNY</title>
        <meta name="description" content="Find answers to common questions about our magical glamping experiences. Learn about booking, setup, weather policies, and more." />
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
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90">
              Everything you need to know about our magical glamping experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          {faqSections.map((section, index) => (
            <motion.div
              key={index}
              className="mb-12 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-primary-900 mb-6">
                {section.title}
              </h2>
              <FAQAccordion questions={section.questions} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-700 mb-8">
                Can't find what you're looking for? We're here to help create your perfect glamping experience!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="/contact"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
                <motion.a
                  href="/book-now"
                  className="btn btn-outline border-primary-200 text-primary-900 hover:bg-primary-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;