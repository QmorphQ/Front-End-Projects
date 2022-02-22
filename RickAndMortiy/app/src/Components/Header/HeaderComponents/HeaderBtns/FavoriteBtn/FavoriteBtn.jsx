import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IconButton, Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./FavoriteBtnStyles";

// ============================================================

export default function FavoriteBtn({ quantity, linkPath }) {
  const pressets = {
    IconButton: {
      disableRipple: true,
      children: (
        <Badge
          showZero={false}
          aria-label="favorites"
          badgeContent={quantity}
          sx={styles.Badge}
        >
          <FavoriteIcon sx={styles.FavoriteIcon} />
        </Badge>
      ),
    },
  };
  return (
    <Link to={linkPath}>
      <IconButton
        sx={styles.FavoriteBtnContainer}
        {...pressets.IconButton}
      ></IconButton>
    </Link>
  );
}
// ============================================================
FavoriteBtn.defaultProps = {
  quantity: 0,
  linkPath: "favorite",
};

FavoriteBtn.propTypes = {
  quantity: PropTypes.number,
  linkPath: PropTypes.string,
};
