import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../Loader/Loader';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [Reload, setReload] = useState(true);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch('https://tryinventory-34050.herokuapp.com/blog')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setReload(false);
      });
  }, []);

  if (Reload) {
    return <Loader></Loader>;
  }

  return (
    <div>
      {user ? (
        <div className="mt-4 mr-4 content-center flex justify-end">
          <Link
            className="bg-violet-600 py-2 px-8 rounded-full text-lg text-white "
            to={'/manage-inventory/add-new-item'}
          >
            Add new blog
          </Link>
        </div>
      ) : (
        ''
      )}
      <section className="pt-8 lg:pt-10 pb-10 lg:pb-20 overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                  TryInventory's Latest Blogs
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {blogs.map((blog) => {
              return (
                <div key={blog._id} className="w-full md:w-1/2 lg:w-1/3 px-4">
                  <div className="max-w-[370px] mx-auto mb-10">
                    <div className="rounded overflow-hidden mb-8">
                      <img src={blog.image} alt="" className="w-full" />
                    </div>
                    <div>
                      <h3>
                        <Link
                          to={`/blog/${blog._id}`}
                          className="
                          font-semibold
                          text-xl
                          sm:text-2xl
                          lg:text-xl
                          xl:text-2xl
                          mb-4
                          inline-block
                          text-dark
                          hover:text-primary
                          "
                        >
                          {blog.name}
                        </Link>
                      </h3>
                      <p className="text-base text-body-color">
                        {blog.body.substring(0, 120)}..
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
