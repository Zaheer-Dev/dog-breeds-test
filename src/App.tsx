import React, { lazy, Suspense } from "react";
import logo from "./logo.svg";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

// import  from './components/layouts'
import Layout from "./layout/Index";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/MuiCustomTheme";
import { Box, CircularProgress, Typography } from "@mui/material";
import { withLazyComponent } from "./withSuspense";
const Home = withLazyComponent(lazy(() => import("./pages/Home")));
const About = withLazyComponent(lazy(() => import("./pages/About")))

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
            </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
