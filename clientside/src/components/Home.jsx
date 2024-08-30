import React from 'react';
import img from "../images/backgroundimg.jpeg";

const Home = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${img})` }}
        className="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply min-h-screen flex items-center"
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h3 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Discover, Buy, Sell and Test AI Solutions on Our Marketplace
          </h3>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Find machine learning, deep learning, AI, and computer vision models. Buy, sell, and innovate with top solutions in our marketplace.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
            </a>
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
