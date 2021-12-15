import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageRoutes from "./utils/routes/PageRoutes";

//navigate("/login");

function App() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/login");
  // }, []);
  return <PageRoutes />;
}

export default App;
