import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import MerchantDashboard from './pages/MerchantDashboard';
import BookAppointment from './pages/BookAppointment';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/merchant-dashboard" element={<MerchantDashboard />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;