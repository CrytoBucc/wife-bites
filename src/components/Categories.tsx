import React from 'react';
import { Utensils, Coffee, Wine, Cake } from 'lucide-react';

export default function Categories() {
  const categories = [
    { icon: Utensils, name: 'Main Dishes', count: '320+ recipes' },
    { icon: Coffee, name: 'Breakfast', count: '150+ recipes' },
    { icon: Cake, name: 'Desserts', count: '200+ recipes' },
    { icon: Wine, name: 'Drinks', count: '100+ recipes' },
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Browse Categories
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Find recipes for any occasion
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ icon: Icon, name, count }) => (
            <div
              key={name}
              className="relative group bg-white dark:bg-gray-900 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 ring-4 ring-white dark:ring-gray-900">
                  <Icon className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {name}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{count}</p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}