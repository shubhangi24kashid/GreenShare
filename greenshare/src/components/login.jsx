import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { doSignInWithEmailAndPassword } from '../firebase/auth';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Both fields are required');
      return;
    }

    setIsLoggingIn(true);
    try {
      await doSignInWithEmailAndPassword(email, password);
<<<<<<< HEAD
      navigate('/dashboard');

=======
      navigate('/');
>>>>>>> b71c48ef65f7117e3303eb9d09abaf4ab63eb547
    } catch (error) {
      setErrorMessage(error.message || 'Login failed');
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Redirect if already logged in
<<<<<<< HEAD
  if (userLoggedIn) return <Navigate to="/dashboard" replace={true} />;
=======
  if (userLoggedIn) return <Navigate to="/" replace={true} />;
>>>>>>> b71c48ef65f7117e3303eb9d09abaf4ab63eb547

  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 p-8 shadow-xl border rounded-xl space-y-6 bg-white">
        <h3 className="text-2xl font-semibold text-center text-indigo-600">Login to Your Account</h3>

        <form onSubmit={onSubmit} className="space-y-5">
          {/* Email Field */}
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
              disabled={isLoggingIn}
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="input-field"
              disabled={isLoggingIn}
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <span className="text-red-600 font-bold block text-center">{errorMessage}</span>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoggingIn}
            className={`w-full px-4 py-2 text-white font-medium rounded-lg transition duration-300 ${
              isLoggingIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {isLoggingIn ? 'Logging In...' : 'Login'}
          </button>

          {/* Register Link */}
          <p className="text-sm text-center">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-indigo-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
