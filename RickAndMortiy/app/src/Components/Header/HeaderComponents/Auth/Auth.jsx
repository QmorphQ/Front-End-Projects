import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ProfileBtn from "./AuthBtns/ProfileBtn/ProfileBtn.jsx";
import AuthBtn from "./AuthBtns/AuthBtn/AuthBtn.jsx";
import LogOutBtn from "./AuthBtns/LogOutBtn/LogOutBtn.jsx";
import styles from "./AuthStyles";

export default function Auth() {
  const [isAuth, setIsAuth] = useState(false);
  const loginHandler = () => setIsAuth(true);
  const signUpHandler = () => setIsAuth(true);
  const logOutBtn = () => setIsAuth(false);
  return (
    <Box sx={styles.AuthContainer}>
      {isAuth ? (
        <Box>
          <ProfileBtn />
          <LogOutBtn handler={logOutBtn} />
        </Box>
      ) : (
        <>
          <AuthBtn handler={loginHandler} text={"login"} />
          <AuthBtn handler={signUpHandler} text={"sign up"} />
        </>
      )}
    </Box>
  );
}
