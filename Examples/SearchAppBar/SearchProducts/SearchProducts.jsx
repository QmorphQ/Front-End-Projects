import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Link from "@mui/material/Link";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import searchNormalize from './SearchComponents/SearchLogic/searchNormalize';
// ==========================================================
const pressets = {
  regEx: {
    shortName: /^.+?(?=seeds)/i,
  },
  styles: {
    InputOption: {
      border: "1px solid black",
      padding: "10px",
      width: 300,
      height: 60,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -10%)",
      display: "flex",
      alignItems: "center",
    },
  },
};
// ==========================================================
function RenderUnit({ imgUrl, name, price, style }) {
  return (
    <Card
      sx={style}
    >
      <CardMedia
        component="img"
        sx={{ width: 60, height: 60 }}
        image={imgUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="caption" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
}
// ==========================================================

export default function SearchInput({ fetchedProducts }) {
  const [card, setCard] = useState(0);
  const [arrNames, setArrNames] = useState([{}]);
  const getNames = (arr) => {
    return arr.map((prod) => ({ name: prod.name, itemNo: prod.itemNo }));
  };
  // Main search functions:
  
const handler = (e) => {
  console.log(searchNormalize('ыуувкф '))
}
  useEffect(() => {
    document.addEventListener('keypress', handler)
    setArrNames(getNames(fetchedProducts));
  }, []);
  useEffect(() => {
    return () => document.removeEventListener('keypress', handler);
  }, []);
  return (
    <>
      <Autocomplete
        loading
        openOnFocus
        id="live searching"
        getOptionLabel={(option) =>
          `${option.name.match(pressets.regEx.shortName)}`
        }
        options={arrNames}
        sx={{ width: 300 }}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        renderOption={(props, option) => (
          <Box component="li" {...props} key={option.id}>
            {option.name.match(pressets.regEx.shortName)}
          </Box>
        )}
        onChange={(event, value) =>
          setCard((card) =>
            !value
              ? card
              : fetchedProducts.filter(
                  (prod) => prod.itemNo === value.itemNo
                )[0]
          )
        }
        onClose={() =>
          card ? console.log(card.price) : console.log("nothing")
        }
        renderInput={(params) => <TextField {...params} label="Product" />}
      />
      {card === 0 ? (
        <TextField value={"No Product"} />
      ) : (
        <RenderUnit
          imgUrl={card.imageUrls[0]}
          name={card.name.match(pressets.regEx.shortName)}
          price={`Price: ${card.currentPrice} $`}
          style={pressets.styles.InputOption}
        />
      )}
    </>
  );
}

// ===========================================================
SearchInput.defaultProps = {
  fetchedProducts: [
    {
      name: "test name",
      label: "test label",
      itemNo: "test id",
      imgUrl: "https://ru.reactjs.org/",
      description: "test description",
    },
  ],
};

SearchInput.propTypes = {
  fetchedProducts: PropTypes.arrayOf(PropTypes.object),
};
// ===========================================================
// return (
//   <Stack sx={{width: '300px', margin: 'auto'}}>
//     <Autocomplete sx={{width: 300}}
//     id='live search'
//     getOptionLabel={(fetchedProducts) => `${fetchedProducts.name}`}
//     options={fetchedProducts}
//     isOptionEqualToValue={(option, value) => option.name === value.name }
//     noOptionsText={"NO MATCHES"}
//     renderOption={(props, option) => {
//       <Box component="li" {...props} key={option.itemNo}>
//           {option.name}
//       </Box>
//     }}
//     renderInput={(params) => <TextField {...params} label={'search product'} />}
//     />
//   </Stack>
// )
// seedra 15 specific herb seeds variety pack for indoor and outdoor planting - hydroponic gardening - 4500+ seeds - non gmo and heirloom