import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import StudentForm from "../components/StudentForm";
import axios from "axios";

const StudentPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const columns = [
    { header: "Name", key: "name" },
    { header: "Age", key: "age" },
    { header: "Class", key: "className" },
    { header: "Phone Number", key: "phoneNumber" },
  ];

  
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleSaveStudent = async (student) => {
    if (selectedStudent) {
      try {
        await axios.put(`http://localhost:8080/api/students/${selectedStudent.id}`, student);
        fetchStudents(); 
      } catch (error) {
        console.error("Error updating student:", error);
      }
    } else {
      try {
        await axios.post("http://localhost:8080/api/students", student);
        fetchStudents(); 
      } catch (error) {
        console.error("Error adding student:", error);
      }
    }

    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const handleEditStudent = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleDeleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await axios.delete(`http://localhost:8080/api/students/${id}`);
        fetchStudents(); 
      } catch (error) {
        console.error("Error deleting student:", error);
      }
    }
  };

  const filteredStudents = students.filter((row) =>
    columns.some((column) =>
      String(row[column.key]).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="flex flex-col items-center min-h-screen bg-black p-6">
      <h1 className="text-2xl text-gray-200 mb-4 font-bold">Student Management</h1>

      <div className="flex justify-between w-full max-w-4xl mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400">
          + Add Student
        </button>
      </div>

      <Table data={filteredStudents} columns={columns} onEdit={handleEditStudent} onDelete={handleDeleteStudent} />

      <StudentForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSaveStudent} selectedStudent={selectedStudent} />
    </div>
  );
};

export default StudentPage;
