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
import Helper from './utils/Helper/Helper';
// -------------------------------------------------
// Styles:
import styles from "./Styles/AppStyle.jsx";
// =================================================

function App() {
  const [data, setData] = useState([{}]);
  const [isLoaded, setIsLoaded] = useState(false);
  // -----------------------
  const getData = async (url) => {
    return fetch(url)
      .then((r) => r.json())
      .then(r => setData(r.results)).
      then(() => setIsLoaded(true));
  };
  useEffect(() => {
    getData(Helper.urls.allCharacters);
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  // -----------------------
  // ================================================== RENDER ========================================
  if (!isLoaded){
    return (<div>ПОШЕЛ НАХЕР</div>)
  }
  return (
    <Box sx={styles.AppContainer}>
      <Header arrOfOptions={data} />
      <Routes>
        <Route path="/" element={<DisplayContainer />}/>
        <Route path="profile" ellement={<Profile />} />
      </Routes>
    </Box>
  );
}

export default App;
