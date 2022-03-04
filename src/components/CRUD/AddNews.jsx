import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { newsContext } from "../../Context/ContextMy";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";

const AddNews = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    photo: "",
    describetion: "",
    name: "",
    header: "",
  });
  const { addNews } = useContext(newsContext);
  console.log(addNews,"news")
  debugger;
  const handleInp = (event) => {
    let obj = {
      ...value,
      [event.target.name]: event.target.value,
    };
    setValue(obj);
  };
  const handleSave = () => {
    addNews({ ...value });
    navigate("/list");
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: "40px auto",
            maxWidth: "auto",
            height: "auto",
            p: "10px",
            backgroundImage: `url(${"https://images.izi.ua/12685727"})`,
            backgroundSize: "cover",
          },
        }}
      >
        <Paper elevation={3}>
          <h1 style={{ textAlign: "center", color: "black", padding: "40px" }}>
            Add product
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              color: "black",
            }}
          >
            <div
              style={{
                width: "1000px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                paddingBottom: "40px",
              }}
            >
              <form
                noValidate
                autoComplete="off"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "5px",
                }}
              >
                <TextField
                  style={{ padding: "10px" }}
                  name="Загаловок"
                  onChange={handleInp}
                  value={value.header}
                  variant="outlined"
                  label="Header"
                />
                <TextField
                  style={{ padding: "10px" }}
                  name="Фото"
                  onChange={handleInp}
                  value={value.photo}
                  variant="outlined"
                  label="Src"
                />
                <TextField
                  style={{ padding: "10px" }}
                  name="Описание"
                  onChange={handleInp}
                  value={value.describetion}
                  variant="outlined"
                  label="Describetion"
                />
                <TextField
                  style={{ padding: "10px" }}
                  name="Ваше имя"
                  onChange={handleInp}
                  value={value.name}
                  variant="outlined"
                  label="Name"
                />
              </form>
              <Button onClick={handleSave} variant="contained" color="success">
                Add{" "}
              </Button>
            </div>
          </div>
        </Paper>
      </Box>
    </div>
  );
};

export default AddNews;
