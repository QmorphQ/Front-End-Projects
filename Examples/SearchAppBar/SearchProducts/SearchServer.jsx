import { TextField } from "@mui/material";
import Container from "@mui/material/Container";
import { useState } from "react";
import searchValidator from "./SearchComponents/SearchLogic/searchValidator";
import searchObserver from "./SearchComponents/SearchLogic/searchObserver";
import searchNormalize from "./SearchComponents/SearchLogic/searchNormalize";
import searchFilter from "./SearchComponents/SearchLogic/searchFilter";
import { useEffect } from "react";
// ================================================================
export default function SearchServer({ products }) {
  // ---------------------------------------------------
  const pressets = {
    styles: {
      Container: {
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
      },
      Input: {
        margin: "auto",
      },
    },
  };
  // ---------------------------------------------------
  const [requestStatus, setRequestStatus] = useState(false);
  const [arrOfProducts, setArrOfProducts] = useState([])
  const [DB, setDB] = useState();
  const [input, setInput] = useState("");
  // ---------------------------------------------------
  // Functions:
  const getSearchProducts = (arrOfProductsItemNo = []) => {
         arrOfProductsItemNo.map(async (itemNo) => {
      await  fetch(`http://localhost:5000/api/products/${itemNo}`).
        then((r) => r.json()).
        then((r) => console.log(r))
       

    })
    setRequestStatus(false);
    console.log(arrOfProducts);
  }
  const handleInput = (event) => {
    let text = event.target.value;
    setInput(text);
  };
  useEffect(() => {
    if (searchObserver(input)){
        setRequestStatus(true);
    }
    console.log(requestStatus)
  }, [input])
  // ---------------------------------------------------
  // Life cycles:
  useEffect(() => {
    fetch('./searchDB.json').
    then((e) => e.json()).
    then((e) => setDB(e))
  }, []);
  useEffect(() => {
   if (requestStatus) {
       let regEx = new RegExp(`${input.trim()}`,'gi')
       let filteredProducts = (DB.filter((prod) => regEx.test(prod.name))).map((prod) => prod.itemNo);
       return getSearchProducts(filteredProducts)}
   
  }, [requestStatus])
  // ---------------------------------------------------
  return (
    <Container sx={pressets.styles.Container}>
      <TextField
        disabled={!DB}
        placeholder="Enter product name..."
        id="outlined-name"
        label="Search"
        value={input}
        onChange={handleInput}
        sx={pressets.styles.Input}
      ></TextField>
    </Container>
  );
}
// ================================================================
