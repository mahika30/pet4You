import React from 'react';
import { Star } from 'lucide-react';

const News = () => {
  const famousPets = [
    {
      id: 1,
      name: 'Grumpy Cat',
      realName: 'Tardar Sauce',
      description: 'The internet sensation known for her permanently grumpy expression.',
      image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=500',
      followers: '2.4M',
      platform: 'Instagram',
    },
    {
      id: 2,
      name: 'Doug the Pug',
      realName: 'Doug',
      description: 'The king of pop culture with multiple book deals and merchandise lines.',
      image: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&q=80&w=500',
      followers: '3.8M',
      platform: 'Instagram',
    },
    {
      id: 3,
      name: 'Nala Cat',
      realName: 'Nala',
      description: 'One of the most famous cats on Instagram, known for her blue eyes.',
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80&w=500',
      followers: '4.3M',
      platform: 'Instagram',
    },
  ];

  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center space-x-2 mb-8">
          <Star className="w-8 h-8 text-amber-600" />
          <h1 className="text-3xl font-bold">Famous Pets Gallery</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {famousPets.map(pet => (
            <div
              key={pet.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="relative h-64">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                  {pet.followers} followers
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{pet.name}</h2>
                <p className="text-sm text-amber-600 mb-3">Real name: {pet.realName}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {pet.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {pet.platform}
                  </span>
                  <button className="btn btn-primary">Read Story</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Subscribe to our newsletter for the latest pet stories and news.
        </p>
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input flex-1"
          />
          <button type="submit" className="btn btn-primary whitespace-nowrap">
            Subscribe Now
          </button>
        </form>
      </section>
    </div>
  );
};

export default News;