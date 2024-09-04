import React, { useState } from "react";

const AddModelPopup = ({ show, onClose }) => {
  const [modelTitle, setModelTitle] = useState("");
  const [modelDescription, setModelDescription] = useState("");
  const [modelDataset, setModelDataset] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create a model.py content
    const modelPyContent = `
# ${modelTitle}
# ${modelDescription}

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Load dataset
data = pd.read_csv('${modelDataset ? modelDataset.name : "your_dataset.csv"}')

# Preprocessing
X = data.iloc[:, :-1]  # Features
y = data.iloc[:, -1]   # Target

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Train the model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Model evaluation
accuracy = model.score(X_test, y_test)
print(f"Model Accuracy: {accuracy}")
`;

    // Trigger download of the model.py file
    const blob = new Blob([modelPyContent], {
      type: "text/plain;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "model.pkl";
    link.click();

    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Add New Model</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Model Title
            </label>
            <input
              type="text"
              value={modelTitle}
              onChange={(e) => setModelTitle(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Model Description
            </label>
            <textarea
              value={modelDescription}
              onChange={(e) => setModelDescription(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Dataset (CSV)
            </label>
            <input
              type="file"
              accept=".csv"
              onChange={(e) => setModelDataset(e.target.files[0])}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModelPopup;
