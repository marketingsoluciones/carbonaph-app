import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <div className="w-full bg-[#BBDEFB] text-black py-10">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <img src="/images/world-offices.png" alt="World Offices" className="w-full h-auto object-cover rounded-md" />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="mb-4">
              <p className="text-lg text-fuchsia-800">World Offices</p>
              <h2 className="text-4xl font-bold mb-4">Carbonaph R&D</h2>
              <p className="text-lg mb-4 text-gray-600">
                Founded in 1995 as a mid-sized international service provider to the Oil and Gas industry, our goal is to offer reliable and efficient services taking advantage of our knowledge to deliver optimum and productive results.
              </p>
              <ul className="list-none">
                {[
                  'FRANCE',
                  'UNITED KINGDOM',
                  'SINGAPORE',
                  'RUSSIA',
                  'ANGOLA',
                  'REPUBLIC OF THE CONGO',
                  'MOZAMBIQUE',
                  'ALGERIA'
                ].map((item, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <svg className="w-6 h-6 text-fuchsia-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;