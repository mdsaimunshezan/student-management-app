import { Box, Button, LinearProgress, TextField, Typography,Alert } from '@mui/material'
import React, { useContext, useState } from 'react'
import { DataProvider } from '../Context/StoreContext';
import { v4 as uuidv4 } from 'uuid';

const Added = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [roll, setRoll] = useState("");
    const [address, setAddress] = useState("");

    const [error, setError] = useState("");
    const [msg, setMsg] = useState(false);
    const [condition,setCondition] =useState(false);
    const [succrss,setSuccess] =useState(false);

    const { dispatch } = useContext(DataProvider);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMsg(true)

        setTimeout(() => {

            setMsg(false)

            const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            if (name == "" && email == "" && roll == "" && address == "") {
                setError("plese input all field")
                setCondition(true);
                
                return;

            }
            else if (!regexEmail.test(email)) {
                setError("plese enter valid email")
                setCondition(true);
                return;
            }

            else if (roll.length <= 5) {
                setError("Plese inter 6 digite roll number");
                setCondition(true);
                return;
            }



            const newStudent = {
                id: uuidv4(),
                name,
                email,
                roll,
                address
            }
            dispatch({ type: "ADD_DATA", newStudent })



            setError("")

            setName("");
            setEmail("")
            setRoll("");
            setAddress("")
            setCondition(false);
            setSuccess(true);


        }, 3000)


    }


    return (
        <div>
            <Box width="500px" mx="auto" boxShadow={5} p={3} mt="50px">

                <form onSubmit={handleSubmit}>
                    <TextField type="text" value={name} placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} sx={{ mb: "30px" }} fullWidth size="small" />
                    <TextField type="text" value={email} placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} sx={{ mb: "30px" }} fullWidth size="small" />
                    <TextField type="number" value={roll} placeholder="Enter Your Roll" onChange={(e) => setRoll(e.target.value)} sx={{ mb: "30px" }} fullWidth size="small" />
                    <TextField type="text" value={address} placeholder="Enter Your Address" onChange={(e) => setAddress(e.target.value)} sx={{ mb: "30px" }} fullWidth size="small" />
                    <Button variant="contained" color="success" fullWidth type="submit" sx={{ mb: "20px" }}>Submit</Button>

                  {condition ? <Alert variant="filled" severity="error" sx={{fontSize:"18px",mb:"10px"}}>{error}</Alert> :""}  
                  {succrss ? <Alert variant="filled" severity="success" sx={{fontSize:"18px",mb:"10px"}}>Student Added Successfull</Alert> :""}

                    {msg && <LinearProgress />}
                </form>
            </Box>
        </div>
    )
}

export default Added
