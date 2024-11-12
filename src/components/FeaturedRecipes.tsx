import React from 'react';
import { Clock, Users } from 'lucide-react';

export default function FeaturedRecipes() {
  const recipes = [
    {
      title: 'Perfect Pasta Carbonara',
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      time: '30 min',
      servings: '4',
      difficulty: 'Medium',
    },
    {
      title: 'Classic French Croissants',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      time: '3 hrs',
      servings: '8',
      difficulty: 'Advanced',
    },
    {
      title: 'Asian Fusion Bowl',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      time: '45 min',
      servings: '2',
      difficulty: 'Easy',
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Featured Recipes
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Hand-picked recipes from our expert chefs
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={recipe.image} alt={recipe.title} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {recipe.title}
                  </h3>
                  <div className="mt-3 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {recipe.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {recipe.servings} servings
                    </div>
                  </div>
                  <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}