import React from 'react';
import { useRouter } from 'next/router';
import Header from './Header/Header';
import Banner from './Banner';
import Article from './Article/Article';
import InfoSection from './InfoSection';
import Footer from './Footer';

export const HomeIndex: React.FC = () => {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push('/about');
  };

  const articles = [
    {
      image: '/images/article1.jpg',
      title: 'Trading',
      description: 'We supply petrochemical products. Our products range includes: Light crude, heavy crude, asphalt, gasoline, diesel, kerosene, gas and all derivatives. We are committed to provide to our customers and business partners high quality products and services through all intermediaries around the world.',
      link: '/article1'
    },
    {
      image: '/images/article2.jpg',
      title: 'Procurement',
      description: ' Global player that has held close and trusting relations with its approved suppliers for 19 years and can provide support to its customers, through the provision of dedicated procurement service.',
      link: '/article2'
    },
    {
      image: '/images/article3.jpg',
      title: 'Maintenance',
      description: 'Oil and gas Maintenance Management department aims at the ability to treat any situation, in order to constantly keep the performance and the safety of our customers’ assets with the required quality. Improving accessibility and efficiency is an integrated part of our service.',
      link: '/article3'
    },
    {
      image: '/images/article4.jpg',
      title: 'Quality Health Safety Segurity Enviroment',
      description: 'QHSSE is the common initials in the Oil and Gas industry. Using preventive and risk-based approaches covers all project phases of oil and gas operations.',
      link: '/article4'
    },
    {
      image: '/images/article5.jpg',
      title: 'Skilled Manpower Supply',
      description: 'Oil Services provides qualified workforce in the Oil & Gas industry designed for upstream, midstream and downstream Projects and Operations, for a short or long-term basis. Our highly qualified professionals and skilled labor can support the best top, middle and lower level workforce.',
      link: '/article5'
    },
    {
      image: '/images/article6.jpg',
      title: 'Enhanced Oil Recovery',
      description: 'Enhanced Oil Recovery (EOR) is a generic term of techniques, designed to increase the volume of Hydrocarbons that can be pull out from an oil field.',
      link: '/article6'
    }
  ];

  return (
    <div className="home-index">
      <Header />
      <Banner />
      <Article articles={articles} />
      <InfoSection />
      <Footer />
    </div>
  );
};