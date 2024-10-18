import React, { useState } from 'react';
import { Calendar, Clock, User, Edit2, X } from 'lucide-react';

const MerchantDashboard: React.FC = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, service: 'Haircut', date: '2024-03-15', time: '14:00', client: 'John Doe' },
    { id: 2, service: 'Manicure', date: '2024-03-15', time: '16:00', client: 'Jane Smith' },
    { id: 3, service: 'Massage', date: '2024-03-16', time: '10:00', client: 'Alice Johnson' },
  ]);

  const handleDeleteAppointment = (id: number) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Merchant Dashboard</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Upcoming Appointments</h3>
        {appointments.length > 0 ? (
          <ul className="space-y-4">
            {appointments.map((appointment) => (
              <li key={appointment.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">{appointment.service}</h4>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <User size={16} className="mr-1" />
                      <span className="mr-3">{appointment.client}</span>
                      <Calendar size={16} className="mr-1" />
                      <span className="mr-3">{appointment.date}</span>
                      <Clock size={16} className="mr-1" />
                      <span>{appointment.time}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-full">
                      <Edit2 size={20} />
                    </button>
                    <button
                      className="p-2 text-red-600 hover:bg-red-100 rounded-full"
                      onClick={() => handleDeleteAppointment(appointment.id)}
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">You have no upcoming appointments.</p>
        )}
      </div>
      <div className="mt-8 space-y-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Manage Services
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4">
          Set Availability
        </button>
      </div>
    </div>
  );
};

export default MerchantDashboard;