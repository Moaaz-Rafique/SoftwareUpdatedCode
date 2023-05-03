import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SMInput from "../components/SMInput";
import SMButton from "../components/SMButton";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../config/firebaseconfig/firebaseMethods";

function SignUp(props) {
  const navigate = useNavigate();
  const [model, setModel] = useState({});
  const [loader, setLoader] = useState(false);

  let signIn = () => {
    setLoader(true);
    console.log("model", model);
    LoginUser(model)
      .then((res) => {
        setLoader(false);
        console.log(res);
        navigate("/institute");
      })
      .catch((err) => {
        setLoader(false);
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
          Login
        </Typography>

        <Box margin={2}>
          <SMInput
            label="Email*"
            type="email"
            onChange={(e) => setModel({ ...model, email: e.target.value })}
          />
        </Box>
        <Box margin={2}>
          <SMInput
            label="Password*"
            type="password"
            onChange={(e) => setModel({ ...model, password: e.target.value })}
          />
        </Box>
        <Box>
          <SMButton
            disabled={loader}
            onClick={signIn}
            variant="contained"
            label="Login"
          />
        </Box>

        <Box>
          <Typography variant="p" textAlign={"start"}>
            No Account
            <Link rel="stylesheet" to="signup">
              SignUp
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default SignUp;
