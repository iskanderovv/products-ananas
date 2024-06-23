import React from "react";
import PropTypes from "prop-types";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Box } from "@mui/material";

const StarRating = React.memo(({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon key={index} sx={{ color: "gold" }} />
      ))}
      {halfStar && <StarHalfIcon sx={{ color: "gold" }} />}
      {[...Array(emptyStars)].map((_, index) => (
        <StarOutlineIcon key={index} sx={{ color: "gold" }} />
      ))}
    </Box>
  );
});

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
