// MUI Components:
import { AppBar, Toolbar } from "@mui/material";
// React components:
import Search from "./HeaderComponents/Search/Search.jsx";
// Styles:
import styles from "./HeaderStyle.jsx";
// ============================================================

export default function Header({ arrOfOptions }) {
  return (
      <AppBar position="static" sx={styles.HeaderContainer}>
        <Toolbar sx={styles.ToolBar}>
          <Search fetchedData={arrOfOptions} />
        </Toolbar>
      </AppBar>
  );
}
// ============================================================
