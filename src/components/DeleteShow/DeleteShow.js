import React, { useContext } from 'react'
import { TableRow,TableCell, Button } from '@mui/material';
import { DataProvider } from '../Context/StoreContext';

const DeleteShow = ({data}) => {
    const { name,email,roll,address,id} =data;

    const { dispatch } = useContext(DataProvider);
    return (
        <TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{roll}</TableCell>
        <TableCell>{address}</TableCell>
        <TableCell> <Button variant="contained" color="warning" onClick={()=>dispatch({type:"DELETE_ITEM",id:id})}>DELETE</Button> </TableCell>

</TableRow>
    )
}

export default DeleteShow
