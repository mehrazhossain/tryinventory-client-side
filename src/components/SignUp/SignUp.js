import React, { useState } from 'react';
import auth from '../../firebase.init';
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUp = () => {
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, createdUser, createdError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let showError;
  let showCreatedUserError;

  const handleGoogleSignUp = () => {
    signInWithGoogle();
  };

  if (user) {
    navigate('/');
  }

  if (error) {
    showError = error.message;
  }

  // handle input blur
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  // handle sign up
  const handleSignUP = () => {
    createUserWithEmailAndPassword(email, password);
    toast.success('Email sent Please verified your account');
  };

  if (createdUser) {
    navigate('/');
  }

  if (createdError) {
    showCreatedUserError = createdError.message;
  }

  return (
    <div>
      <div className="mt-12 flex flex-col items-center mb-32">
        <h1 className="text-2xl xl:text-3xl font-extrabold">
          Sign up for TryInventory
        </h1>
        <div className="w-full flex-1 mt-8">
          <div className="flex flex-col items-center">
            <button
              onClick={handleGoogleSignUp}
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
              <span className="ml-4">Sign Up with Google</span>
            </button>
            <small className="mt-2 text-red-600 font-medium">{showError}</small>
          </div>

          <div className="my-12 border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Or sign up with e-mail
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
            <small className="mt-2 text-red-600 font-medium">
              {showCreatedUserError}
            </small>
            <button
              onClick={handleSignUP}
              className="mt-5 tracking-wide font-semibold bg-violet-600 text-gray-100 w-full py-4 rounded-lg hover:bg-violet-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              <svg
                className="w-6 h-6 -ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <path d="M20 8v6M23 11h-6" />
              </svg>
              <span className="ml-3">Sign Up</span>
            </button>
            <small className="flex mt-4 text-gray-600 font-medium">
              Already have an account?{' '}
              <Link className="mx-1" to={'/login'}>
                {' '}
                <u>Login now</u>
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
