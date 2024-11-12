import React from 'react';
import { Globe, Map, Users, Utensils, BookOpen } from 'lucide-react';

export default function FoodJourney() {
  const destinations = [
    {
      country: 'Japan',
      image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Tokyo Street Food Adventure',
      description: 'Explore the vibrant street food scene of Tokyo, from ramen to yakitori.',
      price: '$75',
    },
    {
      country: 'Italy',
      image: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Tuscan Cooking Experience',
      description: 'Learn authentic pasta making and wine pairing in the heart of Tuscany.',
      price: '$120',
    },
    {
      country: 'Thailand',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Bangkok Market Tour',
      description: 'Discover exotic ingredients and traditional Thai cooking methods.',
      price: '$65',
    },
  ];

  const experiences = [
    {
      title: 'Local Home Dining',
      icon: Users,
      description: 'Share authentic meals with local families',
    },
    {
      title: 'Cooking Classes',
      icon: Utensils,
      description: 'Learn traditional recipes and techniques',
    },
    {
      title: 'Food Tours',
      icon: Map,
      description: 'Guided tours of the best local spots',
    },
    {
      title: 'Cultural Workshops',
      icon: BookOpen,
      description: 'Deep dive into food history and culture',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Various international dishes"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Embark on a Global Culinary Adventure
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Discover authentic flavors from street food to fine dining around the world. Join us on a journey of taste and tradition.
          </p>
          <div className="mt-10">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              <Globe className="mr-2 h-5 w-5" />
              Start Exploring
            </button>
          </div>
        </div>
      </div>

      {/* Top Destinations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Popular Food Destinations
        </h2>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
          Explore curated culinary experiences in world-renowned food destinations.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {destinations.map((destination) => (
            <div
              key={destination.country}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
            >
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={destination.image} alt={destination.title} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {destination.country}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {destination.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                    {destination.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {destination.price}
                  </span>
                  <button className="btn">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Culinary Experiences */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Immersive Culinary Experiences
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Choose from a variety of authentic food experiences led by local experts.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {experiences.map(({ title, icon: Icon, description }) => (
              <div
                key={title}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Icon className="h-8 w-8 text-indigo-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Sign up for Tastes of the World
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-indigo-200">
              Get exclusive updates on new food destinations, seasonal recipes, and travel deals.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}