// Libraries:
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
// -----------------------------------------------------------
// MUI Components:
import {
  Box,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
// -----------------------------------------------------------
// Styles:
import styles from "./DataListItemStyles";
// ===========================================================

export default function DataListItem({ objectData, path }) {
  let params = useParams();

  return (
    <Link style={{ textDecoration: "none" }} to={`${path}/${objectData.id}`}>
      <ListItem sx={styles.Box} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={`${objectData.image}`} />
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={styles.ListItemTextMain}
          secondaryTypographyProps={styles.ListItemTextSecondary}
          primary={`Name: ${objectData.name}`}
          secondary={`Status: ${objectData.status}`}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </Link>
  );
}

// ===========================================================
DataListItem.defaultProps = {
  objectData: {
    name: "Test DataListItem name1",
    status: "Test DataListItem status1",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
};

DataListItem.propTypes = {
  objectData: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    image: PropTypes.string,
  }),
};
