import React from 'react';
import { useRouter } from 'next/router';
import Header from './Header/Header';
import Footer from './Footer';

interface ArticleDetailProps {
  title: string;
  content: string[];
  images: string[];
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ title, content, images }) => {
  const router = useRouter();

  const navigateBack = () => {
    router.push('/');
  };

  return (
    <div className="article-detail">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <div className="flex items-center mb-4">
          <button onClick={navigateBack} className="mr-2">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <span>Home - {title}</span>
        </div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {content.map((paragraph, index) => (
            <p key={index} className="text-lg mb-4">{paragraph}</p>
          ))}
        </div>
        <div className="flex flex-wrap -mx-4">
          {images.map((image, index) => (
            <div key={index} className="w-full lg:w-1/2 px-4 mb-8">
              <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto object-cover rounded-md" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetail;