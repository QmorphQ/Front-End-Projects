// Libraries:
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// MUI Components:
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./HomeBtnStyle";
// =========================================================================

export default function HomeBtn({ linkPath, transformCondition }) {
  return (
    <Link
      style={{
        marginLeft: "20px",
        pointerEvents: transformCondition && "none",
      }}
      to={linkPath}
    >
      {
        <IconButton
          disableRipple
          disabled={transformCondition}
          sx={styles.IconBtn}
          aria-label="back to home page"
          size="large"
        >
          <HomeIcon sx={{ width: 40, height: 40 }} />
          {!transformCondition && <ArrowBackIcon sx={{ marginLeft: "10px" }} />}
        </IconButton>
      }
    </Link>
  );
}

// =========================================================================
HomeBtn.defaultProps = {
  linkPath: "/",
};

HomeBtn.propTypes = {
  linkPath: PropTypes.string,
  transformCondition: PropTypes.bool,
};
