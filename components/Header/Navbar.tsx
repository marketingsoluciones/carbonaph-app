import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { articlesData } from '../../pages/articles/[id]';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigateTo = (path: string) => {
    router.push(path);
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
        <div className="text-black text-lg font-bold">
          <img src="/images/logo.png" alt="" className='flex w-72 h-22 items-center ' />
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto text-sm md:text-base lg:text-lg ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex lg:justify-between text-black">
            <li className="lg:mx-4 my-2 lg:my-0">
              <button onClick={() => navigateTo('/')} className="hover:text-gray-400">HOME</button>
            </li>
            <li className="lg:mx-4 my-2 lg:my-0">
              <button onClick={() => navigateTo('/about')} className="hover:text-gray-400">THE COMPANY</button>
            </li>
            <li className="relative lg:mx-4 my-2 lg:my-0">
              <button onClick={toggleDropdown} className="hover:text-gray-400 flex items-center">
                ACTIVITIES
                <svg className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-white text-black mt-2 rounded-md shadow-lg w-auto">
                  {Object.keys(articlesData).map((key, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-300 cursor-pointer" onClick={() => navigateTo(`/articles/${key}`)}>
                      {articlesData[key].title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="lg:mx-4 my-2 lg:my-0">
              <button onClick={() => navigateTo('/contact')} className="hover:text-gray-400">CONTACT</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;