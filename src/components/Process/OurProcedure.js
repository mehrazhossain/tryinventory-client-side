import React from 'react';

const OurProcedure = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-5xl">Our</span>
          </span>{' '}
          <span className="text-violet-600">
            <u className="underline-offset-8 text-5xl">Procedure</u>
          </span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          The success of any project hinges on the process that moves it
          forward. A consistent process leads to consistent results, quality,
          and business growth. While every project we work with has its own
          unique outcome, we follow the same process to ensure the best possible
          results.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-100 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
              1
            </p>
            <p className="text-lg font-bold leading-5">01. Meet</p>
          </div>
          <p className="text-sm text-gray-900">
            The first step is to discover more about you, your company’s vision,
            and to build a strong relationship. This is where we will create
            your brand, create a custom strategy, and set project goals.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-200 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
              2
            </p>
            <p className="text-lg font-bold leading-5">02. Plan</p>
          </div>
          <p className="text-sm text-gray-900">
            Following the initial meetup, we will outline your project, create
            milestones, and agree on priorities. Now we have a strategic plan in
            place that aligns with your initial vision and makes your goals
            achievable.
          </p>
        </div>
        <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-deep-purple-accent-700 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
              3
            </p>
            <p className="text-lg font-bold leading-5">03. Design & Dev</p>
          </div>
          <p className="text-sm text-gray-900">
            Once the outline is finished, visual concepts of the custom project
            will be created. Our creative and development team reviews and
            revises the materials until it aligns with your goals.
          </p>
          <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-white w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p>
        </div>
        <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-deep-purple-accent-700 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
              4
            </p>
            <p className="text-lg font-bold leading-5">04. Test</p>
          </div>
          <p className="text-sm text-gray-900">
            Here review and testing takes place, which ensures the quality of
            your project. This is the most valuable step because your reputation
            is our reputation!
          </p>
          <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-white w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p>
        </div>
        <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-deep-purple-accent-700 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
              5
            </p>
            <p className="text-lg font-bold leading-5">05. Agreement</p>
          </div>
          <p className="text-sm text-gray-900">
            The first step is to discover more about you, your company’s vision,
            and to build a strong relationship. This is where we will create
            your brand, create a custom strategy, and set project goals.
          </p>
          <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-white w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p>
        </div>
        <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-deep-purple-accent-700 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
              6
            </p>
            <p className="text-lg font-bold leading-5">06. Launch</p>
          </div>
          <p className="text-sm text-gray-900">
            Here is where we present your custom project. Upon approval, your
            custom project will be launched and promoted. Then sit back and
            watch the sakoyatsoft!
          </p>
          <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-white w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProcedure;
