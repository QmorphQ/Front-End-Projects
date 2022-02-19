// Libraries:
import PropTypes from "prop-types";
// MUI Components:
import { AppBar, Toolbar } from "@mui/material";
// React components:
import Search from "./HeaderComponents/Search/Search.jsx";
// Styles:
import styles from "./HeaderStyle.jsx";
// ============================================================

export default function Header({ arrOfOptions, requestIsSending }) {
  return (
      <AppBar className='header' position="static" sx={styles.HeaderContainer}>
        <Toolbar sx={styles.ToolBar}>
         <Search isLoading={requestIsSending} fetchedData={arrOfOptions} />
        </Toolbar>
      </AppBar>
  );
}
// ============================================================

Header.propTypes = {
  arrOfOptions: PropTypes.arrayOf(PropTypes.object),
  requestIsSending: PropTypes.bool,
};
