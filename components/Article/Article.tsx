import React from 'react';
import { useRouter } from 'next/router';

interface ArticleProps {
  articles: {
    image: string;
    title: string;
    description: string;
    link: string;
  }[];
}

const Article: React.FC<ArticleProps> = ({ articles }) => {
  const router = useRouter();

  const navigateTo = (link: string) => {
    router.push(`/articles/${link}`);
  };

  return (
    <div className="w-full bg-white text-black py-10">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex flex-wrap -mx-4">
          {articles.map((article, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-gray-200 p-4 rounded-lg">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                <p className="text-lg mb-4 text-gray-600">{article.description}</p>
                <button onClick={() => navigateTo(article.link)} className="bg-fuchsia-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-fuchsia-600">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;