import React from 'react';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Navbar from '@/components/Header/Navbar';

const About: React.FC = () => {
  const router = useRouter();

  const navigateBack = () => {
    router.push('/');
  };

  return (
    <div className="about-page bg-white">
      <Navbar />
      <div className='flex flex-col items-start justify-center bg-white text-black mx-auto px-4 py-10 max-w-[1200px] '>
      <div className="flex items-center mb-4">
        <button onClick={navigateBack} className="mr-2">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <span>Home - About</span>
      </div>
      <div className="flex flex-wrap -mx-4 ">
        <div className="w-full lg:w-2/3 px-4 mb-8">
          <p className="text-lg mb-4 text-gray-600">
            Carbonaph R&D is an international trading and brokerage company specializing in the trading of raw materials, petroleum products, international service provider, to the Oil and Gas industry. Our Key Objectives are to offer reliable and efficient services by leveraging their know how, in order to deliver optimal productivity and results. From Procurement & Maintenance to Trading, QHSSE and Skilled manpower Supply,
          </p>
          <p className="text-lg mb-4 text-gray-600">
            Carbonaph R&D people are constantly offering the best services and solutions to any industrial project. Our Production department, designs, develops and provides the best possible enhanced oil recovery methods, for optimal production on any site. Headquartered In Mamers, a historical and cultural region in the French Grand Ouest, between Paris and Brittany,
          </p>
          <p className="text-lg mb-4 text-gray-600">
            Carbonaph R&D operates globally, and has built a huge active customer base with many of the world’s leading oil and gas organizations. In addition to our commitment to superior services, they are equally proud of their people. Many very talented and creative professionals, from the industry, work at Carbonaph R&D services and are passionate about what they do. Carbonaph R&D has a Quality, Health, Safety, Security and Environmental (QHSSE) Policy for all its activities and is certified in ISO 9001. iso9001 Map.
          </p>
          <p className="text-lg mb-4 text-gray-600">
            Carbonaph R&D gas exploration Knowledge base Our team of gas experts practices is now reputed worldwide as one of the specialists in providing Exploration services and drilling operation support to oil and gas companies for their different projects running all over the world.
          </p>
          <p className="text-lg mb-4 text-gray-600">
            OUR PROCUREMENT MISSION: to steer for future To provide our clients a consultant matching exactly according to their project requirements and on time. To establish a long lasting cooperation based on an active communication and regular follow up both with client and consultant during the project. To provide technical back-ups and technology transfer to our clients. To develop new markets and business streams, with continuous focus to strengthen our core competencies.
          </p>
        </div>
        <div className="w-full flex items-center justify-center lg:w-1/3 px-4 mb-8">
          <div className="rounded shadow-lg p-2">
            <img src="/images/about-image.png" alt="About Image" className="w-full h-auto object-cover rounded-md" />
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;