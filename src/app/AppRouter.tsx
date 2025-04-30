import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";


export const AppRouter = () => {
  return (
    <>
      <PublicRoute />
      <PrivateRoute />
    </>
  );
};
