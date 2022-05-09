import {
  Divider,
  Grid,
  Icon,
  IconButton,
  Paper,
  Tooltip,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
} from "@material-ui/core";
import { FaUserCircle } from "react-icons/fa";
import {
  MdDelete,
  MdDownload,
  MdAccessTimeFilled,
  MdOutlineAlternateEmail,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { formatDate } from "../../../../lib/utils/dateFormater";
import { resViewStyles } from "./style";
import SmallText from "../elements/smallText";
import ParagraphText from "../elements/paraText";
import DatePicker from "../elements/date";
import FileDownload from "../elements/fileDownload";
import ReactToPrint from "react-to-print";
import { useRef } from "react";

/**
 *
 * @param {*} param0
 * @returns
 */
const ResponseView = ({ rid, ...props }) => {
  const classes = resViewStyles();
  const response = useSelector((state) => state.response.allResponse[rid]);
  const form = useSelector((state) => state.response.sentForm[rid]);
  const printRef = useRef();

  console.log("response view log ------->", response, form);
  return (
    <>
      <div ref={printRef}>
        <Grid direction="column" spacing={1} container>
          <Grid item>
            <Paper className={classes.paper}>
              <Grid container spacing={3} direction="column">
                <Grid item>
                  <Grid container direction="row" justify="space-between">
                    <Grid item>
                      <Grid container spacing={1} direction="row">
                        <Grid item>
                          <Icon color="primary">
                            <FaUserCircle size="2em" />
                          </Icon>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.font1}>
                            {response?.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction="row">
                        <Grid item>
                          <ReactToPrint
                            trigger={() => (
                              <Tooltip title="Download">
                                <IconButton color="primary">
                                  <MdDownload />
                                </IconButton>
                              </Tooltip>
                            )}
                            content={() => printRef.current}
                          />
                        </Grid>
                        <Grid item>
                          <Tooltip title="Delete">
                            <IconButton color="primary">
                              <MdDelete />
                            </IconButton>
                          </Tooltip>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item>
                  <Grid container justify="space-between" direction="row">
                    <Grid item>
                      <Grid container spacing={1} direction="row">
                        <Grid item>
                          <Icon color="primary">
                            <MdOutlineAlternateEmail />
                          </Icon>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.font2}>
                            {response?.email}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container spacing={1} direction="row">
                        <Grid item>
                          <Icon color="primary">
                            <MdAccessTimeFilled />
                          </Icon>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.font2}>
                            {formatDate(response?.time).fullDate}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid xs={12} item>
            <div>
              <Grid container spacing={1} direction="column">
                {form?.sections?.map((sec, idx) => (
                  <Grid xs={12} key={sec?.id} item>
                    <Paper className={classes.paper}>
                      <Grid spacing={1} container direction="column">
                        <Grid item>
                          <Typography className={classes.font3}>
                            Section {idx + 1} of {form?.sections?.length}{" "}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Divider />
                        </Grid>
                        {sec?.questions?.map((que, idx) => (
                          <Grid key={que?.id} item>
                            <Grid
                              container
                              direction="row"
                              justify="space-evenly"
                            >
                              <Grid item>
                                <Typography component="span">
                                  {idx + 1}.
                                </Typography>
                              </Grid>
                              <Grid md={11} item>
                                <Grid container direction="column">
                                  <Grid item>
                                    <Typography>{que?.title}</Typography>
                                  </Grid>
                                  <Grid item>
                                    {que?.type === "ST" && (
                                      <SmallText
                                        isRes={true}
                                        val={response[que?.id]}
                                      />
                                    )}
                                    {que?.type === "PG" && (
                                      <ParagraphText
                                        isRes={true}
                                        val={response[que?.id]}
                                      />
                                    )}
                                    {que?.type === "SO" && (
                                      <RadioGroup
                                        value={`${response[que?.id]?.ans}`}
                                      >
                                        {que?.options?.map((opt) => {
                                          return (
                                            <FormControlLabel
                                              disabled
                                              key={opt?.id}
                                              value={`${opt?.id}`}
                                              label={opt?.title}
                                              control={
                                                <Radio color="primary" />
                                              }
                                            />
                                          );
                                        })}
                                      </RadioGroup>
                                    )}
                                    {que?.type === "MO" && (
                                      <Grid container direction="column">
                                        {" "}
                                        {que?.options?.map((opt) => {
                                          return (
                                            <Grid key={opt?.id} item>
                                              <FormControlLabel
                                                disabled
                                                label={opt?.title}
                                                control={
                                                  <Checkbox
                                                    checked={Boolean(
                                                      response[que?.id]?.ans[
                                                        opt?.id
                                                      ]
                                                    )}
                                                    color="primary"
                                                  />
                                                }
                                              />
                                            </Grid>
                                          );
                                        })}
                                      </Grid>
                                    )}
                                    {que?.type === "DD" && (
                                      <DatePicker
                                        isRes={true}
                                        value={response[que?.id]?.ans}
                                      />
                                    )}
                                    {que?.type === "FU" && (
                                      <FileDownload
                                        file={response[que?.id]?.ans}
                                      />
                                    )}
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ResponseView;
