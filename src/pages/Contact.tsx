import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      details: ['(555) 123-4567', '(555) 765-4321'],
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      details: ['info@pet4you.com', 'support@pet4you.com'],
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      details: ['123 Pet Street', 'Pet City, PC 12345'],
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat-Sun: 10:00 AM - 4:00 PM'],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Have questions about pet adoption or our services? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-amber-600">{info.icon}</div>
                  <h3 className="font-semibold">{info.title}</h3>
                </div>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
              <MapPin className="w-12 h-12 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="label">Name</label>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                id="name"
                className="input"
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
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
              <label htmlFor="subject" className="label">Subject</label>
              <input
                {...register('subject', { required: 'Subject is required' })}
                type="text"
                id="subject"
                className="input"
              />
              {errors.subject && (
                <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="label">Message</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                id="message"
                rows={6}
                className="input"
              />
              {errors.message && (
                <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;