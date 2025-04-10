import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import '../../public/assets/css/normalize.css'


export const AppRouter = () => {
  return (
    <>
      <PublicRoute />
      <PrivateRoute />
    </>
  );
};
