import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to={'/login'} state={{ from: location }} replace />;
  }
  if (!user?.emailVerified) {
    return (
      <div className="mb-8 content-center grid justify-center mb-96 mt-32">
        <div>
          <h3 className="text-red-600 text-2xl text-center">
            Your Email is Not Verified
          </h3>
        </div>
        <p className="text-green-700 mt-2">Please Verify Your Email Address</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-teal-700 py-2 mt-4 text-white font-semibold rounded"
        >
          Already Verified
        </button>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
