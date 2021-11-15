import React from "react";
import { useSelector } from "react-redux";
import { themes } from "../../../../assets/data/theme";
const Header = (props) => {
  const bg = useSelector((state) => state.form.data?.theme?.header);
  console.log(bg);
  return (
    <>
      {props.bg && (
        <div style={{ height: "20vh" }}>
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
