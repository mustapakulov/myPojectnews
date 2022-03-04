import React, { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { newsContext } from "../../Context/ContextMy";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const DisplayList = () => {
  const { news, getNews } = useContext(newsContext);
  console.log(news, "new");
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div>
      {news.map((item) => (
        <div key={item.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.photo}
                alt="photo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.header}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.describetion}
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  {item.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Link to={`/edit/${item.id}`}>
            <button>edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DisplayList;
