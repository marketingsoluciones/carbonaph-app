import React from 'react';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Navbar from '@/components/Header/Navbar';

const Contact: React.FC = () => {
  const router = useRouter();

  const navigateBack = () => {
    router.push('/');
  };

  return (
    <div className="contact-page bg-white">
      <Navbar />
      <div className='flex flex-col items-start justify-center bg-white text-black mx-auto px-4 py-10 max-w-[1200px] '>
      <div className="flex items-center mb-4">
        <button onClick={navigateBack} className="mr-2">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <span>Home - Contact</span>
      </div>

      </div>

      <Footer />
    </div>
  );
};

export default Contact;