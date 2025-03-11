// Register.jsx
import React, { useState } from 'react';
import './Register.css';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';

const Register = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password || !confirmPassword) {
      setErrorMessage('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setIsRegistering(true);
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      navigate('/home');
    } catch (error) {
      setErrorMessage(error.message || 'Registration failed');
    } finally {
      setIsRegistering(false);
    }
  };

  if (userLoggedIn) return <Navigate to="/home" replace={true} />;

  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 p-8 shadow-xl border rounded-xl space-y-6 bg-white">
        <h3 className="text-2xl font-semibold text-center text-indigo-600">Create a New Account</h3>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="input-field"
              disabled={isRegistering}
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Create a password"
              className="input-field"
              disabled={isRegistering}
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              autoComplete="off"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
              className="input-field"
              disabled={isRegistering}
            />
          </div>

          {errorMessage && (
            <span className="text-red-600 font-bold block text-center">{errorMessage}</span>
          )}

          <button
            type="submit"
            disabled={isRegistering}
            className={`w-full px-4 py-2 text-white font-medium rounded-lg transition duration-300 ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
          >
            {isRegistering ? 'Signing Up...' : 'Sign Up'}
          </button>

          <p className="text-sm text-center">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-indigo-600 hover:underline">Login here</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;