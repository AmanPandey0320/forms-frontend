import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { optionAction } from "../../../../lib/store/optionSlice";
import { saveOption } from "../../../../lib/thunks/option.thunk";
import { optionStyles } from "./styles";

const SingleMCQ = ({ qid, oids, ...props }) => {
  const option = useSelector((state) => state.option.data);
  const dispatch = useDispatch();
  const classes = optionStyles();
  const isMounted = useRef(false);
  const [val, setVal] = useState(0);
  const [pval, setPval] = useState(0);
  /**
   * lei -> last edited id
   */
  const [lei, setLei] = useState(0);

  useEffect(() => {
    oids.forEach((oid) => {
      if (Boolean(option[oid].is_right)) {
        setVal(oid);
      }
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lei !== 0) {
        dispatch(saveOption(lei));
      }
      if (pval !== 0) {
        dispatch(saveOption(pval));
      }
    }, 1000);

    if (isMounted.current === false) {
      isMounted.current = true;
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [option]);

  const handleCheckChange = (e) => {
    const SO = true;
    const id = e.target.value;
    setLei(+id);
    console.log({ id, oids, SO, prev: val, value: true });
    dispatch(
      optionAction.editIsCorrect({ id: +id, SO, prev: +val, value: true })
    );
    setPval(+val);
    setVal(id);
  };

  const handleTitleChange = (id) => (e) => {
    const title = e.target.value;
    setLei(id);
    dispatch(optionAction.editTitle({ title, id }));
  };

  console.log("options----->", option, val);
  return (
    <RadioGroup
      value={`${val}`}
      name={`que_op_${qid}`}
      onChange={handleCheckChange}
    >
      {oids.map((oid) => (
        <FormControlLabel
          key={oid}
          value={`${oid}`}
          control={<Radio color="primary" />}
          label={
            <TextField
              onChange={handleTitleChange(oid)}
              className={classes.textField}
              value={option[oid]?.title}
            />
          }
        />
      ))}
    </RadioGroup>
  );
};

export default SingleMCQ;
