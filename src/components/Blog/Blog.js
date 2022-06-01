import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const [blogDetail, setBlogDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://tryinventory-34050.herokuapp.com/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setBlogDetail(data));
  }, []);

  return (
    <div id="blog" class="bg-gray-100 dark:bg-gray-900 px-4 xl:px-4 py-14">
      <div class="mx-auto container">
        <span role="contentinfo">
          <h1
            tabindex="0"
            class="focus:outline-none text-center text-3xl lg:text-5xl tracking-wider text-gray-900 dark:text-white"
          >
            Latest from our Blog
          </h1>
        </span>
        <div
          tabindex="0"
          aria-label="Group of cards"
          class="focus:outline-none mt-12 lg:mt-24"
        >
          <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 xl:mx-48 gap-8">
            <div tabindex="0" class="focus:outline-none" aria-label="card 1">
              <img
                aria-label="code editor"
                tabindex="0"
                class="focus:outline-none w-full"
                src={blogDetail.image}
                alt="code editor"
              />
              <div class="py-4 px-8 w-full flex justify-between bg-indigo-700">
                <p
                  tabindex="0"
                  class="focus:outline-none text-sm text-white font-semibold tracking-wide"
                >
                  ID: {blogDetail._id}
                </p>
              </div>
              <div class="bg-white dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1
                  tabindex="0"
                  class="focus:outline-none text-4xl text-gray-900 dark:text-white font-semibold tracking-wider"
                >
                  {blogDetail.name}
                </h1>
                <p
                  tabindex="0"
                  class="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12"
                >
                  {blogDetail.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
