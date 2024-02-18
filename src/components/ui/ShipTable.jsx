import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ShipTable = ({ ships = {}, onRowClick}) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (index, ship) => {
    setSelectedRow(index);
    onRowClick(index, ship);
    console.log(ship);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Ship</TableCell>
          <TableCell>Fuel</TableCell>
          <TableCell>Electricity</TableCell>
          <TableCell>Solar battery</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {ships && ships.map((ship, index) => (
          <TableRow
            key={index}
            style={(selectedRow === index) ? {selectedRow} : (null)} // Apply a class based on the selectedRow state
            onClick={() => handleRowClick(index, ship)}
          >
            <TableCell>{ship.ship}</TableCell>
            <TableCell>{ship.fuel}</TableCell>
            <TableCell>{ship.electricity}</TableCell>
            <TableCell>{ship.solarBattery}</TableCell>
            <TableCell>
              {ship.createdDate}
              {/* <Avatar>
                <DirectionsBoatIcon />
              </Avatar> */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ShipTable;
