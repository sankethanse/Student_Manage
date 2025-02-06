import React, { useState, useEffect } from "react";

const StudentForm = ({ isOpen, onClose, onSave, selectedStudent }) => {
  const [formData, setFormData] = useState({ name: "", age: "", className: "", phoneNumber: "" });

  useEffect(() => {
    if (selectedStudent) {
      setFormData(selectedStudent);
    } else {
      setFormData({ name: "", age: "", className: "", phoneNumber: "" });
    }
  }, [selectedStudent]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.className || !formData.phoneNumber) return;
    onSave(formData);
    onClose();
  };

  const handleCancel = () => {
    setFormData({ name: "", age: "", className: "", phoneNumber: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-bold text-gray-200 mb-4">
          {selectedStudent ? "Edit Student" : "Add New Student"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="className"
            placeholder="Class"
            value={formData.className}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between mt-4">
            <button onClick={handleCancel} className="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">
              {selectedStudent ? "Update Student" : "Add Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
