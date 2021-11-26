import { Container, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { DataProvider } from '../Context/StoreContext'



const Search = () => {
    const { state } = useContext(DataProvider)
    const [search,setSearch] =useState("");

    const filterItem = state.filter(item =>(
        item.name.toLowerCase().includes(search.toLowerCase())
    ))

  

    return (

        <Container>
            <Paper elevation={5}>
                <TextField type="search" onChange={(e)=>setSearch(e.target.value)} placeholder="Search anything" fullWidth sx={{mt:"10px",mb:"20px"}}/>
                <Table>
                    <TableHead sx={{background:"lightgray"}}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Roll</TableCell>
                            <TableCell>Address</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            filterItem.map(data => (
                                <TableRow>
                                    <TableCell>{data.name}</TableCell>
                                    <TableCell>{data.email}</TableCell>
                                    <TableCell>{data.roll}</TableCell>
                                    <TableCell>{data.address}</TableCell>
                                 

                                </TableRow>
                            ))
                        }
                    </TableBody>

                </Table>
            </Paper>
        </Container>

    )
}

export default Search
