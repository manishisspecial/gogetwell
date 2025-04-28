import React from 'react';
import logo from '../logo/logo-dark-full.png';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ecfeff] py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <img src={logo} alt="GoGetWell Logo" className="h-12 mb-6" />
        <h2 className="text-3xl font-bold text-cyan-700 mb-2 text-center">Welcome Back</h2>
        <p className="text-cyan-900 mb-6 text-center">Sign in to your GoGetWell.AI account</p>
        <form className="w-full mb-4">
          <div className="mb-4">
            <label className="block text-cyan-700 mb-1" htmlFor="email">Email</label>
            <input className="w-full px-4 py-2 rounded border border-cyan-200 focus:ring-2 focus:ring-cyan-400" type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-cyan-700 mb-1" htmlFor="password">Password</label>
            <input className="w-full px-4 py-2 rounded border border-cyan-200 focus:ring-2 focus:ring-cyan-400" type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="w-full bg-cyan-700 text-white font-bold py-2 rounded-full shadow hover:bg-cyan-500 transition">Sign In</button>
        </form>
        <button className="w-full flex items-center justify-center gap-2 bg-white border border-cyan-200 text-cyan-700 font-semibold py-2 rounded-lg shadow hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition mb-4">
          <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.9 29.9 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.2 4.5 29.4 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.5 20-21 0-1.3-.1-2.7-.3-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13 24 13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.2 4.5 29.4 3 24 3c-7.2 0-13 5.8-13 13 0 2.1.5 4.1 1.3 5.7z"/><path fill="#FBBC05" d="M24 44c5.9 0 10.7-1.9 14.3-5.1l-6.6-5.4C29.7 35.5 27 36.5 24 36.5c-5.9 0-10.7-3.9-12.4-9.1l-7 5.4C7.5 41.5 15.1 44 24 44z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7C34.7 33.9 29.9 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.2 4.5 29.4 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.5 20-21 0-1.3-.1-2.7-.3-4z"/></g></svg>
          Sign in with Google
        </button>
        <div className="text-center mt-4">
          <a href="/demo" className="text-cyan-700 font-semibold hover:underline">Don't have an account? Get Started</a>
        </div>
      </div>
    </div>
  );
}

export default Login; 