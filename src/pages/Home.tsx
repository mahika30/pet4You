import React from 'react';
import { PawPrint, Heart, Search } from 'lucide-react';

const Home = () => {
  const featuredPets = [
    {
      id: 1,
      name: 'Luna',
      type: 'Dog',
      breed: 'Golden Retriever',
      age: '2 years',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 2,
      name: 'Oliver',
      type: 'Cat',
      breed: 'British Shorthair',
      age: '1 year',
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 3,
      name: 'Max',
      type: 'Dog',
      breed: 'Beagle',
      age: '3 years',
      image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=500',
    },
  ];

  const services = [
    {
      id: 1,
      title: 'Pet Adoption',
      description: 'Find your perfect companion from our carefully vetted pets.',
      icon: <Heart className="w-6 h-6" />,
    },
    {
      id: 2,
      title: 'Pet Care Tips',
      description: 'Expert advice on pet health, training, and wellness.',
      icon: <PawPrint className="w-6 h-6" />,
    },
    {
      id: 3,
      title: 'Pet Hostels',
      description: 'Safe and comfortable boarding for your furry friends.',
      icon: <Search className="w-6 h-6" />,
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=1200"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Find Your Perfect Pet Companion
            </h1>
            <p className="text-xl mb-8">
              Discover joy and unconditional love with our adorable pets waiting for their forever homes.
            </p>
            <button className="btn btn-primary">
              Adopt Now
            </button>
          </div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Pets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPets.map(pet => (
            <div
              key={pet.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pet.name}</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>Type: {pet.type}</p>
                  <p>Breed: {pet.breed}</p>
                  <p>Age: {pet.age}</p>
                </div>
                <button className="mt-4 btn btn-primary w-full">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(service => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center"
              >
                <div className="inline-block p-3 bg-amber-100 dark:bg-amber-900 rounded-full text-amber-600 dark:text-amber-300 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your New Best Friend?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Browse our available pets and take the first step towards bringing
            home your perfect companion.
          </p>
          <button className="btn btn-primary">
            View Available Pets
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;