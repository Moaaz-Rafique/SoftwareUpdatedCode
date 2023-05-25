import { Typography, TextField,Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SMInput from "../components/SMInput";
import SMButton from "../components/SMButton";
// import { Link, useNavigate } from "react-router-dom";
// import { LoginUser } from "../config/firebaseconfig/firebaseMethods";

function Profile(props) {

    const [disable, setDisabled] = useState(true)
    const [update, setUpdate] = useState('Edit')

    const checkEdit = () => {
        setDisabled(false)
        setUpdate('Update')
        console.log('chl raha hn bhai ');
    }
    return (
        <>
            <Box
                display={"flex"}
                flexDirection={"row"}
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
                        label="Email*"
                        type="email"
                        disabled={disable}
                    />
                </Box>
                <Box margin={2}>
                    <SMInput
                        label="Password*"
                        type="password"
                        disabled={disable}
                    />
                </Box>
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
