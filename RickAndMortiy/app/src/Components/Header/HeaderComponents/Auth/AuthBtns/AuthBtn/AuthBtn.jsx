import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import styles from "./AuthBtnStyles";
// ==========================================================

const pressets = {
  Button: {
    size: "small",
    disableRipple: true,
  },
};

export default function AuthBtn({ handler, text }) {
  return (
    <Button onClick={handler} sx={styles.BtnContainer} {...pressets.Button}>
      {text}
    </Button>
  );
}
// ==========================================================
AuthBtn.defaultProps = {
  text: "test",
  handler: () => console.log("test Auth button handler"),
};

AuthBtn.propTypes = {
  handler: PropTypes.func,
  text: PropTypes.string,
};
