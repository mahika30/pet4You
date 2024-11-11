import React, { useState } from 'react';
import { MapPin, Star, Search } from 'lucide-react';

interface Hostel {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
  amenities: string[];
}

const Hostels = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const hostels: Hostel[] = [
    {
      id: 1,
      name: 'Pawsome Paradise',
      location: 'Downtown Pet City',
      rating: 4.8,
      reviews: 128,
      price: '$45/night',
      image: 'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?auto=format&fit=crop&q=80&w=500',
      amenities: ['24/7 Care', 'Grooming', 'Vet On Call', 'Webcam Access'],
    },
    {
      id: 2,
      name: 'Cozy Tails Inn',
      location: 'Westside Gardens',
      rating: 4.6,
      reviews: 95,
      price: '$38/night',
      image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&q=80&w=500',
      amenities: ['Indoor Play Area', 'Training', 'Pet Spa', 'Pick-up Service'],
    },
    {
      id: 3,
      name: 'Happy Paws Resort',
      location: 'Sunny Valley',
      rating: 4.9,
      reviews: 156,
      price: '$52/night',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=500',
      amenities: ['Pool', 'Agility Course', 'Luxury Suites', 'Webcam Access'],
    },
  ];

  const filteredHostels = hostels.filter(hostel =>
    hostel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hostel.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Search Section */}
      <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by hostel name or location..."
            className="input pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* Hostels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredHostels.map(hostel => (
          <div
            key={hostel.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <div className="relative h-48">
              <img
                src={hostel.image}
                alt={hostel.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-amber-600 font-semibold">
                {hostel.price}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{hostel.name}</h2>
              <div className="flex items-center space-x-2 mb-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  {hostel.location}
                </span>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-4 h-4 text-amber-500" />
                <span className="font-semibold">{hostel.rating}</span>
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  ({hostel.reviews} reviews)
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold">Amenities:</h3>
                <div className="flex flex-wrap gap-2">
                  {hostel.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
              <button className="mt-6 btn btn-primary w-full">Book Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredHostels.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300">
            No hostels found matching your search criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Hostels;