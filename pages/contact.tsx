import React from 'react';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Navbar from '@/components/Header/Navbar';
import Formulario from '@/components/formulario';

const Contact: React.FC = () => {
  const router = useRouter();

  const navigateBack = () => {
    router.push('/');
  };

  return (
    <div className="contact-page bg-white">
      <Navbar />
      <div className='flex flex-col items-start justify-center bg-[#EFF2F7] text-black mx-auto px-4 py-10 max-w-[1200px] '>
        <div className="flex items-center mb-4">
          <button onClick={navigateBack} className="mr-2">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <span>Home - Contact</span>
        </div>

        <iframe
          width="540"
          height="760"
          src="https://sibforms.com/serve/MUIFACKxN0FjfN7g0JRa325dKL7G0dTMD4YpVW8Cg8rPD05305JbPmivbGBS7AXtWcDdcljizamsy3d5SXqARzVyxKzjqIIrNst2gYy09plXfLLXksub5ixWJKEOKkgzYzsOI3CdM27xIU_q3O21Y_wP0aMlyTLN2Zc-ZqSLDZTnn_RXIEGUEsCAtQgtZRhOiT6-KUIOSLbZczcm"
          frameBorder="0"
          scrolling="auto"
          allowFullScreen
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%', maxHeight: '100%' }}
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;