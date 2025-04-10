import { Outlet, Route, Routes } from "react-router";
import { AdminPage } from "../../presentation/pages";
import { RequireAuth } from "../../infrastructure/auth/RequireAuth";
import { Dashboard } from "../../presentation/pages/Dashboard";

export const PrivateRoute = () => {
  return (

    <Routes>
      <Route element={<RequireAuth><Outlet /></RequireAuth>}>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dash" element={<Dashboard />} />
 
      </Route>
    </Routes>
      
  
  );
};
