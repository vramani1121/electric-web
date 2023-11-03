import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "../Home/Home";
import UpsideMoveArrow from "../UpsideMoveArrow/UpsideMoveArrow";
import Circle from "../Circle/Circle";

function Routing() {
  return (
    <>
      <Routes>
        <Route exact path={`/`} element={<Home />} />
      </Routes>
      <UpsideMoveArrow />
      <Circle />
    </>
  );
}

export default Routing;
