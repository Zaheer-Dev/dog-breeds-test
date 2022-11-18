import React,{lazy, Suspense} from "react";
import logo from "./logo.svg";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

// import  from './components/layouts'
import Layout from "./layout/Index";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/MuiCustomTheme";
import { Box, CircularProgress } from "@mui/material";
const Home = lazy(()=>import("./pages/Home"))
const About = lazy(()=>import("./pages/About"))

function App() {
  return (
    
        <BrowserRouter>
      <Layout>
      <Suspense fallback={<Box display='flex' alignItems='center' justifyContent='center'><CircularProgress /></Box>}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
</Suspense>

      </Layout>
    </BrowserRouter>
  );
}

export default App;
