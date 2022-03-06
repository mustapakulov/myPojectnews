import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { newsContext } from "../../Context/ContextMy";

export default function DisplayCard({ item }) {
  const { deleteNews, useAuth } = React.useContext(newsContext);

  const currentUser = useAuth();
  const [count, setCount] = React.useState(0);

  return (
    <Card sx={{ width: 1400, minWidth: 300, margin: 2 }}>
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

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ pt: 1, pb: 1 }}
        >
          {item.describetion}
        </Typography>
        <Typography variant="a" color="text.secondary" sx={{ pt: 1, pb: 1 }}>
          {item.name}
        </Typography>
      </CardContent>
      <CardActions>
        {currentUser?.email === "admin@mail.ru" ? (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link style={{ textDecoration: "none" }} to={`edit/${item.id}`}>
                <Button size="small">Редактирование</Button>
              </Link>
              <Button size="small" onClick={() => deleteNews(item.id)}>
                Удалить
              </Button>
            </div>
          </>
        ) : (
          <>
            <p style={{ fontSize: "20px", marginTop: "13px" }}>
              {count ? count : ""}
            </p>
          </>
        )}
      </CardActions>
    </Card>
  );
}
