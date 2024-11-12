import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';

export default function TrendingSection() {
  const trending = [
    {
      title: 'The Ultimate Guide to Sourdough',
      category: 'Techniques',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Wine Pairing Essentials',
      category: 'Drinks',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Farm to Table Movement',
      category: 'Food Culture',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl flex items-center">
              <TrendingUp className="h-8 w-8 mr-3 text-indigo-600" />
              Trending Now
            </h2>
            <p className="mt-3 text-xl text-gray-500 dark:text-gray-400">
              What's hot in the culinary world
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            View all
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trending.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-sm text-indigo-400 font-medium">
                  {item.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}