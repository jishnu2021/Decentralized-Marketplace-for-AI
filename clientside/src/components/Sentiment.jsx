import React from "react";

const sentimentModels = [
  {
    title: "Basic Sentiment Analysis",
    description:
      "Quickly analyze customer feedback to determine the overall sentiment as positive, negative, or neutral.",
    imageUrl: "https://images.unsplash.com/photo-1599134842279-fe807d23316e",
    imageAlt: "Basic Sentiment Analysis illustration",
    hrefBuy: "/buy-basic-sentiment-analysis",
    hrefTry: "/try-basic-sentiment-analysis",
  },
  {
    title: "Advanced Sentiment Analysis",
    description:
      "Gain deeper insights by analyzing the sentiment of individual sentences or phrases within customer feedback.",
    imageUrl: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e",
    imageAlt: "Advanced Sentiment Analysis illustration",
    hrefBuy: "/buy-advanced-sentiment-analysis",
    hrefTry: "/try-advanced-sentiment-analysis",
  },
  {
    title: "Emotion Detection",
    description:
      "Detect specific emotions such as happiness, anger, or sadness expressed in customer reviews and feedback.",
    imageUrl: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
    imageAlt: "Emotion Detection illustration",
    hrefBuy: "/buy-emotion-detection",
    hrefTry: "/try-emotion-detection",
  },
];

const SentimentModelCard = ({
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

const Sentiment = () => {
  return (
    <div style={{marginTop:'3rem'}}>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Explore Our Sentiment Analysis Models
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sentimentModels.map((model, index) => (
              <SentimentModelCard key={index} {...model} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
