import React from "react";
import useStyles, {
  ThumbnailWrapper,
  TitleWrapper,
  AvatarWrapper,
  Small,
  Span,
} from "./styles";
// import Avatar from "react-avatar";
import Avatar from "../../../shared/avatar";
import { FaWpforms } from "react-icons/fa";
import { Tooltip, Grid } from "@material-ui/core";

const Thumbnail = ({ children, data, ...props }) => {
  const classes = useStyles();
  return (
    <Grid
      onClick={(e) => {
        props.handler(e);
      }}
      className={classes.cItem}
      xs={4}
      lg={2}
      sm={3}
      item
    >
      <ThumbnailWrapper borderColor={props.bg} background={props.bg}>
        <AvatarWrapper padding="6px">
          {/* <Avatar color={data.theme.color} name={data.title} size="100%" /> */}
          <Avatar size={132} variant="text" title={data?.title} />
        </AvatarWrapper>
        <TitleWrapper>
          <div>
            <FaWpforms size="1.2em" color={data.theme.color} />
            <Tooltip title={data.title}>
              <Span>{data.title.slice(0, 12)}</Span>
            </Tooltip>
          </div>
        </TitleWrapper>
      </ThumbnailWrapper>
    </Grid>
  );
};

export default Thumbnail;
