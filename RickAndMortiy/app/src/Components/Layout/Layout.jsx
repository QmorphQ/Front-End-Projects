// Libraries:
import { Outlet } from "react-router-dom";
// MUI Components:
import { Container, Box } from "@mui/material";
// React components:
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
// Styles:
import styles from "./Layout";

export default function Layout({
  fetchedData,
  loadingSatus,
  shouldUpdate,
  callbackFunc,
}) {
  return (
    <Box className="layout" sx={styles.LayoutContainer}>
      <Box className="header" sx={styles.Header}>
        <Header
          callbackFunc={callbackFunc}
          update={shouldUpdate}
          requestIsSending={loadingSatus}
          arrOfOptions={fetchedData}
        />
      </Box>
      <Box className="page" sx={styles.Page}>
        <Outlet />
      </Box>
      <Box className="footer" sx={styles.Footer}>
        <Footer />
      </Box>
    </Box>
  );
}
