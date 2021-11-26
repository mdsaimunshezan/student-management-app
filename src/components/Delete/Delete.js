import React, { useContext } from 'react'
import { Container, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { DataProvider } from '../Context/StoreContext';
import DeleteShow from '../DeleteShow/DeleteShow';

const Delete = () => {
    const { state } = useContext(DataProvider);

    return (
        <div>
             <Container>
                 <Paper elevation={5}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Roll</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        state.map(data => <DeleteShow key={data.id} data={data}/>)
                    }
                </TableBody>

            </Table>
            </Paper>
        </Container>
        </div>
    )
}

export default Delete
