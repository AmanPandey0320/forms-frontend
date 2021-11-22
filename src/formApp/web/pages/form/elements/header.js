import { makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { themes } from "../../../../assets/data/theme";

const useStyles = makeStyles((theme) => ({
  img: {
    height: "20vh",
    "@media screen and (max-width: 1200px)": {},
    "@media screen and (max-width: 800px)": {},
    "@media screen and (max-width: 500px)": {
      width: "95vw",
      height: "auto",
    },
    "@media screen and (max-width: 360px)": {},
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const bg = useSelector((state) => state.form.data?.theme?.header);
  return (
    <>
      {props.bg && (
        <div className={classes.img}>
          <img
            width="100%"
            alt="header-img"
            height="100%"
            style={{ borderRadius: "10px" }}
            src={bg ? themes[bg].img : themes[0].img}
          />
        </div>
      )}
    </>
  );
};

export default Header;
