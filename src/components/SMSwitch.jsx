import * as React from "react";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function SMSwitch(props) {
  const { disabled, defaultchecked, color } = props;
  return (
    <div>
      <Switch
        {...label}
        disabled={disabled}
        defaultChecked={defaultchecked}
        color={color}
      />
    </div>
  );
}
