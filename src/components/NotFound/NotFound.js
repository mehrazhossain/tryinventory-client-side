import React from 'react';
import bg from '../../images/404bg.jpg';

const NotFound = () => {
  return (
    <div>
      <div class="bg-indigo-900 relative overflow-hidden h-screen">
        <img
          src={bg}
          class="absolute h-full w-full object-cover"
          alt="a man illustration on space"
        />
        <div class="inset-0 bg-black opacity-25 absolute"></div>
        <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div class="w-full font-mono flex flex-col items-center relative z-10">
            <h1 class="font-extrabold text-5xl text-center text-white leading-tight mt-4">
              Sorry, this page isn't available
            </h1>
            <p class="font-extrabold text-8xl my-44 text-white animate-bounce">
              404
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
