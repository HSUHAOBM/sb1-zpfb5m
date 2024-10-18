import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, LogIn } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Calendar className="mr-2" />
          AppointEase
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/book-appointment" className="hover:text-blue-200">Book Appointment</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-200 flex items-center">
                <LogIn className="mr-1" size={18} />
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-blue-200 flex items-center">
                <User className="mr-1" size={18} />
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;