// Booking Event Schema
export const getBookingEventSchema = (eventDetails: {
  name: string;
  startDate: string;
  endDate: string;
  price: number;
  priceCurrency?: string;
  location: string;
  description?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": eventDetails.name,
  "startDate": eventDetails.startDate,
  "endDate": eventDetails.endDate,
  "description": eventDetails.description || "Magical glamping birthday party experience in Western New York",
  "location": {
    "@type": "Place",
    "name": eventDetails.location,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Buffalo",
      "addressRegion": "NY",
      "postalCode": "14221",
      "addressCountry": "US"
    }
  },
  "offers": {
    "@type": "Offer",
    "price": eventDetails.price,
    "priceCurrency": eventDetails.priceCurrency || "USD",
    "availability": "https://schema.org/InStock",
    "validFrom": new Date().toISOString()
  },
  "organizer": {
    "@type": "Organization",
    "name": "Glamping WNY",
    "url": "https://glampingwny.com"
  }
});

// Aggregate Rating Schema
export const getAggregateRatingSchema = (ratingDetails: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": ratingDetails.ratingValue,
  "reviewCount": ratingDetails.reviewCount,
  "bestRating": ratingDetails.bestRating || 5,
  "worstRating": ratingDetails.worstRating || 1
});

// Local Business Schema
export const getLocalBusinessSchema = (businessDetails?: {
  name?: string;
  image?: string;
  telephone?: string;
  email?: string;
  priceRange?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": businessDetails?.name || "Glamping WNY",
  "image": businessDetails?.image || "https://glampingwny.com/wp-content/uploads/2024/03/og-image.jpg",
  "description": "Magical outdoor birthday experiences and glamping parties in Western New York.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Buffalo",
    "addressRegion": "NY",
    "postalCode": "14221",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.8864,
    "longitude": -78.8784
  },
  "url": "https://glampingwny.com",
  "telephone": businessDetails?.telephone || "+17165551234",
  "email": businessDetails?.email || "info@glampingwny.com",
  "priceRange": businessDetails?.priceRange || "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  }
});