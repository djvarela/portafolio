import { useEffect, useState } from "react";
import { loginCheck } from "../../usescases";
import { Navigate } from "react-router";


export const RequireAuth = ({ children }: React.PropsWithChildren) => {
  const [authLogin, setAuthLogin] = useState<boolean | null>(null);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const { data } = await loginCheck() as { data: boolean };
      
        setAuthLogin(data);
      } catch (error) {
        setAuthLogin(false);
      }
    };

    checkStatus();

  }, []);

  if (authLogin === null) {
    // Puede ser un spinner o nada
    return <div>Cargando...</div>;
  }

  return authLogin ? <>{children}</> : <Navigate to="/login" replace />;
};