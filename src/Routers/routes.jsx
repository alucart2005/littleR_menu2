import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../Components/NavBar/NavBar";
import { Home } from "../Pages/Home";
import { Products } from "../Pages/Products";
import { Reports,R1,R2 } from "../Pages/Reports";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/reports" element={<Reports />} />
        <Route exact path="/reports/reports1" element={<R1 />} />
        <Route exact path="/reports/reports2" element={<R2 />} />
      </Routes>
    </BrowserRouter>
  );
}
