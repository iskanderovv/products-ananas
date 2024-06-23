import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List } from '@mui/material';
import React from 'react'
import StarRating from '../star-rating/StarRating';

const ProductsItem = ({image, description, rating, title, price}) => {
  return (
    <Card sx={{maxWidth: 350}}>
      <CardMedia
      sx={{
        objectFit: 'cover',
        width: '100%',
        height: '200px'
      }}
        component="img"
        alt={title}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Button size="small">${price}</Button>
        <Button size="small"><StarRating rating={rating} /></Button>
      </CardActions>
    </Card>
  )
}

export default ProductsItem
