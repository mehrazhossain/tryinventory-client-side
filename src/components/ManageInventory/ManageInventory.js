import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useProducts from '../../hooks/useProducts';
import Loader from '../Loader/Loader';

const ManageInventory = () => {
  const [products, Reload, setProducts] = useProducts([]);
  const [user] = useAuthState(auth);

  if (Reload) {
    return <Loader />;
  }

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      const url = `https://tryinventory-34050.herokuapp.com/product/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };

  return (
    <div>
      {user ? (
        <div className="text-right mt-8 mr-8">
          <Link
            to="/manage-inventory/add-new-item"
            className="bg-violet-600 text-white py-2 px-3 rounded shadow hover:bg-violet-700"
          >
            Add item
          </Link>
        </div>
      ) : (
        ''
      )}
      <div className="mt-8">
        <h2 className="text-3xl text-center title-font text-gray-700">
          Inventory Items
        </h2>
      </div>
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Supplier
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Creator
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Units Sold
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => {
                    return (
                      <tr key={product._id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <img
                                alt=""
                                src={product.image}
                                className="mx-auto object-cover rounded h-10 w-10 "
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {product.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {product.supplier}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {product.email}
                          </p>
                        </td>
                        <td className="text-center px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {product.quantity}
                          </p>
                        </td>
                        <td className="text-center px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {product.sold}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {product.quantity > 0 ? (
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">active</span>
                            </span>
                          ) : (
                            <span className="relative inline-block px-3 py-1 font-semibold text-red-600 leading-tight">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">inactive</span>
                            </span>
                          )}
                        </td>
                        <td className="text-center px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            ${product.price}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {user ? (
                            <span className="relative inline-block px-5 py-1 font-semibold text-red-500 leading-tight">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">
                                <svg
                                  onClick={() => handleDelete(product._id)}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="cursor-pointer feather feather-trash-2"
                                >
                                  <polyline points="3 6 5 6 21 6"></polyline>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                  <line x1="10" y1="11" x2="10" y2="17"></line>
                                  <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>
                              </span>
                            </span>
                          ) : (
                            ''
                          )}
                        </td>
                        <td>
                          <Link
                            to={`/product/update/${product._id}`}
                            className="text-green-800"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-edit"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
