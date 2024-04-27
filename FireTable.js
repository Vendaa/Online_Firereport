// FireTable.js

import React from 'react';
import './FireTable.css'; // Import CSS file

function FireTable({ submittedData }) {
  // Check if submittedData is empty
  if (!submittedData || submittedData.length === 0) {
    return <p>No data submitted yet.</p>;
  }

  return (
    <div className="table-container">
      <h2>Submitted Fire Data</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Cause</th>
            <th>Severity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.location}</td>
              <td>{data.cause}</td>
              <td>{data.severity}</td>
              <td>{data.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FireTable;
