
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import RightSide from "./components/right-side/RightSide";
import { Box, Stack, ThemeProvider, colors, createTheme } from "@mui/material";
import Add from "./components/addBtn/Add";
import { useState } from "react";

function App() {

  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <RightSide />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
