import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ProfileCard from "./ProfileCard/ProfileCard.jsx";
import styles from "./ProfileStyles.jsx";

export default function Profile({ callbackFunc }) {
  let { id } = useParams();
  const [characterProfile, setCharacterProfile] = useState("");
  const [episodesName, setEpisodeName] = useState([]);
  const [cardIsLoaded, setCardIsLoaded] = useState(false);
  useEffect(() => {
    setEpisodeName([]);
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((r) => r.json())
      .then((r) => (setCharacterProfile(r), r))
      .then((r) =>
        r.episode.map((url) =>
          fetch(url)
            .then((r) => r.json())
            .then((r) =>
              setEpisodeName((arrOfNames) => [...arrOfNames, r.name])
            )
        )
      )
      .then(() => setCardIsLoaded(true));
  }, [id]);
  if (!cardIsLoaded) {
    return <h1>Loading</h1>;
  }
  return (
    <Box sx={styles.ProfileContainer}>
      <ProfileCard
        callbackFunc={callbackFunc}
        profileObject={{ ...characterProfile, episode: episodesName }}
      />
    </Box>
  );
}
