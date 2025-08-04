import { useState } from 'react';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(null);

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
      {/* Header Navigation */}
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-8">
        {/* Featured Artists Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <p className="text-gray-500 text-sm">Featured Artist {item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top 10 Chart Section */}
        <section className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Top 10 Badge */}
            <div className="flex-shrink-0 flex justify-center lg:justify-start">
              <div className="relative">
                {/* TOP text positioned on top-left of the circle, closer to the circle */}
                <div className="absolute -top-1 -left-3 text-sm text-gray-400 uppercase tracking-[0.3em] font-thin">
                  TOP
                </div>
                {/* Circle with gradient border */}
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg relative">
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300 to-teal-400 p-1">
                    <div className="w-full h-full bg-white rounded-full"></div>
                  </div>
                  {/* Number 10 */}
                  <div className="relative z-10">
                    <div className="text-6xl font-thin text-gray-400">10</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column (1-5) */}
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((rank) => (
                    <ChartItem key={rank} rank={rank} />
                  ))}
                </div>

                {/* Right Column (6-10) */}
                <div className="space-y-4">
                  {[6, 7, 8, 9, 10].map((rank) => (
                    <ChartItem key={rank} rank={rank} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore by Artist Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-thin text-gray-900 mb-6 text-center tracking-wide">
            EXPLORE BY ARTIST
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-3 hover:bg-gray-300 transition-colors cursor-pointer"></div>
                <p className="text-sm text-gray-600 font-light">Artist {item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Explore by Genre Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-thin text-gray-900 mb-6 text-center tracking-wide">
            EXPLORE BY GENRE
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {['NY DRILL', 'hyperpop', 'House', 'Trap', 'underground'].map((genre) => (
              <div key={genre} className="text-center">
                <div className="aspect-square bg-gray-200 rounded-lg mb-3 hover:bg-gray-300 transition-colors cursor-pointer flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-300 rounded"></div>
                </div>
                <p className="text-sm text-gray-600 font-light">{genre}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

// Chart Item Component
function ChartItem({ rank }) {
  return (
    <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {/* Rank Number */}
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
        <span className="text-lg font-light text-gray-900">{rank}</span>
      </div>

      {/* Thumbnail */}
      <div className="w-12 h-12 bg-gray-200 rounded flex-shrink-0"></div>

      {/* Song Info */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-light text-gray-900 truncate">Artist Name</p>
            <p className="text-xs text-gray-500 truncate font-light">Song Title</p>
          </div>
          <div className="mt-1 sm:mt-0 sm:ml-4">
            <span className="text-sm font-light text-gray-900">$XXX.XX</span>
          </div>
        </div>
      </div>
    </div>
  );
}