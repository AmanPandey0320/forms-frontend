import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { responseActions } from "../../../../lib/store/responseSlice";

/**
 *
 * @param {*} props
 * @returns
 */
const DatePicker = ({ qid, ...props }) => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.response.data[qid]);

  /**
   * 
   * @param {*} date 
   */
  const handleChange = (date) => {
    const value = `${date}`;
    dispatch(responseActions.edit({ qid, value, type: "ST" }));
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          inputFormat="dd/MM/yyyy"
          value={new Date(response?.ans ? response?.ans : Date.now())}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default DatePicker;
