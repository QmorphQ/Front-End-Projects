import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./ProfileBtnStyles";
// =================================================
export default function ProfileBtn({ handler }) {
  const pressets = {
    IconButton: {
      children: <AccountCircleIcon sx={styles.ProfileIcon} />,
      disableRipple: true,
    },
  };

  return (
    <IconButton
      onClick={handler}
      sx={styles.IconBtn}
      {...pressets.IconButton}
    />
  );
}

// =================================================
ProfileBtn.defaultProps = {
  handler: () => ("Test Profile handler"),
};

ProfileBtn.propTypes = {
  handler: PropTypes.func,
};
