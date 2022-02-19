// Libraries:
import { Fragment } from 'react';
import PropTypes from "prop-types";
// -----------------------------------------------------------
// MUI Components:
import {
  Box,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
// -----------------------------------------------------------
// Styles:
import styles from "./DataListItemStyles.jsx";
// ===========================================================

export default function DataListItem({ objectData }) {
  return (
    <>
      <ListItem sx={styles.Box} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={`${objectData.image}`} />
        </ListItemAvatar>
        <ListItemText
          primary={`Name: ${objectData.name}`}
          secondary={ `Status: ${objectData.status}` }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </>
  );
}

// ===========================================================
DataListItem.defaultProps ={ 
    objectData: {
        name: 'Test DataListItem name1',
        status: 'Test DataListItem status1',
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