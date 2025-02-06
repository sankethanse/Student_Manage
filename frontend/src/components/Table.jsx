import React from "react";

const Table = ({ data, columns, onEdit, onDelete }) => {
  return (
    <div className="w-full max-w-4xl bg-gray-900 shadow-xl rounded-xl overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-800">
            {columns.map((column, index) => (
              <th key={index} className="p-4 text-gray-300 font-semibold text-sm border-b border-gray-700">
                {column.header}
              </th>
            ))}
            <th className="p-4 text-gray-300 font-semibold text-sm border-b border-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-gray-800 even:bg-gray-850 hover:bg-gray-700 transition">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="p-4 text-gray-200 border-b border-gray-800">{row[column.key]}</td>
              ))}
              <td className="p-4 text-gray-200 border-b border-gray-800 flex gap-3">
                <button onClick={() => onEdit(row)} className="text-yellow-400 hover:text-yellow-300 transition">
                  Edit
                </button>
                <button onClick={() => onDelete(row.id)} className="text-red-400 hover:text-red-300 transition">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
