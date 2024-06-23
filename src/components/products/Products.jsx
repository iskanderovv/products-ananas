import React from "react";
import { Box, Container } from "@mui/material";
import ProductsItem from "../products-item/ProductsItem";

const TruncateText = ({ text, maxLength }) => {
  const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return <>{truncatedText}</>;
};

const Products = ({ products }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        margin: "40px 0",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            placeItems: 'center',
            gridTemplateColumns: {
              lg: "repeat(4, 1fr)",
              md: "repeat(3, 1fr)",
              sm: "repeat(2, 1fr)",
              xs: "repeat(1, 1fr)",
            },
            gap: "40px 20px",
            width: "100%",
          }}
        >
          {products.map((product, index) => (
            <ProductsItem
              key={index}
              image={product.thumbnail}
              description={<TruncateText text={product.description} maxLength={60} />}
              title={<TruncateText text={product.title} maxLength={17} />}
              rating={product.rating}
              price={product.price}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Products;
