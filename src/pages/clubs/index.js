import { useState } from 'react';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Clubs() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Clubs');

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
    }
  };

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
                  className={`px-3 py-2 text-sm font-light transition-colors ${
                    activeTab === tab
                      ? 'text-teal-600 border-b-2 border-teal-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
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
                onClick={() => router.push('/collection')}
                className="px-4 py-2 text-sm font-light text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
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
      <main className="flex-1 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-thin text-orange-400 tracking-wide">
            COMING SOON
          </h1>
        </div>
      </main>
    </div>
  );
}