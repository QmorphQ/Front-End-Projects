// Import:
// import { useState, useEffect } from 'react'
import { Container, Box } from "@mui/material";
// ===============================
// -------------------------------
// ++++++
const windowH = "200px";
// const windowW = "80%";
// const itemWidth = "200px";
const itemHeight = "200px";
// const itemsQuantity = 3;
// const itemGap = "5px";

function CarouselItem({ text }) {
  return (
    <Box
      className="carousel-item"
      sx={{
        width: "200px",
        height: windowH,
        border: "1px solid red",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      {text}
    </Box>
  );
}

export default function Carousel({ ...props }) {
  return (
    <Container
      className="carousel-container"
      disableGutters={true}
      sx={{
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.2)",
      }}
    >
      <Box
        className="carousel-window"
        sx={{
          border: "1px solid black",
          width: "600px",
          height: itemHeight,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: "red",
        }}
      >
        <Box
          className="carousel-room"
          sx={{
            border: "1px solid green",
            width: "fit-content",
            height: itemHeight,
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ><CarouselItem /></Box>
      </Box>
    </Container>
  );
}
