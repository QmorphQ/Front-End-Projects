// Import:
// MUI Components:
import Container from "@mui/material/Container"
// React Components:
import Carousel from "./CommentsComponents/Carousel/Carousel.jsx"
// import CommentItem from "./CommentsComponents/CommentItem/CommentItem.jsx"
// Styles:
import styles from "./CommentsStyles"
// Others:
// import examples from "./examples"
// ===========================================
// -------------------------------------------
// ++++++

export default function Comments(){
    return(
        <Container disableGutters={true} sx={styles["comments-container"]}>
            <Carousel />
        </Container>
    )
}