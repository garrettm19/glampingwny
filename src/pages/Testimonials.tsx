import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, Quote, Filter, Search, Heart, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

// Testimonial data from glampingwny.com
const testimonials = [
  {
    id: 1,
    quote: "Holly was absolutely amazing and easy to work with! I told her I was throwing a Barbie themed bachelorette weekend and she knocked the theme out of the park with Barbie décor in our glamping tent! All the girls especially the bride to be were so impressed and we enjoyed our first glamping experience so much! I highly recommend Glamping WNY and will most definitely be using them again in the future!",
    author: "Rachel C.",
    event: "Bachelorette Party",
    date: "2024-02-28",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Special Occasions"
  },
  {
    id: 2,
    quote: "I booked Glamping WNY for a surprise sleepover for my nephews. Holly was great! The booking process was so simple. She was easy to contact and communicate with. Also very flexible with drop off and pickup times. She was able to do two different themes for them since they are into different things. The beds were very comfortable and everything was clean and organized. The kids loved it. It was a great experience. Thank you for making their birthday extra special!",
    author: "Rebecca B.",
    event: "Kids Birthday Sleepover",
    date: "2024-02-25",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Birthday Parties"
  },
  {
    id: 3,
    quote: "Clean, bright, unique, well thought out. Our experience was 5 stars, Holly covered all the details. Highly recommend booking Holly and Joe for all your Glamping needs!",
    author: "Jamie D.",
    event: "Family Celebration",
    date: "2024-02-20",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Family Experiences"
  },
  {
    id: 4,
    quote: "They were very responsive to any questions I asked, they gave their honest opinions, and I cannot begin to explain how awesome the set up was. It was even better in person than in the pictures! The kids not only slept in it, but played in it for the entire length of time we had them! Everything was clean, fresh, and right up any kids alley! Thank you for an awesome 'stay-cation' for our kiddos!",
    author: "Erin C.",
    event: "Family Staycation",
    date: "2024-02-18",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Family Experiences"
  },
  {
    id: 5,
    quote: "Working with Glamping WNY was so easy. I made sure to book in advance and while booking, was able to receive tips from Holly on theme and components I wanted for the setup. Their product is clean, unique and they take the time to make every display perfect. My daughter loved having the unicorn themed tents to celebrate her birthday and Holly even included a special unicorn gift just for her. Great product, great company and I can't wait to work with them again.",
    author: "Casey S.",
    event: "Unicorn Birthday Party",
    date: "2024-02-15",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Birthday Parties"
  },
  {
    id: 6,
    quote: "Amazing from start to finish. I won this as a raffle and will 100% pay to have them do it again. Our guests loved the ambiance and details of the outdoor movie night. They were very communicative leading up as there was a chance of rain. The seating and decorations were SO cute! Holly and her husband got everything set-up quickly and then came after and got it all that night. I have raved about them to everyone and look forward to working with them again!",
    author: "Brett B.",
    event: "Outdoor Movie Night",
    date: "2024-02-12",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Professional Service"
  },
  {
    id: 7,
    quote: "I cannot say enough good things about Holly + her team! They setup quickly, everything was beautiful, they went above + beyond to make our experience customized + special! We will definitely be Glamping with them again! Highly recommend!!",
    author: "Kelly K.",
    event: "Custom Experience",
    date: "2024-02-05",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Professional Service"
  },
  {
    id: 8,
    quote: "It was amazing! It's a great idea for an at home, cozy, camping experience. The set up, the décor, all the little accommodations, just perfect. We were comfortable and had an amazing night!",
    author: "Ashley B.",
    event: "Cozy Home Glamping",
    date: "2024-01-30",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Family Experiences"
  },
  {
    id: 9,
    quote: "Cannot recommend them enough! They thought of everything and we had the best time glamping in our own backyard! Great customer service and experience!",
    author: "Amanda L.",
    event: "Backyard Glamping",
    date: "2024-01-28",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Family Experiences"
  },
  {
    id: 10,
    quote: "I had an incredible experience glamping! The beds were very comfortable, and the tent was very clean. The tent was beautifully decorated to match our bachelorette party theme. I will be looking forward to booking with them again!",
    author: "Cathy B.",
    event: "Bachelorette Party",
    date: "2024-01-25",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Special Occasions"
  },
  {
    id: 11,
    quote: "Holly and Joe truly go above and beyond and exceed expectations!!! We had an absolutely beautiful and romantic night under the stars! The set up of the tent was unbelievably cute and super clean!! Highly recommend for any type of special occasion or even just a romantic night with your significant other!",
    author: "Meghan B.",
    event: "Romantic Date Night",
    date: "2024-01-20",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Special Occasions"
  },
  {
    id: 12,
    quote: "I would highly recommend Glamping WNY for a unique indoor or outdoor glamping experience. We booked 8 indoor tents for my daughters 10th birthday party. I did not have to do anything because they set everything up and they also took everything down the next day. Everything was very clean and their customer service was exceptional. I cannot wait to book them again!",
    author: "Lynne F.",
    event: "10th Birthday Party",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Birthday Parties"
  },
  {
    id: 13,
    quote: "The cutest and comfiest glamping experience ever! Everything I thought to bring with me was already provided with the set up. My favorite part was being able to watch a movie under the stars. I would totally book again and recommend to anyone who isn't the outdoors type but still wants to camp.",
    author: "Amanda K.",
    event: "Outdoor Movie Night",
    date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Family Experiences"
  },
  {
    id: 14,
    quote: "We used Glamping WNY for our wedding and it was the cherry on top of a perfect night. A couple of our friends booked tents for that night as well. Everything was set up so beautifully and the tents were so cozy. They will work with you on set up / take down times which made it so convenient for us. We will definitely be booking with them again in the future!!! What a great business",
    author: "Samantha S.",
    event: "Wedding Night",
    date: "2024-01-05",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Special Occasions"
  },
  {
    id: 15,
    quote: "If you are thinking about it, DO IT!! My family and I had such a fun night in our own backyard...it was perfect! Holly and her husband were great. They were neat, tidy and made the experience one that we'll always remember. They literally setup everything and then arrive the next day to clean it all up for you. I highly recommend Glamping whenever you get the chance...you won't regret it! Ps. Everyone loved playing the oversized Connect4!!",
    author: "Laura N.",
    event: "Family Backyard Adventure",
    date: "2023-12-28",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Family Experiences"
  },
  {
    id: 16,
    quote: "O my gosh it was incredible!!!!! My husband and I enjoyed a wonderful anniversary in our own backyard Holly and her crew were awesome!!!! super friendly and extremely helpful with technology to use film projector I highly recommend Glampingwny.com you will not be disappointed I will be doing this again for sure!!!!!",
    author: "Michelle P.",
    event: "Anniversary Celebration",
    date: "2023-12-20",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Special Occasions"
  },
  {
    id: 17,
    quote: "Wow! We had a wonderful experience with Glamping WNY. The tent was gorgeous and more roomy than I originally thought. The bed was comfortable and I loved the lounge chairs. The extra add on of the projector was my favorite part. Overall I highly recommend!",
    author: "Stephanie L.",
    event: "Outdoor Glamping",
    date: "2023-12-15",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Family Experiences"
  },
  {
    id: 18,
    quote: "What an amazing experience with Glamping WNY. I can not say enough about working with Holly. I would highly recommend this awesome service!",
    author: "Stacy D.",
    event: "Glamping Experience",
    date: "2023-12-10",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Professional Service"
  },
  {
    id: 19,
    quote: "This was such a fun, pleasant experience from start to finish!! Booking the tent for my niece's 12th bday to have a cousin crew sleep over was so easy. Holly was super friendly, had great communication and the tent/bedding/decorations were immaculate!!! We all slept great, the beds were extremely comfortable and clean. We had the best time watching movies on the projector, and the birthday girl felt extra special with the special glow package added on!! I would recommend this glamping experience to anyone looking for something unique, special and fun!!!",
    author: "KW",
    event: "12th Birthday Party",
    date: "2023-12-05",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Birthday Parties"
  },
  {
    id: 20,
    quote: "My daughter and her friends had an awesome experience. Everything was clean and cute and even better than it looked in the photos online. Holly and Joe were kind and professional and made setup and takedown look easy. This is something the kids won't soon forget - and all in the comfort of your home!",
    author: "Jennifer P.",
    event: "Kids Sleepover",
    date: "2023-11-30",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Family Experiences"
  },
  {
    id: 21,
    quote: "If I could give Holly and Glamping WNY 10 stars I totally would! I mean wow! This Tiny Mafia package is above and beyond. My son and his best buddy had the best time of their lives. Glamping WNY not only set everything up perfectly, but her details are everything! She has thought of everything. The Balloon install was from Color Me Happy Balloon Co. and they were perfect for the set up. The set up was so fast and smooth I was blown away. If you are looking for a cute way to take a sleepover to the next level, Glamping WNY is the way to go! I seriously cannot wait to do an adult Glamping night!",
    author: "Sam N.",
    event: "Kids Sleepover",
    date: "2023-11-25",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Birthday Parties"
  },
  {
    id: 22,
    quote: "Super easy to deal with Holly was so accommodating and made such a great set up for my daughter's birthday camp out! Highly recommended",
    author: "Sara K.",
    event: "Birthday Camp Out",
    date: "2023-11-20",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Birthday Parties"
  },
  {
    id: 23,
    quote: "Holly created such a sweet little world for my children. Honestly the pictures don't do the experience justice. Not to mention she came back promptly the next morning to clean everything up. I would highly recommend!",
    author: "Mandy G.",
    event: "Children's Experience",
    date: "2023-11-15",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Family Experiences"
  },
  {
    id: 24,
    quote: "Everything was perfect! They thought of everything. From set up, to take down, they do it all. I highly recommend Glamping WNY. I hosted a girls night with my nieces. The ages ranged from 8 to 25. Everyone loved the glamping set up.",
    author: "Katie L.",
    event: "Multi-Generation Girls Night",
    date: "2023-11-10",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Family Experiences"
  },
  {
    id: 25,
    quote: "I rented a Glamping set up for my daughters birthday it was a huge hit!! Holly and her team were so friendly, my daughter and her cousins loved everything.",
    author: "Sarah S.",
    event: "Daughter's Birthday",
    date: "2023-11-05",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Birthday Parties"
  },
  {
    id: 26,
    quote: "So professional and the kids absolutely loved the lounge tent! Would highly recommend!",
    author: "Meridith W.",
    event: "Kids Lounge Experience",
    date: "2023-10-30",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Family Experiences"
  },
  {
    id: 27,
    quote: "Glamping WNY did an amazing job making my daughters birthday so special. The picnic set up, balloons, and all the other décor was beautifully done. I definitely plan on using this service for future birthday parties or special events!",
    author: "Chelsea P.",
    event: "Daughter's Birthday",
    date: "2023-10-25",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Birthday Parties"
  },
  {
    id: 28,
    quote: "This was the best 16th birthday! Holly communicated great, set everything up and took it all down so quickly. The girls loved the décor & the experience! I highly recommend Glamping WNY. We will definitely be doing it again!",
    author: "Christy B.",
    event: "Sweet 16 Party",
    date: "2023-10-20",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=100&q=80",
    rating: 5,
    category: "Birthday Parties"
  }
];

// Define categories
const categories = [
  { id: 'all', name: 'All Reviews', count: testimonials.length },
  { id: 'birthday-parties', name: 'Birthday Parties', count: testimonials.filter(t => t.category === 'Birthday Parties').length },
  { id: 'family-experiences', name: 'Family Experiences', count: testimonials.filter(t => t.category === 'Family Experiences').length },
  { id: 'special-occasions', name: 'Special Occasions', count: testimonials.filter(t => t.category === 'Special Occasions').length },
  { id: 'professional-service', name: 'Professional Service', count: testimonials.filter(t => t.category === 'Professional Service').length }
];

const Testimonials: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { ref: loadMoreRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Filter testimonials based on category and search query
  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesCategory = selectedCategory === 'all' || 
      testimonial.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
    
    const matchesSearch = searchQuery === '' || 
      testimonial.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.event.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Load more testimonials when scrolling to the bottom
  useEffect(() => {
    if (inView && visibleCount < filteredTestimonials.length) {
      setTimeout(() => {
        setVisibleCount(prev => Math.min(prev + 6, filteredTestimonials.length));
      }, 300);
    }
  }, [inView, filteredTestimonials.length, visibleCount]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(9);
  }, [selectedCategory, searchQuery]);

  // Calculate aggregate rating
  const aggregateRating = {
    ratingValue: 5.0,
    reviewCount: testimonials.length,
    bestRating: 5,
    worstRating: 1
  };

  return (
    <div className="py-16 bg-gray-50">
      <Helmet>
        <title>Customer Reviews & Testimonials | 200+ Happy Families | Glamping WNY</title>
        <meta name="description" content="Read authentic reviews from 200+ happy families who've experienced magical glamping with Glamping WNY. Real testimonials from birthday parties, family celebrations, and special occasions in Western New York." />
        
        {/* Schema.org markup for reviews */}
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
            "review": testimonials.slice(0, 10).map(testimonial => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating,
                "bestRating": 5
              },
              "author": {
                "@type": "Person",
                "name": testimonial.author
              },
              "reviewBody": testimonial.quote
            }))
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                </motion.div>
              ))}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Families Are Saying
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Read authentic reviews from {testimonials.length}+ happy families who've experienced 
            the magic of Glamping WNY across Western New York.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">5.0</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">200+</div>
              <div className="text-sm text-gray-600">Happy Families</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">3+</div>
              <div className="text-sm text-gray-600">Years of Magic</div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-6 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className={`relative border-2 rounded-lg transition-all ${
                isSearchFocused ? 'border-blue-500' : 'border-gray-200'
              }`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search reviews by keyword..."
                  className="block w-full pl-10 pr-3 py-3 border-0 focus:ring-0 focus:outline-none rounded-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="block w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none appearance-none bg-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {Math.min(visibleCount, filteredTestimonials.length)} of {filteredTestimonials.length} reviews
            {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredTestimonials.slice(0, visibleCount).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
              className="bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              {/* Category Tag */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{testimonial.category}</span>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Quote */}
                <div className="relative mb-6 flex-grow">
                  <Quote className="absolute top-0 left-0 w-8 h-8 text-blue-100 -translate-x-2 -translate-y-2" />
                  <blockquote className="text-gray-700 italic relative z-10 pl-2">
                    {testimonial.quote.length > 200 
                      ? `"${testimonial.quote.substring(0, 200)}..."`
                      : `"${testimonial.quote}"`
                    }
                  </blockquote>
                </div>
                
                {/* Author */}
                <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(testimonial.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                  </div>
                </div>
                
                {/* Event Type */}
                <div className="mt-3 bg-blue-50 rounded-lg px-3 py-2 text-sm text-blue-700 flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  {testimonial.event}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredTestimonials.length && (
          <div ref={loadMoreRef} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <div className="w-10 h-10 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading more reviews...</p>
            </motion.div>
          </div>
        )}

        {/* No Results */}
        {filteredTestimonials.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16 bg-white rounded-xl shadow-sm"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No reviews found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any reviews matching your search criteria.
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm p-8 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            
            <blockquote className="text-center">
              <p className="text-2xl font-medium text-gray-900 mb-8 italic relative">
                <Quote className="absolute -top-4 -left-4 w-10 h-10 text-blue-100" />
                "If I could give Holly and Glamping WNY 10 stars I totally would! I mean wow! This Tiny Mafia package is above and beyond. My son and his best buddy had the best time of their lives. Glamping WNY not only set everything up perfectly, but her details are everything! She has thought of everything. The set up was so fast and smooth I was blown away. I seriously cannot wait to do an adult Glamping night!"
              </p>
              
              <footer className="flex flex-col items-center">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=100&q=80" 
                  alt="Sam N."
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100 mb-4"
                />
                <div className="font-semibold text-gray-900 text-lg">Sam N.</div>
                <div className="text-blue-600">Kids Sleepover</div>
              </footer>
            </blockquote>
          </div>
        </motion.div>

        {/* Share Your Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white mb-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              Share Your Experience With Us!
            </h2>
            
            <p className="text-lg mb-8 opacity-90">
              We at Glamping WNY recognize the importance of all feedback, regardless of whether it is positive or negative, 
              as it allows us to evolve and better serve our future glampers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <a href="https://g.page/r/CYvXQVWWvbZsEAI/review" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
                  Review on Google
                </a>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold transition-all duration-300"
              >
                <a href="https://www.facebook.com/glampingwny/reviews/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Review on Facebook
                </a>
              </motion.button>
            </div>
            
            <p className="text-sm opacity-80">
              Your feedback helps other families discover the joy of glamping and helps us improve our services.
            </p>
          </div>
        </motion.div>

        {/* Service Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-blue-50 rounded-xl p-8 mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <MapPin className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Serving Western New York</h2>
          </div>
          
          <p className="text-center text-gray-700 mb-6 max-w-3xl mx-auto">
            We proudly serve families throughout the Buffalo Metro Area with FREE delivery within 20 miles of Hamburg, NY (14075).
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">FREE</div>
              <div className="text-gray-700">Within 20 miles</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">$50</div>
              <div className="text-gray-700">21-31 miles</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">$100</div>
              <div className="text-gray-700">32-42 miles</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Create Your Own Magical Memories?
            </h2>
            
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join the 200+ families who have experienced the magic of Glamping WNY. 
              Book your perfect glamping adventure today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link to="/contact" className="flex items-center">
                  Book Your Experience
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold transition-all duration-300"
              >
                <a href="tel:+17162007692" className="flex items-center">
                  Call (716) 200-7692
                </a>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;