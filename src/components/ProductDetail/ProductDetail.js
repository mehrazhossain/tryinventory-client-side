import React from 'react';

const ProductDetail = () => {
  return (
    <div>
      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-8 mx-auto">
          <div>
            <h2 class="text-5xl text-center pb-8 title-font text-gray-700">
              Product Information
            </h2>
          </div>
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div class="flex mb-4"></div>
              <p class="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div>
                  <p className="py-1 font-medium text-gray-500">Product ID</p>
                  <p className="py-1">12649426</p>
                  <p className="py-1 font-medium text-gray-500">Quantity</p>
                  <p className="py-1">100</p>
                  <p className="py-1 font-medium text-gray-500">Supplier</p>
                  <p className="py-1">XYZ Trading Inc.</p>
                </div>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button class="flex ml-auto text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">
                  Delivered
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pb-8 pt-8">
            <h2 class="text-xl text-center title-font text-gray-800">
              <u className="underline-offset-8 decoration-violet-600">
                Restock the Item
              </u>
            </h2>
          </div>
          <form class="m-4 flex place-content-center pb-32">
            <input
              class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="Add quantity"
            />
            <button class="px-8 rounded-r-lg bg-violet-600  text-white font-bold p-4 uppercase border-violet-500 border-t border-b border-r">
              Restock
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
