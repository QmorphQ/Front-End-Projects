import { useEffect, useState } from 'react'; 
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core";
import Container from "@mui/material/Container";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    width: 600,
    [theme.breakpoints.down("xs")]: {
      width: 200,
    },
  },
  searchOption: {
    height: 50,
    width: 100,
    [theme.breakpoints.down("xs")]: {
      width: 100,
      height: 30,
    },
  },

}));

const pressets = {
  styles: {
    optionCard: {
      padding: "20px",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: 'rgba(0, 0, 0, 0.01)',
      boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      height: '50px',
    },
  },
};
function RenderUnit({ imgUrl, name, price }) {
  const classes = useStyles();
  return (
    <Link data-link='search' href='#'>
    <Card className={classes.searchOption} sx={pressets.styles.optionCard}>
      <CardMedia
        component="img"
        sx={{ width: 70, height: 70 }}
        image={imgUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="caption" component="div">
         Name: {name.match(/^.+?(?=seeds)/i)}
        </Typography>
        <Typography variant="body1" color="text.primary">
          Price: {price} $
        </Typography>
      </CardContent>
    </Card>
    </Link>
  );
}

RenderUnit.defaultProps = {
  imgUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU",
  name: "test name",
  price: "$ 1000",
};

RenderUnit.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  style: PropTypes.object,
};

export default function SearchResultContainer({ products = 0, active, oneCard}) {
  const classes = useStyles();
  const [productsToRender, setProductsToRender] = useState([]);
  useEffect(() => {
    setProductsToRender(products)
  }, [products])
  return (
    
    <Container
    className={classes.searchContainer}
    id='search-container'
    sx={{
      boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      position: "absolute",
      zIndex: "99999",
      backgroundColor: "white",
      right: "0",
      top: "120%",
      borderRadius: "20px",
      width: ((activeContainer, oneCardFromProps) => {
        if (activeContainer){
          return oneCardFromProps ? '300px' : '70vw';
        } return '0';
      })(active, oneCard),
      maxHeight: active ?'400px' : '0',
      scrollbarWidth: "0.3",
      transition: "all 0.5s",
      opacity: active ? '1' : '0',
      overflow: active ? 'auto' : 'hidden',
    }}
    >
    
     
        <Grid spacing={1} container >
          {productsToRender.map((prod, i) => (
            <Grid xs={oneCard ? 12 : 6 } item key={prod.itemNo + i}>
              <RenderUnit
                imgUrl={prod.imageUrls[0]}
                name={prod.name}
                price={prod.currentPrice}
              />
            </Grid>
          ))}
        </Grid>

    </Container>
   
  );
}

SearchResultContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.bool,
  oneCard: PropTypes.bool,
};
