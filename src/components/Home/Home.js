import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
    return (
        <div>
           <Box p={5} bgcolor="lightgray" width="600px" mx="auto" mt="100px" boxShadow={5}>
               <Typography color="green" variant="h3" mb="20px">Student Management App</Typography>
               <Typography variant="title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint alias unde perspiciatis eum, ullam vitae sunt. Ratione modi repellendus aliquam et neque tempora accusantium error ipsum quos sapiente repellat, iusto veniam consequatur. Officia ut quo beatae nesciunt debitis sed dolor modi quam aliquid officiis! Repellat sit ipsa quibusdam dolor sint.</Typography>
               <br/>
               <Button variant="contained" color="success" sx={{mt:"20px"}}> Read More</Button>
           </Box>
        </div>
    )
}

export default Home
