import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-cover bg-center text-white py-20" style={{ backgroundImage: "url('/images/article3.jpg')" }}>
      <div className="container mx-auto text-left max-w-screen-xl">
        <div className="max-w-3xl p-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <h1 className="text-5xl font-bold mb-4">International trading & engineering services in the Oil & Gas industry</h1>
          <p className="text-xl mb-8">Dedicated to delivering specialist services to the energy industry</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;