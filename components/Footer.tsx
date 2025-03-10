import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-cover text-white py-10" style={{ backgroundImage: "url('/images/footer-background.jpg')" }}>
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex flex-wrap -mx-4">

          <div className="w-full lg:w-1/2 p-4 mb-8 lg:mb-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <h2 className="text-2xl font-bold mb-2">CarbonaPH R&D</h2>
            <h3 className="text-lg mb-4">29 Pl. de la République,
            72600 Mamers, France.</h3>
            <div className="mb-4">
              <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 px-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

                <span>Call us on Main Office :  +41415050025</span>
              </div>
              <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 px-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

                <span>International business office: +447458149490</span>
              </div>
            </div>
            <div className="flex mb-4">
              <a href="https://www.facebook.com" className="mr-4">
                <svg className="w-6 h-6 text-white hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </a>
              <a href="https://www.twitter.com" className="mr-4">
                <svg className="w-6 h-6 text-white hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.423.722-.666 1.561-.666 2.457 0 1.697.865 3.194 2.181 4.073-.803-.026-1.56-.247-2.22-.616v.062c0 2.367 1.684 4.342 3.918 4.788-.41.111-.84.171-1.285.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.158-.067 2.179 1.397 4.768 2.212 7.548 2.212 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.635.961-.695 1.8-1.562 2.46-2.549z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com" className="mr-4">
                <svg className="w-6 h-6 text-white hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186c-.273-1.03-1.08-1.837-2.11-2.11C19.78 3.5 12 3.5 12 3.5s-7.78 0-9.388.576c-1.03.273-1.837 1.08-2.11 2.11C0 7.794 0 12 0 12s0 4.206.502 5.814c.273 1.03 1.08 1.837 2.11 2.11C4.22 20.5 12 20.5 12 20.5s7.78 0 9.388-.576c1.03-.273 1.837-1.08 2.11-2.11C24 16.206 24 12 24 12s0-4.206-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com">
                <svg className="w-6 h-6 text-white hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.27V1.73C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9.047h3.56v11.405zM5.34 7.548c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.452 20.452h-3.56v-5.604c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.95v5.714h-3.56V9.047h3.42v1.55h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.39 4.3 5.49v6.235z"/>
                </svg>
              </a>
            </div>
            <div className="text-sm mt-4">
              Call us on: +41415050025. Copyright ©2022 CarbonaphRD.com, All Rights Reserved.
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.990275897674!2d0.3685673156741937!3d48.34991997923916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e1d6f1e1e1e1e1%3A0x1e1e1e1e1e1e1e1e!2s29%20Pl.%20de%20la%20R%C3%A9publique%2C%2072600%20Mamers%2C%20France!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;