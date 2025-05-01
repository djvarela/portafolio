import { httpClient } from "../../infrastructure/http/httpClient";


export const loginCheck = async () => {


    return await httpClient.get('/auth/check' );


}
