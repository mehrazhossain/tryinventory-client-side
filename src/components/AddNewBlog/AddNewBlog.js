import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddNewBlog = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');

  // get all input data using onblur
  const handleBlogTitleBlur = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlBlur = (e) => {
    setImage(e.target.value);
  };

  const handleDescBlur = (e) => {
    setBody(e.target.value);
  };

  // handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // send data to the server
    fetch('https://tryinventory-34050.herokuapp.com/add-blog', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        image,
        body,
      }),
    }).then((res) => res.json());
    toast.success('Added new blog');
    e.target.reset();
  };

  return (
    <div>
      <div className="relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative items-center">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-2xl z-10">
          <div className="grid  gap-8 grid-cols-1"></div>
          <form onSubmit={handleFormSubmit}>
            <div className="md:flex flex-row md:space-x-4 w-full text-xs">
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-600 py-2">
                  Blog Title <abbr title="required">*</abbr>
                </label>
                <input
                  onBlur={handleBlogTitleBlur}
                  placeholder="Blog title"
                  autoComplete="off"
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                  required="required"
                  type="text"
                  name="blog-title"
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
            <div className="md:flex md:flex-row md:space-x-4 w-full text-xs"></div>
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
                placeholder="Write blog here"
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
                value={'Post'}
                className="cursor-pointer mb-2 md:mb-0 bg-violet-600 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-violet-700"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewBlog;
