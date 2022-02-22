import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./LogOutBtn";
// ======================================================================

export default function LogOutBtn({ handler }) {
  const pressets = {
    IconButton: {
      disableRipple: true,
      children: <LogoutIcon sx={styles.LogOutIcon} />,
    },
  };
  return (
    <IconButton
      sx={styles.LogOutBtnContainer}
      {...pressets.IconButton}
      onClick={handler}
    />
  );
}
// =======================================================================
LogOutBtn.defaultProps = {
  handler: () => console.log("Test LogOutBtn handler"),
};

LogOutBtn.propTypes = {
  handler: PropTypes.func,
};
