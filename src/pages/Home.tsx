import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Briefcase } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to AppointEase</h1>
      <p className="text-xl mb-8">Streamline your appointments with ease</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon={<Calendar size={48} />}
          title="Easy Booking"
          description="Book appointments with just a few clicks"
        />
        <FeatureCard
          icon={<Users size={48} />}
          title="User-Friendly"
          description="Manage your appointments effortlessly"
        />
        <FeatureCard
          icon={<Briefcase size={48} />}
          title="Business Management"
          description="Efficiently manage your business calendar"
        />
      </div>
      
      <Link
        to="/register"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Get Started
      </Link>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Home;