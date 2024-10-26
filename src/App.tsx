import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";
import "./App.css";
import CameraCard from "./components/CameraCard";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <Container className="container">
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography color="info">Welcome to Tauri + React</Typography>

        <Box sx={{ p: "10px" }}>
          <TextField
            id="name"
            value={name}
            label="Your name"
            helperText="Enter your name"
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
            size="small"
          />
        </Box>

        <Box sx={{ m: "6px" }}>
          <Button
            color="primary"
            variant="contained"
            size="small"
            onClick={(e) => {
              e.preventDefault();
              greet();
            }}
            sx={{ mr: "6px" }}
          >
            提交
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            size="small"
            onClick={(e) => {
              e.preventDefault();
              setName("");
            }}
          >
            清空
          </Button>
        </Box>

        <Typography component={"h6"} color="info">
          输入信息: {name}
        </Typography>

        <Typography component={"h5"} color="success">
          {greetMsg}
        </Typography>

        <Box sx={{ mt: 9 }}>
          <CameraCard />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
