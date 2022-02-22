import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./ProfileCardStyles";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import no_image from "./no_image.png";
// ===================
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// React components:
import FavoriteCardBtn from "./FavoriteCardBtn/FavoriteCardBtn.jsx";
// Addons:
import Helper from "../../../utils/Helper/Helper";
// ===============================================

export default function ProfileCard({ profileObject, callbackFunc }) {
  const pressets = {
    favoriteHandler: () => {
      return (
        cardIsFavorite
          ? Helper.deleteFavoriteItem(profileObject.id)
          : Helper.setFavoriteItem(profileObject.id),
        setCardIsFavorite((isFav) => !isFav),
        callbackFunc(true)
      );
    },
  };
  const [cardIsFavorite, setCardIsFavorite] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;
  useEffect(() => {}, []);
  useEffect(() => {
    setCardIsFavorite((isFav) =>
      Boolean(Helper.getFavoriteItems().find((val) => val == profileObject.id))
    );
    Helper.getFavoriteItems();
  }, []);
  return (
    <Card id={profileObject.id} sx={styles.Card}>
      <FavoriteCardBtn
        transformCondition={cardIsFavorite}
        handler={pressets.favoriteHandler}
      />
      <CardMedia
        className="card-image"
        sx={styles.CardImg}
        component="img"
        alt={"image"}
        src={`${profileObject.image}`}
      />
      <Box sx={styles.ContentContainer}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="li">
            Name: {profileObject.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="li">
            Species: {profileObject.species}
          </Typography>
          <Typography gutterBottom variant="h6" component="li">
            Gender: {profileObject.gender}
          </Typography>
          <Typography gutterBottom variant="h6" component="li">
            Location: {profileObject.location.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="li">
            <IconButton
              // edge='start'
              disableRipple
              sx={{ color: open ? "#00ff01" : "black", ml: "-6px" }}
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              Episodes {open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "fit-content",
                },
              }}
            >
              {profileObject.episode.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Typography>
          <Typography gutterBottom variant="h5" component="li">
            Status: {profileObject.status}
          </Typography>
          <Typography gutterBottom variant="h5" component="li">
            Created: {`${new Date(profileObject.created).toLocaleDateString()}`}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
// ===============================================

// ProfileCard.defaultProps = {
//     profileObject: {
//         image: `${no_image}`,
//         name: 'test name',
//         species: 'test species',
//         gender: 'test gender',
//         location: 'test location',
//         episode: 'test episode',
//         status: 'test status',
//         created: 'test created',
//         id: 0,
//     },
// };

// ProfileCard.propTypes = {
//     profileObject: PropTypes.shape({
//         image: PropTypes.string,
//         name: PropTypes.string,
//         species: PropTypes.string,
//         gender: PropTypes.string,
//         location: PropTypes.string,
//         episode: PropTypes.string,
//         status: PropTypes.string,
//         created: PropTypes.string,
//         id: PropTypes.number,
//     }),
// };
