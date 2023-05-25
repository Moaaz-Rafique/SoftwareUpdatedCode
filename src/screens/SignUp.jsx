import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SMInput from "../components/SMInput";
import SMButton from "../components/SMButton";
import { Link } from "react-router-dom";
import { SignUpUser } from "../config/firebaseconfig/firebaseMethods";
import SMSelect from "../components/SMSelect";

function SignUp(props) {
  const [model, setModel] = useState({});

  let createUser = () => {
    console.log(model);
    SignUpUser(model)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        margin={"auto"}
        marginTop={15}
        padding={5}
        maxWidth={400}
        sx={{
          boxShadow: "8px 8px 25px grey ",
          borderRadius: "25px",
        }}
      >
        <Typography variant="h4" textAlign={"start"}>
          SignUp
        </Typography>

        <Box margin={2}>
          <SMInput
            label="FullName*"
            type="text"
            onChange={(e) => setModel({ ...model, fullName: e.target.value })}
          />
        </Box>

        <Box margin={2}>
          <SMInput
            label="Password*"
            type="password"
            onChange={(e) => setModel({ ...model, password: e.target.value })}
          />
        </Box>
        <Box margin={2}>
          <SMInput
            label="Email*"
            type="email"
            onChange={(e) => setModel({ ...model, email: e.target.value })}
          />
        </Box>
        <Box margin={2}>
          <SMSelect
            dropDownHeading={"UserType"}
            dropDownOptions={[
              {
                value: "1",
                option: "Admin",
              },
              {
                value: "2",
                option: "Institute",
              },
              {
                value: "3",
                option: "Student",
              },
            ]}
            onChange={(e) => setModel({ ...model, userType: e.target.value })}
          />
        </Box>
        <Box>
          <SMButton label="SignUp" onClick={createUser} />
        </Box>
        <Box>
          <Typography variant="p" textAlign={"start"}>
            Already have Account  
            <Link rel="stylesheet" to="/login">
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default SignUp;
