import React from "react";
import ml from '../images/ml.jpeg'
import dl from '../images/DL.jpeg'
import cv from '../images/cv.png'
const serviceData = [
  {
    title: "Machine Learning",
    description:
      "Machine learning is a branch of artificial intelligence (AI) that allows computers to learn and improve from data without being explicitly programmed. It uses algorithms to analyze patterns in data and generate models for specific tasks",
    imageUrl: ml,
    imageAlt: "NLP illustration",
    href: "/nlp",
    reverse: false,
  },
  {
    title: "Deep Learning",
    description:
      "Deep learning is a method in artificial intelligence (AI) that teaches computers to process data in a way that is inspired by the human brain.",
    imageUrl: dl,
    imageAlt: "Sentiment analysis illustration",
    href: "/sentimentanalysis",
    reverse: true,
  },
  {
    title: "Computer Vision",
    description:
      "Computer vision is a field of artificial intelligence (AI) that allows computers to interpret and analyze visual data, such as images and videos, to derive meaningful information",
    imageUrl: cv,
    imageAlt: "NLG illustration",
    href: "/nlg",
    reverse: false,
  },
];

const ServiceSection = ({
  title,
  description,
  imageUrl,
  imageAlt,
  href,
  reverse,
}) => {
  return (
    <div className="relative mb-24">
      <div
        className={`lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
        style={{ marginLeft: "4rem", marginBottom: "2rem" }}
      >
        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray-300">{description}</p>
            <div className="mt-6">
              <a
                className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                href={href}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="pl-6 pr-6 lg:pr-0 lg:pl-0 lg:relative lg:m-0 lg:h-full">
            <img
              loading="lazy"
              alt={imageAlt}
              className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
              style={{
                color: "transparent",
                width: "600px",
                height: "380px",
              }}
              src={imageUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
        {serviceData.map((service, index) => (
          <ServiceSection key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
