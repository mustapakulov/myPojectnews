import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { newsContext } from "../../Context/ContextMy";

export default function DisplayCard({ item }) {
  const { deleteNews, addCartNews, checkNewsInCart, useAuth } =
    React.useContext(newsContext);

  const currentUser = useAuth();
  const [count, setCount] = React.useState(0);

  return (
    <Card sx={{ maxWidth: 600, minWidth: 300, margin: 2 }}>
      <CardMedia
        component="img"
        height="auto"
        image={item.photo}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h4" color="text.secondary" sx={{ pt: 1, pb: 1 }}>
          {item.header}
        </Typography>
        <Typography variant="a" color="text.secondary" sx={{ pt: 1, pb: 1 }}>
          {item.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ pt: 1, pb: 1 }}
        >
          {item.describetion}
        </Typography>
      </CardContent>
      <CardActions>
        {currentUser?.email === "admin@mail.ru" ? (
          <>
            <Link to={`edit/${item.id}`}>
              <Button size="small">Edit</Button>
            </Link>
            <Button size="small" onClick={() => deleteNews(item.id)}>
              Delete
            </Button>
          </>
        ) : (
          <>
            <p style={{ fontSize: "20px", marginTop: "13px" }}>
              {count ? count : ""}
            </p>

            <IconButton
              onClick={() => addCartNews(item)}
              color={checkNewsInCart(item.id) ? "secondary" : "inherit"}
            >
              <LocalGroceryStoreIcon />
              <h1>этот</h1>
            </IconButton>
          </>
        )}
      </CardActions>
    </Card>
  );
}
