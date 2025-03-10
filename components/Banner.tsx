import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="w-full bg-[#BBDEFB] text-black py-10">
      <div className="flex flex-col items-center justify-center mx-auto max-w-screen-xl px-4">
        <h1 className="text-4xl font-bold mb-4">CarbonaphR&D Oil Services</h1>
        <p className="text-lg text-gray-600">
          Carbonaph R&D is an international service provider offers leading edge services principally to the energy sector. We have operations in the UK, USA, France, Algeria, Qatar, Singapore, Russia, Congo, Angola, Mozambique. Our services are strategically based to support our clients through the international energy and marine sectors. We provide high quality, innovative, reliable solutions, delivered safely to a portfolio of long term international customers across industry sectors including oil and gas, marine, defense, petrochemical, renewables, utilities and distilleries.
        </p>
      </div>
    </div>
  );
};

export default Banner;