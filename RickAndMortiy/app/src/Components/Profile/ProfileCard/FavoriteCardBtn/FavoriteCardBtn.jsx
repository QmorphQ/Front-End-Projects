import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styles from "./FavoriteCardBtnStyles";

// ======================================================================
export default function FavoriteCardBtn({ handler, transformCondition }) {
  const pressets = {
    IconButton: {
      onClick: handler,
      disableRipple: true,
    },
  };
  return (
    <IconButton {...pressets.IconButton} sx={styles.IconButton}>
      {transformCondition ? (
        <FavoriteIcon sx={styles.FavoriteIcon} />
      ) : (
        <FavoriteBorderIcon sx={styles.FavoriteBorderIcon} />
      )}
    </IconButton>
  );
}
// ======================================================================
FavoriteCardBtn.defaultProps = {
  handler: () => console.log("tTest Card Favorite Btn"),
  transformCondition: false,
};

FavoriteCardBtn.propTypes = {
  handler: PropTypes.func,
  transformCondition: PropTypes.bool,
};
