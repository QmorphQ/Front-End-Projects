import PropTypes from "prop-types";
// MUI Components:
import { AppBar, Toolbar } from "@mui/material";
// React components:
// Styles:
import styles from './FooterStyles';

export default function Footer() {
    return (
        <AppBar className='footer-container' position="static" sx={styles.FooterContainer}>
          <Toolbar sx={styles.ToolBar}/>
        </AppBar>
    );
  }
  // ============================================================