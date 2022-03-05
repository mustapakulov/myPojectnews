import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import { newsContext } from "../../Context/ContextMy";

const EditNews = () => {
  const navigate = useNavigate();
  const { edit, editNews, saveEditNews } = useContext(newsContext);
  const { id } = useParams();

  useEffect(() => {
    editNews(id);
  }, [id]);

  useEffect(() => {
    if (edit) {
      setValue(edit);
    }
  }, [edit]);

  const [value, setValue] = useState({
    photo: "",
    describetion: "",
    name: "",
    header: "",
  });

  const handleInp = (event) => {
    let obj = {
      ...value,
      [event.target.name]: event.target.value,
    };
    setValue(obj);
  };
  const handleSave = () => {
    saveEditNews({ ...value });
    navigate("/");
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
            backgroundImage: `url(${"https://cdn-st1.rtr-vesti.ru/vh/pictures/hd/304/573/2.jpg"})`,
            backgroundSize: "cover",
          },
        }}
      >
        <Paper elevation={3}>
          <h1 style={{ textAlign: "center", color: "black", padding: "40px" }}>
            Редактирование
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
                  name="header"
                  onChange={handleInp}
                  value={value.header}
                  variant="outlined"
                  label="Загаловок"
                />
                <TextField
                  style={{ padding: "10px" }}
                  name="photo"
                  onChange={handleInp}
                  value={value.photo}
                  variant="outlined"
                  label="Фото"
                />
                <TextField
                  style={{ padding: "10px" }}
                  name="describetion"
                  onChange={handleInp}
                  value={value.describetion}
                  variant="outlined"
                  label="Описание"
                />
                <TextField
                  style={{ padding: "10px" }}
                  name="name"
                  onChange={handleInp}
                  value={value.name}
                  variant="outlined"
                  label="Ваша имя"
                />
              </form>
              <Button onClick={handleSave} variant="contained" color="success">
                Редактирование{" "}
              </Button>
            </div>
          </div>
        </Paper>
      </Box>
    </div>
  );
};

export default EditNews;
