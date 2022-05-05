import React, { useState } from 'react';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, existingUser, signInError] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let showError;
  let newError;

  let location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    showError = error.message;
  }
  // handle login system
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(email, password);
  };

  if (existingUser) {
    navigate('/');
  }

  if (signInError) {
    newError = signInError.message;
  }
  return (
    <div>
      <div className="mt-12 flex flex-col items-center mb-32">
        <h1 className="text-2xl xl:text-3xl font-extrabold">Brand Logo</h1>
        <div className="w-full flex-1 mt-8">
          <div className="flex flex-col items-center">
            <button
              onClick={handleGoogleSignIn}
              className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
            >
              <div className="bg-white p-2 rounded-full">
                <svg className="w-4" viewBox="0 0 533.5 544.3">
                  <path
                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                    fill="#4285f4"
                  />
                  <path
                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                    fill="#34a853"
                  />
                  <path
                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                    fill="#ea4335"
                  />
                </svg>
              </div>
              <span className="ml-4">Continue with Google</span>
            </button>
            <small className="mt-2 text-red-600 font-medium">{showError}</small>
          </div>

          <div className="text-center my-3">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Or login with e-mail
            </div>
          </div>

          <div className="mx-auto max-w-xs">
            <input
              onBlur={handleEmailBlur}
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="email"
              placeholder="Email"
            />
            <input
              onBlur={handlePasswordBlur}
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="password"
              placeholder="Password"
            />
            <small className="mt-2 text-red-600 font-medium">{newError}</small>
            <button
              onClick={handleLogin}
              className="mt-5 tracking-wide font-semibold bg-violet-600 text-gray-100 w-full py-4 rounded-lg hover:bg-violet-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-log-in"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              <span className="ml-3">Login</span>
            </button>
            <small className="flex mt-4 text-gray-600 font-medium">
              Don't have an account?{' '}
              <Link className="mx-1" to={'/signup'}>
                {' '}
                <u>Sign up</u>
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
