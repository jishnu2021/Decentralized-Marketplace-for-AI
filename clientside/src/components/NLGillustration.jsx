
import React from 'react';

const nlgModels = [
  {
    title: "Basic NLG Model",
    description:
      "This model generates simple human-like written content based on provided data.",
    imageUrl: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e",
    imageAlt: "Basic NLG illustration",
    href: "/nlg/basic",
  },
  {
    title: "Advanced NLG Model",
    description:
      "This model creates detailed summaries and reports from structured data with high accuracy.",
    imageUrl: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e",
    imageAlt: "Advanced NLG illustration",
    href: "/nlg/advanced",
  },
  {
    title: "Custom NLG Model",
    description:
      "Tailor-made NLG solutions to fit your specific business needs and requirements.",
    imageUrl: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e",
    imageAlt: "Custom NLG illustration",
    href: "/nlg/custom",
  },
];

const NLGillustration = () => {
  return (
    <div style={{marginTop:'3rem'}}>
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Natural Language Generation (NLG) Models
        </h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {nlgModels.map((model, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={model.imageUrl}
                alt={model.imageAlt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {model.title}
                </h2>
                <p className="text-gray-700 mb-6">{model.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={`${model.href}/buy`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Buy
                  </a>
                  <a
                    href={`${model.href}/try`}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Try Free
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NLGillustration;
