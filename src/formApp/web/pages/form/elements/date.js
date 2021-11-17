import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { useState } from "react";
import { TextField } from "@mui/material";

const DatePicker = (props) => {
  const [val, setVal] = useState(new Date());
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          inputFormat="MM/dd/yyyy"
          value={val}
          onChange={setVal}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default DatePicker;
