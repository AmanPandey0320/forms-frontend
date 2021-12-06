import { Grid, IconButton, Tooltip, Typography } from "@material-ui/core";
import { MdDownloadForOffline } from "react-icons/md";
import { useToasts } from "react-toast-notifications";
import { mimeTypeIcon } from "./logic";

/**
 *
 * @param {*} param0
 * @returns
 */
const FileDownload = ({ file, ...props }) => {
  const toast = useToasts();
  const baseUrl = process.env.REACT_APP_backend_api_url;
  const downloadFile = (e) => {
    const _url = `${baseUrl}/api/storage/download/${file?.sname}`;
    if (Boolean(file?.sname)) {
      window.location = _url;
    } else {
      toast.addToast("Error downloading file", { appearance: "error" });
    }
  };
  return (
    <Grid container direction="row" spacing={1}>
      <Grid item>{mimeTypeIcon(file?.type, file?.name)}</Grid>
      <Grid item>
        <Typography component="span">{file?.name}</Typography>
      </Grid>
      <Grid item>
        <Tooltip title="Download file">
          <IconButton onClick={downloadFile} size="small" color="primary">
            <MdDownloadForOffline />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default FileDownload;
