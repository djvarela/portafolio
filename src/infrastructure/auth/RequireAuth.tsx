import{ useState } from 'react'
import { Navigate } from 'react-router'

export const RequireAuth = ({children}:React.PropsWithChildren) => {

    const [authLogin] = useState(false) 

    





  return  authLogin ? children : <Navigate to="/login" replace />
}
