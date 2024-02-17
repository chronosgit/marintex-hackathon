// Example: src/TopTable.js

import React from 'react';

const TopTable = ({ dataPoints, onRowClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {dataPoints.map((value, index) => (
          <tr key={index} onClick={() => onRowClick(index + 1, value)}>
            <td>{index + 1}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopTable;
