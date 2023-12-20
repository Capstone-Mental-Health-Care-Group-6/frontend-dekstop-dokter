import jwt_decode from 'jwt-decode'

export const getIdFromToken = (token) => {
    const decoded = jwt_decode(token);
    console.log(decoded);
    return decoded.userDoctor;
  };