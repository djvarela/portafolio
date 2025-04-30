import { Route, Routes } from "react-router";
import { HomePage, LoginPage } from "../../presentation/pages";

export const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      

      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<LoginPage />} />
      
    </Routes>
  );
};
