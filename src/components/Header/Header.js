import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    const confirmation = window.confirm('Are you sure you want to logout?');
    if (confirmation) {
      signOut(auth);
    }
  };
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <CustomLink to={'/'}>Dashboard</CustomLink>
                    <CustomLink to={'/manage-inventory'}>Inventory</CustomLink>
                    <CustomLink to={'/blogs'}>Blog</CustomLink>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {user ? (
                  <div>
                    {/* <button
                      onClick={handleSignOut}
                      className="text-gray-200 font-semibold mr-2"
                    >
                      Sign out
                    </button> */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user?.photoURL}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to={'/user/items'}
                                className={
                                  (active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700')
                                }
                              >
                                My Items
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleSignOut}
                                className={
                                  (active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700')
                                }
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                ) : (
                  <Link
                    className="text-white inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                    to={'/signup'}
                  >
                    Get Started
                  </Link>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <CustomLink to={'/'}>Dashboard</CustomLink>
              <CustomLink to={'/manage-inventory'}>Manage Inventory</CustomLink>
              <CustomLink to={'/blogs'}>Blogs</CustomLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
