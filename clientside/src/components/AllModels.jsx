import React, { useState } from "react";
import AddModelPopup from "./AddModelPopup";
import dia from "../images/ml.jpeg";
import face from "../images/face.png";
import obj from "../images/obj.jpeg";
import li from "../images/licence.jpeg";

const models = [
  {
    title: "Face Detection",
    imageUrl: face,
    imageAlt: "Face Detection illustration",
  },
  {
    title: "Object Detection",
    imageUrl: obj,
    imageAlt: "Object Detection illustration",
  },
  {
    title: "License Plate Detection",
    imageUrl: li,
    imageAlt: "License Plate Detection illustration",
  },
  {
    title: "Diabetes Prediction",
    imageUrl: dia,
    imageAlt: "Diabetes Prediction illustration",
  },
  {
    title: "Heart Disease Prediction",
    imageUrl: "https://images.unsplash.com/photo-1599134842279-fe807d23316e",
    imageAlt: "Heart Disease Prediction illustration",
  },
];

const ModelCard = ({ title, imageUrl, imageAlt }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
    <img src={imageUrl} alt={imageAlt} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
  </div>
);

function AllModels() {
  const [showPopup, setShowPopup] = useState(false);
  const [modelList, setModelList] = useState(models);

  const handleAddModel = (newModel) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;
      setModelList([
        ...modelList,
        {
          ...newModel,
          imageUrl,
          imageAlt: newModel.title + " illustration",
        },
      ]);
    };
    reader.readAsDataURL(newModel.image);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="flex justify-end py-4">
        <button
          onClick={() => setShowPopup(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add Model
        </button>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {modelList.map((model, index) => (
          <ModelCard
            key={index}
            title={model.title}
            imageUrl={model.imageUrl}
            imageAlt={model.imageAlt}
          />
        ))}
      </div>
      <AddModelPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        onSubmit={handleAddModel}
      />
    </div>
  );
}

export default AllModels;
