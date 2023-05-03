import { Home } from "@mui/icons-material";
import React from "react";
import SMIconButton from "../../components/SMIconButton";
function Comments() {
  return (
    <>
      <h1>This is Comments Screen</h1>
      <SMIconButton
        color="info"
        iconComponent={<Home />}
        spacing={0}
        direction="row"
      />
    </>
  );
}
export default Comments;
