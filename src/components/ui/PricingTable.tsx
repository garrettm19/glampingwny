import React from 'react';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Basic",
    price: "$29",
    description: "Perfect for individuals getting started",
    features: [
      "1 user",
      "Basic features",
      "24/7 support",
      "1GB storage"
    ]
  },
  {
    name: "Pro",
    price: "$79",
    description: "Best for growing businesses",
    features: [
      "5 users",
      "Advanced features",
      "Priority support",
      "10GB storage",
      "Custom integrations"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For large scale organizations",
    features: [
      "Unlimited users",
      "All features",
      "Dedicated support",
      "Unlimited storage",
      "Custom solutions",
      "API access"
    ]
  }
];

const PricingTable: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg shadow-lg overflow-hidden ${
                tier.isPopular ? 'ring-2 ring-indigo-500' : ''
              }`}
            >
              <div className="p-6 bg-white">
                {tier.isPopular && (
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-indigo-500" />
                      <span className="ml-3 text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full px-6 py-3 rounded-md text-center font-medium ${
                    tier.isPopular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                  }`}
                >
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;