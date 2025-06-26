import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, Calendar, Users, MapPin, Star, Sparkles } from 'lucide-react';

interface SearchFilters {
  query: string;
  packageType: string;
  priceRange: string;
  guestCount: string;
  theme: string;
  location: string;
}

interface SearchResult {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const AdvancedSearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    packageType: '',
    priceRange: '',
    guestCount: '',
    theme: '',
    location: ''
  });

  const searchResults: SearchResult[] = [
    {
      id: '1',
      title: 'Indoor Glamping - Princess Theme',
      type: 'Indoor',
      price: 275,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      description: 'Magical princess-themed indoor glamping experience',
      features: ['Princess decorations', 'Tiaras included', 'Memory foam beds'],
      popular: true
    },
    {
      id: '2',
      title: 'Bell Tent - Romantic Setup',
      type: 'Outdoor',
      price: 550,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=300&h=200&fit=crop',
      description: 'Romantic outdoor bell tent perfect for couples',
      features: ['16ft bell tent', 'Romantic lighting', 'Memory foam beds']
    },
    {
      id: '3',
      title: 'Spa Party Experience',
      type: 'Spa',
      price: 325,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&h=200&fit=crop',
      description: 'Complete spa party with all essentials',
      features: ['Spa treatments', 'Relaxation setup', 'All supplies included']
    }
  ];

  const filteredResults = useMemo(() => {
    return searchResults.filter(result => {
      const matchesQuery = result.title.toLowerCase().includes(filters.query.toLowerCase()) ||
                          result.description.toLowerCase().includes(filters.query.toLowerCase());
      const matchesType = !filters.packageType || result.type === filters.packageType;
      const matchesPrice = !filters.priceRange || 
        (filters.priceRange === 'under-300' && result.price < 300) ||
        (filters.priceRange === '300-500' && result.price >= 300 && result.price <= 500) ||
        (filters.priceRange === 'over-500' && result.price > 500);
      
      return matchesQuery && matchesType && matchesPrice;
    });
  }, [filters, searchResults]);

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      query: '',
      packageType: '',
      priceRange: '',
      guestCount: '',
      theme: '',
      location: ''
    });
  };

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-20 right-4 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
        aria-label="Advanced Search"
      >
        <Search className="w-6 h-6" />
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center">
                  <Search className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Find Your Perfect Experience</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex">
                {/* Filters Sidebar */}
                <div className="w-1/3 p-6 border-r bg-gray-50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Filter className="w-5 h-5 mr-2" />
                      Filters
                    </h3>
                    <button
                      onClick={clearFilters}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Clear All
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Search Query */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Search
                      </label>
                      <input
                        type="text"
                        value={filters.query}
                        onChange={(e) => handleFilterChange('query', e.target.value)}
                        placeholder="Search experiences..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Package Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Package Type
                      </label>
                      <select
                        value={filters.packageType}
                        onChange={(e) => handleFilterChange('packageType', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">All Types</option>
                        <option value="Indoor">Indoor Glamping</option>
                        <option value="Outdoor">Outdoor Bell Tents</option>
                        <option value="Spa">Spa Parties</option>
                      </select>
                    </div>

                    {/* Price Range */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price Range
                      </label>
                      <select
                        value={filters.priceRange}
                        onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Any Price</option>
                        <option value="under-300">Under $300</option>
                        <option value="300-500">$300 - $500</option>
                        <option value="over-500">Over $500</option>
                      </select>
                    </div>

                    {/* Guest Count */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Guest Count
                      </label>
                      <select
                        value={filters.guestCount}
                        onChange={(e) => handleFilterChange('guestCount', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Any Size</option>
                        <option value="1-4">1-4 guests</option>
                        <option value="5-8">5-8 guests</option>
                        <option value="9-12">9-12 guests</option>
                        <option value="13+">13+ guests</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="flex-1 p-6 max-h-[70vh] overflow-y-auto">
                  <div className="mb-4">
                    <p className="text-gray-600">
                      {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
                    </p>
                  </div>

                  <div className="space-y-4">
                    {filteredResults.map((result) => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                      >
                        <img
                          src={result.image}
                          alt={result.title}
                          className="w-24 h-24 object-cover rounded-lg mr-4"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-gray-900 flex items-center">
                                {result.title}
                                {result.popular && (
                                  <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
                                    <Star className="w-3 h-3 mr-1 fill-current" />
                                    Popular
                                  </span>
                                )}
                              </h3>
                              <p className="text-sm text-gray-600">{result.type} Package</p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-blue-600">${result.price}</div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                {result.rating}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700 text-sm mb-2">{result.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {result.features.slice(0, 3).map((feature, index) => (
                              <span
                                key={index}
                                className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {filteredResults.length === 0 && (
                    <div className="text-center py-12">
                      <Sparkles className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                      <p className="text-gray-600">Try adjusting your filters to see more options.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdvancedSearch;