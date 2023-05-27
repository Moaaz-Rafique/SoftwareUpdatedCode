import { Typography, } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SMInput from "../components/SMInput";
import SMButton from "../components/SMButton";
import { getAuth } from "firebase/auth";
import { addNote, checkAuth } from "../config/firebaseconfig/firebaseMethods";
import NavBar from "../components/NavBar";
// import { Link, useNavigate } from "react-router-dom";
// import { LoginUser } from "../config/firebaseconfig/firebaseMethods";

function Profile(props) {

    const [disable, setDisabled] = useState(true)
    const [update, setUpdate] = useState('Edit')
    const [userData, setUserData] = useState({})
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        checkAuth()
            .then(res => {
                // console.log("user", res)
                setUserData(res || {})
                setEmail(res?.email || '')
                setFullName(res?.fullName || '');
            })
            .catch(res => {
                alert(res)
            })
    }, [])
    // console.log("udata",userData);
    const checkEdit = () => {
        if (update == 'Edit') {
            setDisabled(false)
            setUpdate('Update')
        }
        else {
            if (password == userData?.password)
                addNote("users", { ...userData, fullName, email }, userData.uid)
                    .then(res => {
                        // console.log(res)
                        alert("Updated Sucessfully")

                        setDisabled(true)
                        setUpdate('Edit')
                    })
                    .catch(res => {
                        alert(res)
                    })
            else {
                alert("Please enter correct password")
            }
        }
    }
    return (
        <>
            <NavBar />
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems="center"
                justifyContent={"center"}
                margin={"auto"}
                marginTop={15}
                padding={5}
                maxWidth={800}
                sx={{
                    boxShadow: "8px 8px 25px grey ",
                    borderRadius: "25px",
                }}
            >

                <Typography variant="h4" textAlign={"start"}>
                    Profile
                </Typography>
                <Box margin={2}>
                    <SMInput
                        label="Name"
                        type="text"
                        disabled={disable}
                        value={fullName || ''}
                        onChange={(e) => setFullName(e.target.value || '')}
                    />
                </Box>
                <Box margin={2}>
                    <SMInput
                        label="Email"
                        type="email"
                        disabled={disable}
                        value={email || ''}
                        onChange={(e) => setEmail(e.target.value || '')}

                    />
                </Box>

                {update == "Update" ? <Box margin={2}>
                    <SMInput
                        label="Confirm Password"
                        type="password"
                        disabled={disable}
                        value={password || ''}
                        onChange={(e) => setPassword(e.target.value || '')}

                    />
                </Box> : ''}

                <Box>
                    <SMButton
                        variant="contained"
                        label={update}
                        onClick={checkEdit}
                    />
                </Box>



                {/* <Box padding={2}>
                <Button color='error' variant="contained">Delete</Button>
                </Box> */}

            </Box>
        </>
    );
}

export default Profile;
