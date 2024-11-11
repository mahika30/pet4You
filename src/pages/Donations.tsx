import React from 'react';
import { useForm } from 'react-hook-form';
import { PawPrint, Heart } from 'lucide-react';

interface SurrenderFormData {
  petName: string;
  petType: string;
  age: string;
  reason: string;
  ownerName: string;
  email: string;
  phone: string;
}

const Donations = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SurrenderFormData>();

  const onSubmit = (data: SurrenderFormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Heart className="w-12 h-12 text-amber-600 mx-auto" />
        <h1 className="text-4xl font-bold">Pet Surrender Form</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We understand that surrendering a pet is a difficult decision. Please fill out this form
          to help us find the best new home for your pet.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pet Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <PawPrint className="w-5 h-5 text-amber-600" />
              Pet Information
            </h2>
            
            <div>
              <label htmlFor="petName" className="label">Pet Name</label>
              <input
                {...register('petName', { required: 'Pet name is required' })}
                type="text"
                id="petName"
                className="input"
              />
              {errors.petName && (
                <p className="mt-1 text-red-500 text-sm">{errors.petName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="petType" className="label">Pet Type</label>
              <select
                {...register('petType', { required: 'Pet type is required' })}
                id="petType"
                className="input"
              >
                <option value="">Select pet type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="other">Other</option>
              </select>
              {errors.petType && (
                <p className="mt-1 text-red-500 text-sm">{errors.petType.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="age" className="label">Pet Age</label>
              <input
                {...register('age', { required: 'Age is required' })}
                type="text"
                id="age"
                className="input"
                placeholder="e.g., 2 years"
              />
              {errors.age && (
                <p className="mt-1 text-red-500 text-sm">{errors.age.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="reason" className="label">Reason for Surrender</label>
              <textarea
                {...register('reason', { required: 'Reason is required' })}
                id="reason"
                rows={4}
                className="input"
              />
              {errors.reason && (
                <p className="mt-1 text-red-500 text-sm">{errors.reason.message}</p>
              )}
            </div>
          </div>

          {/* Owner Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Heart className="w-5 h-5 text-amber-600" />
              Owner Information
            </h2>
            
            <div>
              <label htmlFor="ownerName" className="label">Your Name</label>
              <input
                {...register('ownerName', { required: 'Name is required' })}
                type="text"
                id="ownerName"
                className="input"
              />
              {errors.ownerName && (
                <p className="mt-1 text-red-500 text-sm">{errors.ownerName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="label">Email</label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                id="email"
                className="input"
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="label">Phone Number</label>
              <input
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9-+()]*$/,
                    message: 'Invalid phone number',
                  },
                })}
                type="tel"
                id="phone"
                className="input"
              />
              {errors.phone && (
                <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-6">
          <button type="submit" className="btn btn-primary">
            Submit Form
          </button>
        </div>
      </form>

      {/* Additional Information */}
      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">What Happens Next?</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>We'll review your submission within 24-48 hours</li>
          <li>A team member will contact you to discuss the next steps</li>
          <li>We'll work together to find the best solution for your pet</li>
          <li>Your pet's well-being is our top priority throughout the process</li>
        </ul>
      </div>
    </div>
  );
};

export default Donations;