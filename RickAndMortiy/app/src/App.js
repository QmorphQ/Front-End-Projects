import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// MUI components:
import { Box } from "@mui/material";
// -------------------------------------------------
// React components:
import Header from "./Components/Header/Header.jsx";
import DisplayContainer from "./Components/DisplayContainer/DisplayContainer.jsx";
import Profile from "./Components/Profile/Profile.jsx";
// -------------------------------------------------
// Addons:
import Helper from "./utils/Helper/Helper";
// -------------------------------------------------
// Styles:
import styles from "./Styles/AppStyle.jsx";
// =================================================

function App() {
  const [data, setData] = useState([{}]);
  const [requestStatus, setRequestStatus] = useState("sending");
  // -----------------------
  const getData = async (url) => {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r.results))
      .then(() => setTimeout(() => setRequestStatus("success"), 2000) )
      .catch((error) => (console.warn(error.message) ,setRequestStatus("error")))
  };
  useEffect(() => {
    console.log(data);
  }, []);
  useEffect(() => {
    getData(Helper.urls.allCharacters);
  }, []);
  useEffect(() => {
    console.log('Request status: ' ,requestStatus);
    requestStatus === "sending" ? console.time('timer') : console.timeEnd('timer');
  }, [requestStatus]);
  useEffect(() => {
   if (requestStatus === 'success') console.log('Fetched data: ', data);
  }, [requestStatus]);
  // -----------------------
  // ================================================== RENDER ========================================
  return (
    <Box sx={styles.AppContainer}>
      <Header requestIsSending={requestStatus === 'sending'} arrOfOptions={data} />
      <Routes>
        <Route path="/" element={<DisplayContainer arrayOfCharacters={data} />} />
        <Route path="profile" ellement={<Profile />} />
      </Routes>
    </Box>
  );
}

export default App;
