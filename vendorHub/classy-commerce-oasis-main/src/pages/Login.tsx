import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAccount } from '../context/AccountContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Login = () => {
  const { login } = useAccount();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await login(email, password);
    if (ok) navigate('/');
    else setError('Invalid credentials');
  };

  return (
    <div className="min-h-screen bg-white font-roboto">
      <Header />
      <main className="py-8 flex flex-col items-center">
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded shadow w-full max-w-md">
          <h2 className="text-2xl mb-6 font-semibold">Login</h2>
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="border rounded px-3 py-2 w-full mb-4" />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="border rounded px-3 py-2 w-full mb-4" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Login</button>
          <div className="mt-4 text-sm">Don't have an account? <Link to="/register" className="text-blue-600">Register</Link></div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
