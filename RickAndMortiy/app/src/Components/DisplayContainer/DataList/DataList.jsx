import DataListItem from './DataListItem/DataListItem.jsx';
import styles from "./DataListStyles.jsx";
import {
  Box,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
// ========================================================

export default function DataList({ data }) {
  return <Box sx={styles.ListContainer}>
      <List sx={styles.List}>
     { data.map((character, i) => {
      return <DataListItem key={(character.id + i)} objectData={character} />
     })}

      </List>
  </Box>;
};

// ========================================================

