import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dog, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/pet-care', label: 'Pet Care' },
    { path: '/news', label: 'News' },
    { path: '/hostels', label: 'Hostels' },
    { path: '/donations', label: 'Donations' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Dog className="h-8 w-8 text-amber-600" />
            <span className="text-xl font-bold text-amber-600">Pet4You</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`${
                  location.pathname === path
                    ? 'text-amber-600 font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-500'
                } transition-colors duration-200`}
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5 text-gray-600" />
            ) : (
              <Sun className="h-5 w-5 text-gray-300" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;