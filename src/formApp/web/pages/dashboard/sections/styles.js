import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import {
  background,
  borderColor,
  color,
  fontSize,
  padding,
} from "styled-system";

const AVATAR_SIZE = 132;

const useStyles = makeStyles((theme) => ({
  cRoot: {
    backgroundColor: "#f0fff3",
    paddingInline: theme.spacing(8),
    paddingTop: theme.spacing(2),
    minWidth: "100vw",
    [theme.breakpoints.down("sm")]: {
      paddingInline: theme.spacing(4),
      paddingTop: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      paddingInline: theme.spacing(4),
      paddingTop: theme.spacing(1),
    },
  },
  eRoot: {},
  cItem: {
    textAlign: "center",
    cursor: "pointer",
  },
}));

export const ThumbnailWrapper = styled.div`
  ${background};
  ${borderColor};
  border-style: none;
  border-width: 2.5px;
  border-radius: 4px;
  box-shadow: 2px 2px 6px grey;
  :hover {
    cursor: pointer;
  }
  max-width: 144px;
`;

export const AvatarWrapper = styled.div`
  margin: auto;
  background-color: white;
  ${padding};
  text-align: center;
  width: ${(props) => (props.size ? props.size : AVATAR_SIZE)}px;
  height: ${(props) => (props.size ? props.size : AVATAR_SIZE)}px;

  @media screen and (max-width: 1200px) {
    width: ${(props) => (props.size ? props.size : AVATAR_SIZE)}px;
    height: ${(props) => (props.size ? props.size : AVATAR_SIZE)}px;
  }
  @media screen and (max-width: 800px) {
    width: ${(props) => (props.size ? 0.8 * props.size : AVATAR_SIZE * 0.8)}px;
    height: ${(props) => (props.size ? 0.8 * props.size : AVATAR_SIZE * 0.8)}px;
  }
  @media screen and (max-width: 500px) {
    width: ${(props) =>
      props.size ? 0.62 * props.size : AVATAR_SIZE * 0.62}px;
    height: ${(props) =>
      props.size ? 0.8 * props.size : AVATAR_SIZE * 0.62}px;
  }
  @media screen and (max-width: 360px) {
    width: ${(props) => (props.size ? 0.5 * props.size : AVATAR_SIZE * 0.5)}px;
    height: ${(props) => (props.size ? 0.8 * props.size : AVATAR_SIZE * 0.5)}px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 4px;
  background-color: #ffffff;
  border-style: solid;
  border-width: 0px;
  border-radius: 2px;
  border-color: grey;
  padding: 4px 6px;
  text-overflow: ellipsis;
  overflow: hidden;
  &:hover: {
    overflow: visible;
  }
`;
export const Span = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  &:hover: {
    overflow: visible;
  }
  vertical-align: top;
`;
export const Small = styled("span")(fontSize, color);

export const formStyles = {
  root: {
    margin: "0px",
    backgroundColor: "#f0fff3",
    paddingInline: "16px",
    paddingTop: "4px",
    minWidth: "100vw",
    "@media screen and (max-width: 1200px)": {
      paddingInline: "16px",
      paddingTop: "4px",
    },
    "@media screen and (max-width: 800px)": {
      paddingInline: "12px",
      paddingTop: "4px",
    },
    "@media screen and (max-width: 500px)": {
      paddingInline: "6px",
      paddingTop: "4px",
    },
    "@media screen and (max-width: 360px)": {
      paddingInline: "4px",
      paddingTop: "2px",
    },
  },
};

export default useStyles;
