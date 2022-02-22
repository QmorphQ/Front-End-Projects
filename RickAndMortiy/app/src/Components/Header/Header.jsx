// Libraries:
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// MUI Components:
import { AppBar, Toolbar, Box } from "@mui/material";
// React components:
import Search from "./HeaderComponents/Search/Search.jsx";
import HomeBtn from "./HeaderComponents/HeaderBtns/HomeBtn/HomeBtn.jsx";
import Auth from "./HeaderComponents/Auth/Auth.jsx";
import FavoriteBtn from "./HeaderComponents/HeaderBtns/FavoriteBtn/FavoriteBtn.jsx";
// Addons:
import Helper from "../../utils/Helper/Helper";
// Styles:
import styles from "./HeaderStyle";
// ============================================================

export default function Header({
  arrOfOptions,
  requestIsSending,
  update,
  callbackFunc,
}) {
  let location = useLocation();
  const [favoritesQuantity, setFavoritesQuantity] = useState(0);
  useEffect(() => {
    return (
      update && setFavoritesQuantity(Helper.getFavoriteItems().length - 1),
      callbackFunc(false)
    );
  }, [update]);
  useEffect(() => {
    return setFavoritesQuantity(Helper.getFavoriteItems().length - 1);
  }, []);
  return (
    <AppBar
      className="header-container"
      position="static"
      sx={styles.HeaderContainer}
    >
      <Toolbar sx={styles.ToolBar}>
        <Box sx={styles.LeftBlockContainer}>
          <Search isLoading={requestIsSending} fetchedData={arrOfOptions} />
          <HomeBtn transformCondition={location.pathname === "/"} />
        </Box>
        <Box sx={styles.RightBlockContsiner}>
          <FavoriteBtn quantity={favoritesQuantity} />
          <Auth />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
// ============================================================

Header.propTypes = {
  arrOfOptions: PropTypes.arrayOf(PropTypes.object),
  requestIsSending: PropTypes.bool,
};
