import DataListItem from "./DataListItem/DataListItem.jsx";
import styles from "./DataListStyles";
import { Box, List } from "@mui/material";
// ========================================================

export default function DataList({ data, path }) {
  return (
    <Box sx={styles.ListContainer}>
      <List sx={styles.List}>
        {data.map((character, i) => {
          return (
            <DataListItem
              path={path}
              key={character.id + i}
              objectData={character}
            />
          );
        })}
      </List>
    </Box>
  );
}

// ========================================================
