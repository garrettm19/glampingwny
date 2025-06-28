import React from 'react';
import { Star, Quote, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    quote: "Holly was absolutely amazing and easy to work with! I told her I was throwing a Barbie themed bachelorette weekend and she knocked the theme out of the park with Barbie décor in our glamping tent! All the girls especially the bride to be were so impressed and we enjoyed our first glamping experience so much! I highly recommend Glamping WNY and will most definitely be using them again in the future!",
    author: "Rachel C.",
    event: "Bachelorette Party"
  },
  {
    quote: "I booked Glamping WNY for a surprise sleepover for my nephews. Holly was great! The booking process was so simple. She was easy to contact and communicate with. Also very flexible with drop off and pickup times. She was able to do two different themes for them since they are into different things. The beds were very comfortable and everything was clean and organized. The kids loved it. It was a great experience. Thank you for making their birthday extra special!",
    author: "Rebecca B.",
    event: "Kids Birthday Sleepover"
  },
  {
    quote: "Clean, bright, unique, well thought out. Our experience was 5 stars, Holly covered all the details. Highly recommend booking Holly and Joe for all your Glamping needs!",
    author: "Jamie D.",
    event: "Family Celebration"
  },
  {
    quote: "They were very responsive to any questions I asked, they gave their honest opinions, and I cannot begin to explain how awesome the set up was. It was even better in person than in the pictures! The kids not only slept in it, but played in it for the entire length of time we had them! Everything was clean, fresh, and right up any kids alley! Thank you for an awesome 'stay-cation' for our kiddos!",
    author: "Erin C.",
    event: "Family Staycation"
  },
  {
    quote: "Working with Glamping WNY was so easy. I made sure to book in advance and while booking, was able to receive tips from Holly on theme and components I wanted for the setup. Their product is clean, unique and they take the time to make every display perfect. My daughter loved having the unicorn themed tents to celebrate her birthday and Holly even included a special unicorn gift just for her. Great product, great company and I can't wait to work with them again.",
    author: "Casey S.",
    event: "Unicorn Birthday Party"
  },
  {
    quote: "Amazing from start to finish. I won this as a raffle and will 100% pay to have them do it again. Our guests loved the ambiance and details of the outdoor movie night. They were very communicative leading up as there was a chance of rain. The seating and decorations were SO cute! Holly and her husband got everything set-up quickly and then came after and got it all that night. I have raved about them to everyone and look forward to working with them again!",
    author: "Brett B.",
    event: "Outdoor Movie Night"
  },
  {
    quote: "I cannot say enough good things about Holly + her team! They setup quickly, everything was beautiful, they went above + beyond to make our experience customized + special! We will definitely be Glamping with them again! Highly recommend!!",
    author: "Kelly K.",
    event: "Custom Experience"
  },
  {
    quote: "It was amazing! It's a great idea for an at home, cozy, camping experience. The set up, the décor, all the little accommodations, just perfect. We were comfortable and had an amazing night!",
    author: "Ashley B.",
    event: "Cozy Home Glamping"
  },
  {
    quote: "Cannot recommend them enough! They thought of everything and we had the best time glamping in our own backyard! Great customer service and experience!",
    author: "Amanda L.",
    event: "Backyard Glamping"
  },
  {
    quote: "I had an incredible experience glamping! The beds were very comfortable, and the tent was very clean. The tent was beautifully decorated to match our bachelorette party theme. I will be looking forward to booking with them again!",
    author: "Cathy B.",
    event: "Bachelorette Party"
  },
  {
    quote: "Holly and Joe truly go above and beyond and exceed expectations!!! We had an absolutely beautiful and romantic night under the stars! The set up of the tent was unbelievably cute and super clean!! Highly recommend for any type of special occasion or even just a romantic night with your significant other!",
    author: "Meghan B.",
    event: "Romantic Date Night"
  },
  {
    quote: "I would highly recommend Glamping WNY for a unique indoor or outdoor glamping experience. We booked 8 indoor tents for my daughters 10th birthday party. I did not have to do anything because they set everything up and they also took everything down the next day. Everything was very clean and their customer service was exceptional. I cannot wait to book them again!",
    author: "Lynne F.",
    event: "10th Birthday Party"
  },
  {
    quote: "The cutest and comfiest glamping experience ever! Everything I thought to bring with me was already provided with the set up. My favorite part was being able to watch a movie under the stars. I would totally book again and recommend to anyone who isn't the outdoors type but still wants to camp.",
    author: "Amanda K.",
    event: "Outdoor Movie Night"
  },
  {
    quote: "We used Glamping WNY for our wedding and it was the cherry on top of a perfect night. A couple of our friends booked tents for that night as well. Everything was set up so beautifully and the tents were so cozy. They will work with you on set up / take down times which made it so convenient for us. We will definitely be booking with them again in the future!!! What a great business",
    author: "Samantha S.",
    event: "Wedding Night"
  },
  {
    quote: "If you are thinking about it, DO IT!! My family and I had such a fun night in our own backyard...it was perfect! Holly and her husband were great. They were neat, tidy and made the experience one that we'll always remember. They literally setup everything and then arrive the next day to clean it all up for you. I highly recommend Glamping whenever you get the chance...you won't regret it! Ps. Everyone loved playing the oversized Connect4!!",
    author: "Laura N.",
    event: "Family Backyard Adventure"
  },
  {
    quote: "O my gosh it was incredible!!!!! My husband and I enjoyed a wonderful anniversary in our own backyard Holly and her crew were awesome!!!! super friendly and extremely helpful with technology to use film projector I highly recommend Glampingwny.com you will not be disappointed I will be doing this again for sure!!!!!",
    author: "Michelle P.",
    event: "Anniversary Celebration"
  },
  {
    quote: "Wow! We had a wonderful experience with Glamping WNY. The tent was gorgeous and more roomy than I originally thought. The bed was comfortable and I loved the lounge chairs. The extra add on of the projector was my favorite part. Overall I highly recommend!",
    author: "Stephanie L.",
    event: "Outdoor Glamping"
  },
  {
    quote: "What an amazing experience with Glamping WNY. I can not say enough about working with Holly. I would highly recommend this awesome service!",
    author: "Stacy D.",
    event: "Glamping Experience"
  },
  {
    quote: "This was such a fun, pleasant experience from start to finish!! Booking the tent for my niece's 12th bday to have a cousin crew sleep over was so easy. Holly was super friendly, had great communication and the tent/bedding/decorations were immaculate!!! We all slept great, the beds were extremely comfortable and clean. We had the best time watching movies on the projector, and the birthday girl felt extra special with the special glow package added on!! I would recommend this glamping experience to anyone looking for something unique, special and fun!!!",
    author: "KW",
    event: "12th Birthday Party"
  },
  {
    quote: "My daughter and her friends had an awesome experience. Everything was clean and cute and even better than it looked in the photos online. Holly and Joe were kind and professional and made setup and takedown look easy. This is something the kids won't soon forget - and all in the comfort of your home!",
    author: "Jennifer P.",
    event: "Kids Sleepover"
  },
  {
    quote: "If I could give Holly and Glamping WNY 10 stars I totally would! I mean wow! This Tiny Mafia package is above and beyond. My son and his best buddy had the best time of their lives. Glamping WNY not only set everything up perfectly, but her details are everything! She has thought of everything. The Balloon install was from Color Me Happy Balloon Co. and they were perfect for the set up. The set up was so fast and smooth I was blown away. If you are looking for a cute way to take a sleepover to the next level, Glamping WNY is the way to go! I seriously cannot wait to do an adult Glamping night!",
    author: "Sam N.",
    event: "Kids Sleepover"
  },
  {
    quote: "Super easy to deal with Holly was so accommodating and made such a great set up for my daughter's birthday camp out! Highly recommended",
    author: "Sara K.",
    event: "Birthday Camp Out"
  },
  {
    quote: "Holly created such a sweet little world for my children. Honestly the pictures don't do the experience justice. Not to mention she came back promptly the next morning to clean everything up. I would highly recommend!",
    author: "Mandy G.",
    event: "Children's Experience"
  },
  {
    quote: "Everything was perfect! They thought of everything. From set up, to take down, they do it all. I highly recommend Glamping WNY. I hosted a girls night with my nieces. The ages ranged from 8 to 25. Everyone loved the glamping set up.",
    author: "Katie L.",
    event: "Multi-Generation Girls Night"
  },
  {
    quote: "I rented a Glamping set up for my daughters birthday it was a huge hit!! Holly and her team were so friendly, my daughter and her cousins loved everything.",
    author: "Sarah S.",
    event: "Daughter's Birthday"
  },
  {
    quote: "So professional and the kids absolutely loved the lounge tent! Would highly recommend!",
    author: "Meridith W.",
    event: "Kids Lounge Experience"
  },
  {
    quote: "Glamping WNY did an amazing job making my daughters birthday so special. The picnic set up, balloons, and all the other décor was beautifully done. I definitely plan on using this service for future birthday parties or special events!",
    author: "Chelsea P.",
    event: "Daughter's Birthday"
  },
  {
    quote: "This was the best 16th birthday! Holly communicated great, set everything up and took it all down so quickly. The girls loved the décor & the experience! I highly recommend Glamping WNY. We will definitely be doing it again!",
    author: "Christy B.",
    event: "Sweet 16 Party"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Families Are Saying
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Read authentic reviews from 200+ happy families who've experienced 
            the magic of Glamping WNY across Western New York.
          </p>
          
          {/* Simple Stats */}
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
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute top-0 left-0 w-6 h-6 text-blue-100 -translate-x-1 -translate-y-1" />
                <blockquote className="text-gray-700 italic pl-4">
                  "{testimonial.quote.length > 150 
                    ? `${testimonial.quote.substring(0, 150)}...`
                    : testimonial.quote}"
                </blockquote>
              </div>
              
              {/* Author */}
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-blue-600">{testimonial.event}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            
            <blockquote className="text-2xl font-medium text-gray-900 mb-8 italic">
              "If I could give Holly and Glamping WNY 10 stars I totally would! I mean wow! This Tiny Mafia package is above and beyond. My son and his best buddy had the best time of their lives. Glamping WNY not only set everything up perfectly, but her details are everything! She has thought of everything."
            </blockquote>
            
            <div className="font-semibold text-gray-900 text-lg">Sam N.</div>
            <div className="text-blue-600">Kids Sleepover</div>
          </div>
        </div>

        {/* Share Your Experience */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              Share Your Experience With Us!
            </h2>
            
            <p className="text-lg mb-8 opacity-90">
              We recognize the importance of all feedback as it allows us to evolve and better serve our future glampers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://g.page/r/CYvXQVWWvbZsEAI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold transition-colors"
              >
                Review on Google
              </a>
              <a
                href="https://www.facebook.com/glampingwny/reviews/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold transition-colors"
              >
                Review on Facebook
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Create Your Own Magical Memories?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join the 200+ families who have experienced the magic of Glamping WNY. 
              Book your perfect glamping adventure today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-xl font-bold transition-colors inline-flex items-center justify-center"
              >
                Book Your Experience
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <a
                href="tel:+17162007692"
                className="bg-gray-100 text-gray-900 hover:bg-gray-200 px-8 py-4 rounded-xl font-bold transition-colors"
              >
                Call (716) 200-7692
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;