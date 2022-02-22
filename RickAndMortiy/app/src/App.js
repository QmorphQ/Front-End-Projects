import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// MUI components:
import { Box } from "@mui/material";
// -------------------------------------------------
// React components:
import Layout from "./Components/Layout/Layout.jsx";
import DisplayContainer from "./Components/DisplayContainer/DisplayContainer.jsx";
import Profile from "./Components/Profile/Profile.jsx";
// -------------------------------------------------
// Addons:
import Helper from "./utils/Helper/Helper";
// =================================================

function App() {
  const [updateComponent, setUpdateComponent] = useState(false);
  const [data, setData] = useState([{}]);
  const [favoriteCardsId, setfFavoriteCardsId] = useState([{}]);
  const [requestStatus, setRequestStatus] = useState("sending");
  // -----------------------
  const getData = async (url) => {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r.results))
      .then(() => setTimeout(() => setRequestStatus("success"), 2000))
      .catch(
        (error) => (console.warn(error.message), setRequestStatus("error"))
      );
  };
  useEffect(() => {
    getData(Helper.urls.allCharacters);
  }, []);
  useEffect(() => {
    console.log("Request status: ", requestStatus);
    requestStatus === "sending"
      ? console.time("timer")
      : console.timeEnd("timer");
  }, [requestStatus]);
  useEffect(() => {
    Helper.setInitFavorites();
    if (Helper.getFavoriteItems().length > 1) {
      setfFavoriteCardsId(
        Helper.getFavoriteItems()
          .slice(1)
          .map((str) => Number(str))
      );
    }
  }, [updateComponent]);
  // -----------------------
  // ================================================== RENDER ========================================
  return (
    <Box>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              shouldUpdate={updateComponent}
              callbackFunc={setUpdateComponent}
              fetchedData={data}
              loadingSatus={requestStatus === "sending"}
            />
          }
        >
          <Route
            index
            element={
              <DisplayContainer
                routePath={"profile"}
                arrayOfCharacters={data}
              />
            }
          />
          <Route
            path="profile/:id"
            element={<Profile callbackFunc={setUpdateComponent} />}
          />
          <Route
            path="favorite"
            element={
              <DisplayContainer
                routePath={"profile"}
                arrayOfCharacters={data.filter((character) =>
                  favoriteCardsId.includes(character.id)
                )}
              />
            }
          />
          <Route
            path="favorite/profile/:id"
            element={<Profile callbackFunc={setUpdateComponent} />}
          />

          <Route path="*" element={<h2>PAGE NOT FOUND</h2>} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
// filter((character) => {
//   favoriteCardsId.includes((character.id).toString())
// })
