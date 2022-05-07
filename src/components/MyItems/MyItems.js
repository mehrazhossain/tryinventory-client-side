import React from 'react';

const MyItems = () => {
  return (
    <div className="mx-16 my-16">
      <div>
        <h2 className="text-center my-8 text-3xl font-medium text-gray-700">
          My Inventory Items
        </h2>
        <table class="min-w-full table-auto">
          <thead class="justify-between">
            <tr class="bg-gray-800">
              <th class="px-16 py-2">
                <span class="text-gray-300"></span>
              </th>
              <th class="px-16 py-2">
                <span class="text-gray-300">Name</span>
              </th>
              <th class="px-16 py-2">
                <span class="text-gray-300">View Product</span>
              </th>
              <th class="px-16 py-2">
                <span class="text-gray-300">Stock Amount</span>
              </th>
              <th class="px-16 py-2">
                <span class="text-gray-300">Sold</span>
              </th>
              <th class="px-16 py-2">
                <span class="text-gray-300">Action</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-gray-200">
            <tr class="bg-white border-4 border-gray-200">
              <td class="px-16 py-2 flex flex-row items-center">
                <img
                  class="h-8 w-8 rounded-full object-cover "
                  src="https://randomuser.me/api/portraits/men/38.jpg"
                  alt=""
                />
              </td>
              <td>
                <span class="text-center ml-2 font-semibold">
                  Brett Castillo
                </span>
              </td>
              <td class="px-16 py-2">
                <button class="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                  Open Link
                </button>
              </td>
              <td class="px-16 py-2">
                <span>0</span>
              </td>
              <td class="px-16 py-2">
                <span>0</span>
              </td>

              <td class="px-16 py-2">
                <span class="text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItems;
