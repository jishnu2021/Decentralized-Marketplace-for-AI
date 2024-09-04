import React from "react";
import dia from '../images/ml.jpeg'
const nlpModels = [
  {
    title: "Diabetes Prediction",
    description:
      "Classify text into categories using state-of-the-art NLP models. Ideal for sentiment analysis, topic detection, and more.",
    imageUrl: dia,
    imageAlt: "Text Classification illustration",
    hrefBuy: "/payment",
    hrefTry: "http://localhost:8501",
  },
  {
    title: "Heart Disease Prediction",
    description:
      "Identify and classify entities in text, such as names, organizations, dates, and more, with high accuracy.",
    imageUrl: "https://images.unsplash.com/photo-1599134842279-fe807d23316e",
    imageAlt: "Named Entity Recognition illustration",
    hrefBuy: "/payment",
    hrefTry: "/try-ner",
  },
];

const NLPModelCard = ({
  title,
  description,
  imageUrl,
  imageAlt,
  hrefBuy,
  hrefTry,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
      <img src={imageUrl} alt={imageAlt} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
        <div className="mt-3 flex justify-between">
          <a
            href={hrefBuy}
            className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Buy
          </a>
          <a
            href={hrefTry}
            className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-colors text-sm"
          >
            Try Free
          </a>
        </div>
      </div>
    </div>
  );
};

const NLP = () => {
  return (
    <div style={{ marginTop: "3rem" }}>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Explore Our ML Models
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nlpModels.map((model, index) => (
              <NLPModelCard key={index} {...model} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NLP;
