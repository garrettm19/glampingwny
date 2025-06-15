import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, Quote, Calendar, MapPin, Heart, Award, Users, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';

// All customer testimonials organized by category
const allTestimonials = [
  // Birthday Parties
  {
    quote: "I booked Glamping WNY for a surprise sleepover for my nephews. Holly was great! The booking process was so simple. She was easy to contact and communicate with. Also very flexible with drop off and pickup times. She was able to do two different themes for them since they are into different things. The beds were very comfortable and everything was clean and organized. The kids loved it. It was a great experience. Thank you for making their birthday extra special!",
    name: "Rebecca B.",
    image: "https://picsum.photos/100/100?random=51",
    rating: 5,
    category: "Birthday Parties",
    occasion: "Kids Birthday Sleepover",
    date: "2024-02-25"
  },
  {
    quote: "Working with Glamping WNY was so easy. I made sure to book in advance and while booking, was able to receive tips from Holly on theme and components I wanted for the setup. Their product is clean, unique and they take the time to make every display perfect. My daughter loved having the unicorn themed tents to celebrate her birthday and Holly even included a special unicorn gift just for her. Great product, great company and I can't wait to work with them again.",
    name: "Casey S.",
    image: "https://picsum.photos/100/100?random=54",
    rating: 5,
    category: "Birthday Parties",
    occasion: "Unicorn Birthday Party",
    date: "2024-02-15"
  },
  {
    quote: "I would highly recommend Glamping WNY for a unique indoor or outdoor glamping experience. We booked 8 indoor tents for my daughters 10th birthday party. I did not have to do anything because they set everything up and they also took everything down the next day. Everything was very clean and their customer service was exceptional. I cannot wait to book them again!",
    name: "Lynne F.",
    image: "https://picsum.photos/100/100?random=62",
    rating: 5,
    category: "Birthday Parties",
    occasion: "10th Birthday Party",
    date: "2024-01-20"
  },
  {
    quote: "This was such a fun, pleasant experience from start to finish!! Booking the tent for my niece's 12th bday to have a cousin crew sleep over was so easy. Holly was super friendly, had great communication and the tent/bedding/decorations were immaculate!!! We all slept great, the beds were extremely comfortable and clean. We had the best time watching movies on the projector, and the birthday girl felt extra special with the special glow package added on!! I would recommend this glamping experience to anyone looking for something unique, special and fun!!!",
    name: "KW",
    image: "https://picsum.photos/100/100?random=68",
    rating: 5,
    category: "Birthday Parties",
    occasion: "12th Birthday Party",
    date: "2024-01-15"
  },
  {
    quote: "This was the best 16th birthday! Holly communicated great, set everything up and took it all down so quickly. The girls loved the décor & the experience! I highly recommend Glamping WNY. We will definitely be doing it again!",
    name: "Christy B.",
    image: "https://picsum.photos/100/100?random=75",
    rating: 5,
    category: "Birthday Parties",
    occasion: "Sweet 16 Party",
    date: "2023-12-10"
  },

  // Family Experiences
  {
    quote: "They were very responsive to any questions I asked, they gave their honest opinions, and I cannot begin to explain how awesome the set up was. It was even better in person than in the pictures! The kids not only slept in it, but played in it for the entire length of time we had them! Everything was clean, fresh, and right up any kids alley! Thank you for an awesome 'stay-cation' for our kiddos!",
    name: "Erin C.",
    image: "https://picsum.photos/100/100?random=53",
    rating: 5,
    category: "Family Experiences",
    occasion: "Family Staycation",
    date: "2024-02-18"
  },
  {
    quote: "If you are thinking about it, DO IT!! My family and I had such a fun night in our own backyard...it was perfect! Holly and her husband were great. They were neat, tidy and made the experience one that we'll always remember. They literally setup everything and then arrive the next day to clean it all up for you. I highly recommend Glamping whenever you get the chance...you won't regret it! Ps. Everyone loved playing the oversized Connect4!!",
    name: "Laura N.",
    image: "https://picsum.photos/100/100?random=65",
    rating: 5,
    category: "Family Experiences",
    occasion: "Family Backyard Adventure",
    date: "2024-01-10"
  },
  {
    quote: "My daughter and her friends had an awesome experience. Everything was clean and cute and even better than it looked in the photos online. Holly and Joe were kind and professional and made setup and takedown look easy. This is something the kids won't soon forget - and all in the comfort of your home!",
    name: "Jennifer P.",
    image: "https://picsum.photos/100/100?random=69",
    rating: 5,
    category: "Family Experiences",
    occasion: "Kids Sleepover",
    date: "2024-01-08"
  },
  {
    quote: "Everything was perfect! They thought of everything. From set up, to take down, they do it all. I highly recommend Glamping WNY. I hosted a girls night with my nieces. The ages ranged from 8 to 25. Everyone loved the glamping set up.",
    name: "Katie L.",
    image: "https://picsum.photos/100/100?random=72",
    rating: 5,
    category: "Family Experiences",
    occasion: "Multi-Generation Girls Night",
    date: "2023-12-20"
  },

  // Special Occasions
  {
    quote: "Holly was absolutely amazing and easy to work with! I told her I was throwing a Barbie themed bachelorette weekend and she knocked the theme out of the park with Barbie décor in our glamping tent! All the girls especially the bride to be were so impressed and we enjoyed our first glamping experience so much! I highly recommend Glamping WNY and will most definitely be using them again in the future!",
    name: "Rachel C.",
    image: "https://picsum.photos/100/100?random=50",
    rating: 5,
    category: "Special Occasions",
    occasion: "Bachelorette Party",
    date: "2024-02-28"
  },
  {
    quote: "We used Glamping WNY for our wedding and it was the cherry on top of a perfect night. A couple of our friends booked tents for that night as well. Everything was set up so beautifully and the tents were so cozy. They will work with you on set up / take down times which made it so convenient for us. We will definitely be booking with them again in the future!!! What a great business",
    name: "Samantha S.",
    image: "https://picsum.photos/100/100?random=64",
    rating: 5,
    category: "Special Occasions",
    occasion: "Wedding Night",
    date: "2024-01-25"
  },
  {
    quote: "O my gosh it was incredible!!!!! My husband and I enjoyed a wonderful anniversary in our own backyard Holly and her crew were awesome!!!! super friendly and extremely helpful with technology to use film projector I highly recommend Glampingwny.com you will not be disappointed I will be doing this again for sure!!!!!",
    name: "Michelle P.",
    image: "https://picsum.photos/100/100?random=66",
    rating: 5,
    category: "Special Occasions",
    occasion: "Anniversary Celebration",
    date: "2024-01-05"
  },
  {
    quote: "Holly and Joe truly go above and beyond and exceed expectations!!! We had an absolutely beautiful and romantic night under the stars! The set up of the tent was unbelievably cute and super clean!! Highly recommend for any type of special occasion or even just a romantic night with your significant other!",
    name: "Meghan B.",
    image: "https://picsum.photos/100/100?random=61",
    rating: 5,
    category: "Special Occasions",
    occasion: "Romantic Date Night",
    date: "2024-01-30"
  },

  // Professional Service
  {
    quote: "Clean, bright, unique, well thought out. Our experience was 5 stars, Holly covered all the details. Highly recommend booking Holly and Joe for all your Glamping needs!",
    name: "Jamie D.",
    image: "https://picsum.photos/100/100?random=52",
    rating: 5,
    category: "Professional Service",
    occasion: "Family Celebration",
    date: "2024-02-20"
  },
  {
    quote: "Amazing from start to finish. I won this as a raffle and will 100% pay to have them do it again. Our guests loved the ambiance and details of the outdoor movie night. They were very communicative leading up as there was a chance of rain. The seating and decorations were SO cute! Holly and her husband got everything set-up quickly and then came after and got it all that night. I have raved about them to everyone and look forward to working with them again!",
    name: "Brett B.",
    image: "https://picsum.photos/100/100?random=55",
    rating: 5,
    category: "Professional Service",
    occasion: "Outdoor Movie Night",
    date: "2024-02-12"
  },
  {
    quote: "I cannot say enough good things about Holly + her team! They setup quickly, everything was beautiful, they went above + beyond to make our experience customized + special! We will definitely be Glamping with them again! Highly recommend!!",
    name: "Kelly K.",
    image: "https://picsum.photos/100/100?random=57",
    rating: 5,
    category: "Professional Service",
    occasion: "Custom Experience",
    date: "2024-02-05"
  }
];

const categories = [
  { name: "Birthday Parties", icon: PartyPopper, color: "bg-pink-50 text-pink-600" },
  { name: "Family Experiences", icon: Users, color: "bg-blue-50 text-blue-600" },
  { name: "Special Occasions", icon: Heart, color: "bg-purple-50 text-purple-600" },
  { name: "Professional Service", icon: Award, color: "bg-green-50 text-green-600" }
];

const TestimonialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const filteredTestimonials = selectedCategory 
    ? allTestimonials.filter(t => t.category === selectedCategory)
    : allTestimonials;

  const aggregateRating = {
    ratingValue: 5.0,
    reviewCount: allTestimonials.length,
    bestRating: 5,
    worstRating: 1
  };

  return (
    <>
      <Helmet>
        <title>Customer Reviews & Testimonials | 200+ Happy Families | Glamping WNY</title>
        <meta name="description" content="Read authentic reviews from 200+ happy families who've experienced magical glamping with Glamping WNY. Real testimonials from birthday parties, family celebrations, and special occasions in Western New York." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Glamping WNY",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": aggregateRating.ratingValue,
              "reviewCount": aggregateRating.reviewCount,
              "bestRating": aggregateRating.bestRating,
              "worstRating": aggregateRating.worstRating
            },
            "review": allTestimonials.map(testimonial => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating,
                "bestRating": 5
              },
              "author": {
                "@type": "Person",
                "name": testimonial.name
              },
              "reviewBody": testimonial.quote,
              "datePublished": testimonial.date
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white relative overflow-hidden">
        {/* Sparkle effects */}
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
            <div className="flex justify-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-300 fill-yellow-300" />
                ))}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Families Are Saying About Us! 👨‍👩‍👧‍👦
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Real reviews from real families who've experienced the magic of Glamping WNY. 
              Over 200 happy families and counting!
            </p>
            
            {/* Trust Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">5.0</div>
                <div className="text-sm text-white/80">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm text-white/80">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-white/80">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">3+</div>
                <div className="text-sm text-white/80">Years of Magic</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Browse Reviews by Category</h2>
            <p className="text-gray-600">See what families are saying about different types of celebrations</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === null
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              All Reviews ({allTestimonials.length})
            </button>
            {categories.map((category) => {
              const count = allTestimonials.filter(t => t.category === category.name).length;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.name
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-orange-200 rounded-xl p-6 relative hover:shadow-lg transition-all duration-300"
              >
                {/* Category Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                  {testimonial.category}
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-orange-200" />
                  <blockquote className="text-gray-700 pl-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                  />
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-orange-600 font-medium">{testimonial.occasion}</div>
                    <div className="text-xs text-gray-500">
                      {new Date(testimonial.date).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Experience */}
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
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Share Your Family Experience With Us! 💕
              </h2>
              <p className="text-gray-700 mb-8">
                Had a magical time with your family? We'd love to hear about it! Your review helps other families discover the joy of glamping.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a 
                  href="https://google.com/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Review on Google
                </a>
                <a 
                  href="https://facebook.com/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                >
                  Review on Facebook
                </a>
              </div>
              <p className="text-sm text-gray-600">
                We recognize the importance of all feedback, positive or constructive, as it helps us evolve and better serve future families.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Your Own Family Magic? ✨
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join the 200+ families who've made unforgettable memories with Glamping WNY!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/book-now"
                className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Your Family Experience
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Ask Questions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;