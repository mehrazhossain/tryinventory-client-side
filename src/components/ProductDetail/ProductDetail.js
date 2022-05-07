import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [updateStock, setUpdateStock] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id, item]);

  const handleDeliveredBtn = () => {
    const stockAfterDelivered = Number(item.quantity) - 1;
    const updatedDocForDeliveredBtn = {
      name: item.name,
      supplier: item.supplier,
      image: item.image,
      price: item.price,
      quantity: stockAfterDelivered,
      description: item.description,
      sold: item.sold + 1,
    };
    const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedDocForDeliveredBtn),
    }).then((res) => res.json());
    toast.success(`Successfully Delivered`);
  };

  const handleUpdateStockBlur = (e) => {
    setUpdateStock(e.target.value);
    e.target.value = '';
  };
  const currentStock = Number(item.quantity) + Number(updateStock);
  const updatedDoc = {
    name: item.name,
    supplier: item.supplier,
    image: item.image,
    price: item.price,
    quantity: currentStock,
    description: item.description,
  };
  const handleRestockForm = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedDoc),
    }).then((res) => res.json());
    toast.success(`Add ${updateStock} Stock Amount`);
  };
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="text-right mt-8 mr-32">
          <Link
            to="/manage-inventory"
            className="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow hover:bg-violet-600 hover:text-white"
          >
            Manage Inventories
          </Link>
        </div>
        <div className="container px-5 py-8 mx-auto">
          <div>
            <h2 className="text-5xl text-center pb-8 title-font text-gray-700">
              Product Information
            </h2>
          </div>
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              style={{ height: '580px' }}
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={item.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {item.name}
              </h1>
              <div className="flex mb-4"></div>
              <p className="leading-relaxed">{item.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div>
                  <p className="py-1 font-medium text-gray-500">Product ID</p>
                  <p className="py-1">{item._id}</p>
                  <p className="py-1 font-medium text-gray-500">Quantity</p>
                  <p className="py-1">{item.quantity}</p>
                  <p className="py-1 font-medium text-gray-500">Units Sold</p>
                  <p className="py-1">{item.sold}</p>
                  <p className="py-1 font-medium text-gray-500">Supplier</p>
                  <p className="py-1">{item.supplier}</p>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${item.price}
                </span>
                <button
                  onClick={handleDeliveredBtn}
                  className="flex ml-auto text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded"
                >
                  Delivered
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pb-2">
            <h2 className="text-xl text-center title-font text-gray-800">
              <u className="underline-offset-8 decoration-violet-600">
                Restock the Item
              </u>
            </h2>
          </div>
          <form
            onSubmit={handleRestockForm}
            className="m-4 flex place-content-center pb-32"
          >
            <input
              onBlur={handleUpdateStockBlur}
              type="number"
              autoComplete="off"
              className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="Add quantity"
              name="quantity"
            />
            <input
              type={'submit'}
              value="Update Stock"
              className="cursor-pointer px-8 rounded-r-lg bg-violet-600  text-white font-bold p-4 uppercase border-violet-500 border-t border-b border-r hover:bg-violet-700"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
