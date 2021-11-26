import { Container, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useContext } from 'react'
import { DataProvider } from '../Context/StoreContext'
import ShowData from '../ShowData/ShowData'


const Show = () => {
    const { state } = useContext(DataProvider)
    return (
       
            <Container>
                 <Paper elevation={5}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Roll</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        state.map(data => <ShowData key={data.id} data={data}/>)
                    }
                </TableBody>

            </Table>
            </Paper>
        </Container>
       
    )
}

export default Show
