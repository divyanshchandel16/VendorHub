import React from 'react';
import { useAccount } from '../context/AccountContext';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Profile = () => {
  const { user, logout } = useAccount();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-white font-roboto">
      <Header />
      <main className="py-8 flex flex-col items-center">
        <div className="bg-gray-50 p-8 rounded shadow w-full max-w-md">
          <h2 className="text-2xl mb-6 font-semibold">Profile</h2>
          <div className="mb-4"><strong>Username:</strong> {user.username}</div>
          <div className="mb-4"><strong>Email:</strong> {user.email}</div>
          <button onClick={() => { logout(); navigate('/'); }} className="bg-red-600 text-white px-4 py-2 rounded w-full">Logout</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
