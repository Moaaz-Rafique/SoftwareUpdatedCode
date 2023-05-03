import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SMSelect(props) {
  const { dropDownHeading, dropDownOptions, myClass } = props;
  const [option, setOption] = React.useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setOption(event.target.value);
  };

  return (
    <Box sx={{ m: 2, minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{dropDownHeading}</InputLabel>
        <Select
          className={myClass}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label={dropDownHeading}
          onChange={handleChange}
        >
          {dropDownOptions.map((x, i) => {
            return (
              <MenuItem key={i} value={x.value}>
                {x.option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
