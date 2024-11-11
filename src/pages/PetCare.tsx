import React from 'react';
import { Book, Heart, ShoppingBag } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface TipFormData {
  title: string;
  description: string;
  category: string;
}

const PetCare = () => {
  const { register, handleSubmit, reset } = useForm<TipFormData>();

  const onSubmit = (data: TipFormData) => {
    console.log(data);
    reset();
  };

  const tips = [
    {
      id: 1,
      title: 'Regular Exercise',
      description: 'Daily walks and playtime keep your pet healthy and happy.',
      category: 'Health',
    },
    {
      id: 2,
      title: 'Balanced Diet',
      description: 'Feed your pet high-quality food appropriate for their age and size.',
      category: 'Nutrition',
    },
    {
      id: 3,
      title: 'Grooming Schedule',
      description: 'Regular grooming maintains hygiene and prevents health issues.',
      category: 'Care',
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Pet Food',
      description: 'Nutritionally complete dry food for adult dogs',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 2,
      name: 'Grooming Kit',
      description: 'Complete grooming set for cats and dogs',
      price: '$39.99',
      image: 'https://images.unsplash.com/photo-1583336663277-620dc1996580?auto=format&fit=crop&q=80&w=500',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Tips Database */}
      <section>
        <div className="flex items-center space-x-2 mb-8">
          <Book className="w-8 h-8 text-amber-600" />
          <h2 className="text-3xl font-bold">Pet Care Tips</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map(tip => (
            <div
              key={tip.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <span className="inline-block px-3 py-1 rounded-full text-sm bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 mb-3">
                {tip.category}
              </span>
              <p className="text-gray-600 dark:text-gray-300">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tip Submission Form */}
      <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
        <div className="flex items-center space-x-2 mb-8">
          <Heart className="w-8 h-8 text-amber-600" />
          <h2 className="text-3xl font-bold">Share Your Tips</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="title" className="label">Tip Title</label>
            <input
              {...register('title')}
              type="text"
              id="title"
              className="input"
              placeholder="Enter your tip title"
            />
          </div>
          <div>
            <label htmlFor="category" className="label">Category</label>
            <select {...register('category')} id="category" className="input">
              <option value="Health">Health</option>
              <option value="Nutrition">Nutrition</option>
              <option value="Care">Care</option>
              <option value="Training">Training</option>
            </select>
          </div>
          <div>
            <label htmlFor="description" className="label">Description</label>
            <textarea
              {...register('description')}
              id="description"
              rows={4}
              className="input"
              placeholder="Share your pet care tip"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Tip
          </button>
        </form>
      </section>

      {/* Product Showcase */}
      <section>
        <div className="flex items-center space-x-2 mb-8">
          <ShoppingBag className="w-8 h-8 text-amber-600" />
          <h2 className="text-3xl font-bold">Recommended Products</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row"
            >
              <div className="md:w-1/2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                <p className="text-2xl font-bold text-amber-600">{product.price}</p>
                <button className="mt-4 btn btn-primary">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PetCare;