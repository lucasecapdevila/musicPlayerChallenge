import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Detalles from "../pages/Detalles"

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}> </Route>
          <Route path="detalles" element={<Detalles/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
