import { GoogleLogin } from "react-google-login";
import { useMediaQuery } from "react-responsive";
import GoogleIcon from "../../../assets/icons/google.svg";
import { successGoogle, failureGoogle } from "../../../lib/utils/user";
import Icon from "../image/icons";
import Button from "./index";
import dotenv from "dotenv";
dotenv.config();

const clientId = process.env.REACT_APP_google_client_id;

const GoogleBtn = () => {
  const size = useMediaQuery({
    query: "(max-device-width: 750px)",
  })
    ? ["1.1em", "2%", "4px"]
    : ["2em", "1%", "8px"];

  return (
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <Button
          onClick={renderProps.onClick}
          position="absolute"
          bg="#fff"
          borderRadius={size[2]}
          padding="4px"
          top="20%"
          right={size[1]}
        >
          <Icon src={GoogleIcon} size={size[0]} />
        </Button>
      )}
      onSuccess={successGoogle}
      onFailure={failureGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleBtn;
