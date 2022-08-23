import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
  const [userItems, setUserItems] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const email = user.email;
    fetch(
      `https://tryinventory-34050.herokuapp.com/user/product?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => setUserItems(data));
  }, [user]);

  const handleDeleteBtn = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      const url = `https://tryinventory-34050.herokuapp.com/product/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = userItems.filter((product) => product._id !== id);
            setUserItems(remaining);
          }
        });
    }
  };

  return (
    <div className="mx-16 mt-16  mb-60">
      <div>
        {userItems.length > 0 ? (
          <h2 className="text-center my-8 text-3xl font-medium text-gray-700">
            My Inventory Items
          </h2>
        ) : (
          <div>
            <h2 className="text-center my-8 text-3xl font-medium text-red-500">
              You didn't create any items yet.
            </h2>
            <div className="mb-8 content-center flex justify-center">
              <Link
                className="bg-violet-600 py-2 px-8 rounded-full text-lg text-white "
                to={'/manage-inventory/add-new-item'}
              >
                Let's create one
              </Link>
            </div>
          </div>
        )}
        <table className="min-w-full table-auto">
          <thead className="justify-between">
            <tr className="bg-gray-800">
              <th className="px-16 py-2">
                <span className="text-gray-300"></span>
              </th>
              <th className="px-16 py-2">
                <span className="text-gray-300">Name</span>
              </th>
              <th className="px-16 py-2">
                <span className="text-gray-300">Product Info</span>
              </th>
              <th className="px-16 py-2">
                <span className="text-gray-300">Stock</span>
              </th>
              <th className="px-16 py-2">
                <span className="text-gray-300">Sold</span>
              </th>
              <th className="px-16 py-2">
                <span className="text-gray-300">Remove</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-200">
            {userItems.map((userItem) => {
              return (
                <tr
                  key={userItem._id}
                  className="bg-white border-4 border-gray-200"
                >
                  <td className="px-16 py-2 flex flex-row items-center">
                    <img
                      className="h-8 w-8 rounded object-cover "
                      src={userItem.image}
                      alt=""
                    />
                  </td>
                  <td>
                    <span className="text-center ml-2 font-semibold">
                      {userItem.name}
                    </span>
                  </td>
                  <td className="px-16 py-2">
                    <Link
                      to={`/product/${userItem._id}`}
                      className="text-center"
                    >
                      Detail Info
                    </Link>
                  </td>
                  <td className="px-16 py-2">
                    {userItem.quantity > 0 ? (
                      <span>{userItem.quantity}</span>
                    ) : (
                      <span className="text-red-600 ">{userItem.quantity}</span>
                    )}
                  </td>
                  <td className="px-16 py-2 flex justify-center">
                    <span>{userItem.sold}</span>
                  </td>

                  <td className="px-16 py-2">
                    <span
                      onClick={() => handleDeleteBtn(userItem._id)}
                      className="cursor-pointer text-yellow-500 flex justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItems;
