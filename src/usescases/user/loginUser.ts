import { httpClient } from "../../infrastructure/http/httpClient";


export const loginUser = async (credentials:object) => {


    return await httpClient.post('/auth/login', credentials);


}
