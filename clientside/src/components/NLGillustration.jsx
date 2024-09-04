import React, { useState } from "react";
import axios from "axios";
import Buy from "./Buy";
import face from '../images/face.png'
import obj from '../images/obj.jpeg';
import li from '../images/licence.jpeg'
const nlgModels = [
  {
    title: "Face Detection",
    description:
      "This model generates simple human-like written content based on provided data.",
    imageUrl: face,
    imageAlt: "Basic NLG illustration",
    href: "/nlg/basic",
  },
  {
    title: "Object Detection",
    description:
      "This model creates detailed summaries and reports from structured data with high accuracy.",
    imageUrl: obj,
    imageAlt: "Advanced NLG illustration",
    href: "/nlg/advanced",
  },
  {
    title: "License Plate Detection",
    description:
      "Tailor-made NLG solutions to fit your specific business needs and requirements.",
    imageUrl: li,
    imageAlt: "Custom NLG illustration",
    href: "/nlg/custom",
  },
];

const NLGillustration = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({
    title: "",
    description: "",
  });

  const handleBuyClick = (title, description) => {
    setPopupContent({ title, description });
    setShowPopup(true);
  };

const handleTryNowClick = (modelTitle) => {
  if (modelTitle === "Face Detection") {
    axios
      .post("http://localhost:5000/start-webcam") // Replace with your server URL
      .then((response) => {
        console.log("API response:", response.data);
      })
      .catch((error) => {
        console.error("Error running API:", error);
      });
  }
};


  return (
    <div style={{ marginTop: "3rem" }}>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Explore our OpenCV Models
        </h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {nlgModels.map((model, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
              style={{ height: "300px" }}
            >
              <img
                src={model.imageUrl}
                alt={model.imageAlt}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {model.title}
                </h2>
                <p className="text-gray-700 mb-4 text-sm">
                  {model.description}
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() =>
                      handleBuyClick(model.title, model.description)
                    }
                    className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => handleTryNowClick(model.title)}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-colors text-sm"
                  >
                    Try Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Buy
        show={showPopup}
        onClose={() => setShowPopup(false)}
        title={popupContent.title}
        description={popupContent.description}
      />
    </div>
  );
};

export default NLGillustration;
