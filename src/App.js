import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Component/routes/Routing";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Layout />
    </BrowserRouter>
  );
};

export default App;
