import { TableRow,TableCell } from '@mui/material';
import React from 'react'

const ShowData = ({data}) => {
    const { name,email,roll,address} =data;
    return (
        <TableRow>
                        <TableCell>{name}</TableCell>
                        <TableCell>{email}</TableCell>
                        <TableCell>{roll}</TableCell>
                        <TableCell>{address}</TableCell>
        </TableRow>
    )
}

export default ShowData
