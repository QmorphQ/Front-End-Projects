import { Box } from "@mui/material";
import DataList from "./DataList/DataList.jsx";
import styles from "./DisplayContainerStyles";
// ===========================================================

export default function DisplayContainer({ arrayOfCharacters, routePath }) {
  return (
    <Box className="display-container" sx={styles.DisplayContainer}>
      <Box className="display" sx={styles.Display}>
        <DataList path={routePath} data={arrayOfCharacters} />
      </Box>
    </Box>
  );
}
// =============================================================
