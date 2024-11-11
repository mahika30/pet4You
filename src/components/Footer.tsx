import React from 'react';
import { Link } from 'react-router-dom';
import { Dog, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Dog className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-bold text-amber-600">Pet4You</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Finding forever homes for our furry friends.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/pet-care" className="text-gray-600 dark:text-gray-300 hover:text-amber-600">Pet Care</Link></li>
              <li><Link to="/news" className="text-gray-600 dark:text-gray-300 hover:text-amber-600">News</Link></li>
              <li><Link to="/hostels" className="text-gray-600 dark:text-gray-300 hover:text-amber-600">Hostels</Link></li>
              <li><Link to="/donations" className="text-gray-600 dark:text-gray-300 hover:text-amber-600">Donations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>123 Pet Street</li>
              <li>Pet City, PC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@pet4you.com</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-amber-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-amber-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-amber-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-amber-600">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Pet4You. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;