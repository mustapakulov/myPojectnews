import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { newsContext } from "../../Context/ContextMy";
import DisplayCard from "./DisplayCard";

const DisplayList = () => {
  const navigate = useNavigate();
  const { news, getNews } = useContext(newsContext);
  console.log(news, "new");
  useEffect(() => {
    getNews();
    navigate("/");
  }, []);
  return (
    <div style={{marginTop: "50px", display: "flex", alignItems: "center", justifyContent: 'center', flexWrap: 'wrap'}}>
      {news.map((item) => (
        <DisplayCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default DisplayList;
