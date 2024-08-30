import React from "react";

const nlpModels = [
  {
    title: "Text Classification",
    description:
      "Classify text into categories using state-of-the-art NLP models. Ideal for sentiment analysis, topic detection, and more.",
    imageUrl: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
    imageAlt: "Text Classification illustration",
    hrefBuy: "/buy-text-classification",
    hrefTry: "/try-text-classification",
  },
  {
    title: "Named Entity Recognition",
    description:
      "Identify and classify entities in text, such as names, organizations, dates, and more, with high accuracy.",
    imageUrl: "https://images.unsplash.com/photo-1599134842279-fe807d23316e",
    imageAlt: "Named Entity Recognition illustration",
    hrefBuy: "/buy-ner",
    hrefTry: "/try-ner",
  },
  {
    title: "Text Summarization",
    description:
      "Automatically summarize long documents into concise and coherent summaries with our advanced models.",
    imageUrl: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e",
    imageAlt: "Text Summarization illustration",
    hrefBuy: "/buy-text-summarization",
    hrefTry: "/try-text-summarization",
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
      <img src={imageUrl} alt={imageAlt} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-4">{description}</p>
        <div className="mt-6 flex justify-between">
          <a
            href={hrefBuy}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Buy
          </a>
          <a
            href={hrefTry}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Try Free
          </a>
        </div>
      </div>
    </div>
  );
};

const NLP= () => {
  return (
    <div style={{marginTop:'3rem'}}>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Explore Our NLP Models
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
