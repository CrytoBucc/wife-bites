import React from 'react';
import { User, Settings, BookOpen, Heart } from 'lucide-react';

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
          <nav className="space-y-1">
            <a
              href="#"
              className="bg-gray-50 dark:bg-gray-800 text-indigo-700 dark:text-indigo-200 hover:text-indigo-700 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium"
            >
              <User className="text-indigo-500 group-hover:text-indigo-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
              <span className="truncate">Profile</span>
            </a>

            <a
              href="#"
              className="text-gray-900 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
            >
              <BookOpen className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
              <span className="truncate">My Recipes</span>
            </a>

            <a
              href="#"
              className="text-gray-900 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
            >
              <Heart className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
              <span className="truncate">Favorites</span>
            </a>

            <a
              href="#"
              className="text-gray-900 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
            >
              <Settings className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
              <span className="truncate">Settings</span>
            </a>
          </nav>
        </aside>

        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white dark:bg-gray-800 py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Profile</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    This information will be displayed publicly so be careful what you share.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      Name
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="col-span-3">
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      About
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Brief description about yourself"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
                <button
                  type="submit"
                  className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}