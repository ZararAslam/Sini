import { useState } from 'react';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon, UserIcon, ShoppingCartIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function MyCollection() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('My Collection');
  const [sortBy, setSortBy] = useState('most recent');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Navigate to respective pages
    switch(tab) {
      case 'Artists':
        router.push('/artists');
        break;
      case 'Albums':
        // router.push('/albums'); // Uncomment when albums page is ready
        break;
      case 'Clubs':
        router.push('/clubs');
        break;
      case 'My Collection':
        router.push('/collection');
        break;
    }
  };

  const sortOptions = ['most recent', 'most $$$'];

  // Placeholder collection items (will be replaced with real data later)
  const hasCollectionItems = false; // Set to true when user has items

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation - Identical to Homepage */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => router.push('/')}
                className="w-12 h-12 bg-white border-2 border-teal-400 rounded-full flex items-center justify-center focus:outline-none"
              >
                <span className="text-teal-400 font-light text-lg">Sini</span>
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="hidden md:flex items-center space-x-8">
              {['Artists', 'Albums', 'Clubs'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className="px-3 py-2 text-sm font-light transition-colors text-gray-500 hover:text-gray-700"
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search artists, albums, clubs..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => handleTabClick('My Collection')}
                className={`px-4 py-2 text-sm font-light border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
                  activeTab === 'My Collection'
                    ? 'text-teal-600 bg-teal-50 border-teal-600'
                    : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
                }`}
              >
                My Collection
              </button>
              <button className="px-4 py-2 text-sm font-light text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Artist Portal
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <UserIcon className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500 relative">
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-teal-500 text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-8">
        {/* My Collection Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-thin text-gray-900 tracking-wide">
            MY COLLECTION
          </h1>

          {/* Sort Dropdown */}
          <div className="relative">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-light text-gray-600">SORT:</span>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex items-center space-x-1 text-sm font-light text-gray-700 bg-white border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                <span>{sortBy}</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setIsDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm font-light hover:bg-gray-50 ${
                      sortBy === option ? 'text-teal-600 bg-teal-50' : 'text-gray-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Collection Content */}
        {!hasCollectionItems ? (
          /* Empty State */
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <p className="text-lg font-light text-gray-500">
                Your collection will appear here
              </p>
            </div>
          </div>
        ) : (
          /* Collection Grid (for when items exist) */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {/* Placeholder items - will be replaced with real data */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="group cursor-pointer">
                {/* Album/Song Image */}
                <div className="aspect-square bg-gray-200 rounded-lg mb-3 group-hover:bg-gray-300 transition-colors">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-300 rounded"></div>
                  </div>
                </div>
                
                {/* Song Info */}
                <div className="text-center">
                  <h3 className="text-sm font-light text-gray-900 truncate mb-1">
                    Song Title {index + 1}
                  </h3>
                  <p className="text-xs font-light text-gray-500 italic truncate">
                    Artist Name
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}