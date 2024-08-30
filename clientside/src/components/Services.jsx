import React from "react";

const serviceData = [
  {
    title: "Natural Language Processing (NLP):",
    description:
      "The AI product utilizes advanced NLP algorithms to understand and interpret human language, enabling it to accurately process and analyze text-based inputs.",
    imageUrl: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
    imageAlt: "NLP illustration",
    href: "/nlp",
    reverse: false,
  },
  {
    title: "Sentiment Analysis:",
    description:
      "The product has built-in sentiment analysis capabilities, allowing it to determine the sentiment (positive, negative, or neutral) expressed in text or customer feedback.",
    imageUrl: "https://images.unsplash.com/photo-1599134842279-fe807d23316e",
    imageAlt: "Sentiment analysis illustration",
    href: "/sentimentanalysis",
    reverse: true,
  },
  {
    title: "Natural Language Generation (NLG):",
    description:
      "The AI product can generate human-like written content, summaries, or reports based on structured data or analysis results.",
    imageUrl: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e",
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
