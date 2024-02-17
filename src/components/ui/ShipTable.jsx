// Example: src/ShipTable.js

import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';

const selectedRow = {
  backgroundColor: 'gray',
  font: 'blue'
}

const ShipTable = ({ ships, onRowClick }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (index, ship) => {
    setSelectedRow(index);
    onRowClick(index, ship);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Path</TableCell>
          <TableCell>Fuel for All Paths</TableCell>
          <TableCell>Fuel for 1 Hour</TableCell>
          <TableCell>Ship Icon</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {ships.map((ship, index) => (
          <TableRow
            key={index}
            style={(selectedRow === index) ? {selectedRow} : (null)} // Apply a class based on the selectedRow state
            onClick={() => handleRowClick(index, ship)}
          >
            <TableCell>{ship.name}</TableCell>
            <TableCell>{ship.path}</TableCell>
            <TableCell>{ship.fuelAllPaths}</TableCell>
            <TableCell>{ship.fuelPerHour}</TableCell>
            <TableCell>
              <Avatar>
                <DirectionsBoatIcon />
              </Avatar>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ShipTable;
