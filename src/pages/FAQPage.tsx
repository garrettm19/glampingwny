import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import FAQAccordion from '../components/ui/FAQAccordion';
import { MessageCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const faqSections = [
    {
      title: "General Info",
      questions: [
        {
          question: "What exactly is glamping?",
          answer: "Think of glamping as camping's luxurious cousin! We combine the fun of sleeping in tents with all the comforts of home. Our setups include cozy beds, beautiful decorations, and real bathrooms nearby. It's perfect for kids who want adventure without roughing it."
        },
        {
          question: "What ages do you cater to?",
          answer: "We create magical experiences for children ages 4-12, with specially designed setups for different age groups. Our tents and activities are customized to ensure age-appropriate fun and safety for everyone!"
        },
        {
          question: "Where do you set up?",
          answer: "We bring the magic to you! We set up in backyards, parks (with permits), and other outdoor spaces within Western New York. We just need a flat area of about 15×15 feet per tent and easy access for our equipment."
        }
      ]
    },
    {
      title: "Booking & Payment",
      questions: [
        {
          question: "How far in advance should I book?",
          answer: "We recommend booking 4-6 weeks ahead, especially for weekend dates and summer months (May-September). Some dates book up to 3 months in advance! But don't worry if you're planning last minute – we sometimes have availability for spontaneous celebrations."
        },
        {
          question: "What's your cancellation policy?",
          answer: "We understand plans can change! You'll get a full refund if you cancel 14+ days before your event. Cancellations within 7-14 days receive a 50% refund or the option to reschedule. For last-minute cancellations (less than 7 days), we offer rescheduling options based on availability."
        },
        {
          question: "Do you require a deposit?",
          answer: "Yes, we ask for a 50% deposit to secure your date, with the remaining balance due 7 days before your event. This helps us ensure we have all the perfect decorations and supplies ready for your special day!"
        }
      ]
    },
    {
      title: "What's Included",
      questions: [
        {
          question: "What comes with the basic package?",
          answer: "Our basic package includes the tent setup, cozy sleeping arrangements, ambient lighting (including our signature fairy lights!), basic decorations, and morning continental breakfast. We also provide a picnic table setup and access to our party planning guide."
        },
        {
          question: "Can we customize the theme?",
          answer: "Absolutely! We love bringing your vision to life. From princess parties to dinosaur adventures, we have tons of themes to choose from. We can even create custom themes to match your child's specific interests!"
        },
        {
          question: "Do you provide food or activities?",
          answer: "While our basic package doesn't include food (except breakfast), we offer various add-ons like s'mores kits, movie night setups, and craft stations. We're also happy to recommend local caterers who specialize in kid-friendly party food!"
        }
      ]
    },
    {
      title: "Safety & Weather",
      questions: [
        {
          question: "What happens if it rains?",
          answer: "Don't worry – we've got you covered! Our tents are weather-resistant and we monitor forecasts closely. In case of severe weather, we offer flexible rescheduling or can move the setup indoors if space allows. We'll communicate with you well in advance if weather might be an issue."
        },
        {
          question: "Are the tents safe and clean?",
          answer: "Safety and cleanliness are our top priorities! All our equipment is thoroughly sanitized between uses, and we follow strict safety protocols. Our tents are fire-retardant, properly secured, and we use child-safe materials throughout the setup."
        },
        {
          question: "Do you provide supervision?",
          answer: "While we handle all setup and teardown, parents/guardians need to provide supervision during the party. We're happy to recommend local qualified babysitters if you need extra help during the celebration!"
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
              Hear from parents like you — before they booked!
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

      {/* Still Have Questions */}
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
                We're here to help! Our team is always ready to answer any questions you might have about creating the perfect glamping experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
                <motion.button
                  className="btn btn-outline border-primary-200 text-primary-900 hover:bg-primary-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;