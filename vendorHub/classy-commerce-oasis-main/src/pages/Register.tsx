import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAccount } from '../context/AccountContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Register = () => {
  const { register } = useAccount();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await register(username, email, password);
    if (ok) navigate('/profile');
    else setError('Registration failed');
  };

  return (
    <div className="min-h-screen bg-white font-roboto">
      <Header />
      <main className="py-8 flex flex-col items-center">
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded shadow w-full max-w-md">
          <h2 className="text-2xl mb-6 font-semibold">Register</h2>
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required className="border rounded px-3 py-2 w-full mb-4" />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="border rounded px-3 py-2 w-full mb-4" />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="border rounded px-3 py-2 w-full mb-4" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Register</button>
          <div className="mt-4 text-sm">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
