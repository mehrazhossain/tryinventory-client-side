import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import './AddNewItem.css';

const AddNewItem = () => {
  const [name, setName] = useState('');
  const [supplier, setSupplier] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const [user] = useAuthState(auth);
  const { email } = user;

  // get all input data using onblur
  const handleProductBlur = (e) => {
    setName(e.target.value);
  };
  const handleSupplierBlur = (e) => {
    setSupplier(e.target.value);
  };
  const handleImageUrlBlur = (e) => {
    setImage(e.target.value);
  };
  const handlePriceBlur = (e) => {
    setPrice(e.target.value);
  };
  const handleQuantityBlur = (e) => {
    setQuantity(e.target.value);
  };
  const handleDescBlur = (e) => {
    setDescription(e.target.value);
  };

  // handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // send data to the server
    fetch(
      'https://tryinventory-34050.herokuapp.com//manage-inventory/add-new-item',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name,
          supplier,
          image,
          price,
          quantity,
          description,
          email,
          sold: 0,
        }),
      }
    ).then((res) => res.json());
    toast.success('Added new item');
    e.target.reset();
  };
  return (
    <div>
      <div className="relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative items-center">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-2xl z-10">
          <div className="grid  gap-8 grid-cols-1">
            <div className="flex flex-col ">
              <div className="flex flex-col sm:flex-row items-center">
                <h2 className="font-semibold text-gray-700 text-lg mr-auto">
                  Create new product
                </h2>
                <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
              </div>
              <div className="mt-5">
                <form onSubmit={handleFormSubmit}>
                  <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Product Name <abbr title="required">*</abbr>
                      </label>
                      <input
                        onBlur={handleProductBlur}
                        placeholder="Product name"
                        autoComplete="off"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="product-name"
                      />
                    </div>
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Supplier Name <abbr title="required">*</abbr>
                      </label>
                      <input
                        onBlur={handleSupplierBlur}
                        placeholder="Supplier name"
                        autoComplete="off"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="supplier-name"
                      />
                    </div>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className=" font-semibold text-gray-600 py-2">
                      Image URL<abbr title="required">*</abbr>
                    </label>
                    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                      <div className="flex">
                        <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <input
                        onBlur={handleImageUrlBlur}
                        required="required"
                        autoComplete="off"
                        type="text"
                        className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                        placeholder="https://"
                      />
                    </div>
                  </div>
                  <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Price<abbr title="required">*</abbr>
                      </label>
                      <input
                        onBlur={handlePriceBlur}
                        autoComplete="off"
                        required="required"
                        placeholder="$.."
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="number"
                        name="price"
                      />
                    </div>
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Quantity<abbr title="required">*</abbr>
                      </label>
                      <input
                        onBlur={handleQuantityBlur}
                        autoComplete="off"
                        required="required"
                        placeholder="Enter quantity"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="number"
                        name="price"
                      />
                    </div>
                  </div>
                  <div className="flex-auto w-full mb-1 text-xs space-y-2">
                    <label className="font-semibold text-gray-600 py-2">
                      Description<abbr title="required">*</abbr>
                    </label>
                    <textarea
                      onBlur={handleDescBlur}
                      autoComplete="off"
                      required="required"
                      name="message"
                      className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                      placeholder="Enter product info"
                      spellCheck="false"
                    ></textarea>
                  </div>
                  <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                    <input
                      type={'reset'}
                      value={'Cancel'}
                      className="cursor-pointer mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                    />
                    <input
                      type="submit"
                      value={'Add'}
                      className="cursor-pointer mb-2 md:mb-0 bg-violet-600 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-violet-700"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewItem;
