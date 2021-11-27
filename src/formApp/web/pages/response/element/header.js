import { makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { themes } from "../../../../assets/data/theme";
import { headerStyle } from "./styles";

const Header = (props) => {
  const classes = headerStyle();
  const bg = props.data;
  return (
    <>
      {bg && (
        <div>
          <img
            width="100%"
            className={classes.div}
            alt="header-img"
            src={bg ? themes[bg].img : themes[0].img}
          />
        </div>
      )}
    </>
  );
};

export default Header;
