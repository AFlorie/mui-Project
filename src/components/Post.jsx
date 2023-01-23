import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

const Post = () => {
  return (
    <Box flex={4} p={2}>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              JD
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Nature escape"
          subheader="January 22, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/949194/pexels-photo-949194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            voluptatum, voluptate optio tempora veniam natus non laudantium.
            Ipsam optio minima distinctio! Fuga, veritatis ducimus animi nobis
            voluptas maiores deserunt accusamus!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Post;
