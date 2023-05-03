import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

export default function SMIconButton(props) {
  const { color, iconComponent, spacing, direction, disabled } = props;

  return (
    <Stack direction={direction} spacing={spacing}>
      <IconButton disabled={disabled} color={color}>
        {iconComponent}
      </IconButton>
    </Stack>
  );
}
