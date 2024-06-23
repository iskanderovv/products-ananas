import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

// const products = [
//   {
//     image: "https://via.placeholder.com/150",
//     title: "Product 1",
//     rating: 4.5,
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     title: "Product 2",
//     rating: 3.0,
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     title: "Product 3",
//     rating: 2.4,
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     title: "Product 4",
//     rating: 5.0,
//   },
// ];

// const StarRating = ({ rating }) => {
//   const fullStars = Math.floor(rating);
//   const halfStar = rating % 1 !== 0;
//   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//   return (
//     <Box sx={{ display: "flex", alignItems: "center" }}>
//       {[...Array(fullStars)].map((_, index) => (
//         <StarIcon key={index} style={{ color: "gold" }} />
//       ))}
//       {halfStar && <StarHalfIcon style={{ color: "gold" }} />}
//       {[...Array(emptyStars)].map((_, index) => (
//         <StarOutlineIcon key={index} style={{ color: "gold" }} />
//       ))}
//     </Box>
//   );
// };

// const Product = ({ product }) => (
//   <Card sx={{ maxWidth: 200, m: 2 }}>
//     <CardMedia
//       component="img"
//       height="150"
//       image={product.image}
//       alt={product.title}
//     />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="div">
//         {product.title}
//       </Typography>
//       <StarRating rating={product.rating} />
//     </CardContent>
//   </Card>
// );

const App = () => (
  // <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
  //   {products.map((product, index) => (
  //     <Product key={index} product={product} />
  //   ))}
  // </Box>
  <>
  
  </>
);

export default App;
