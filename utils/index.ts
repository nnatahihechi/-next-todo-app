import axios from 'axios'
import jwt_decode from 'jwt-decode';

const createorGetUser = async (response: any) => {
    const { credential } = response;

    const decoded: {
        name: string,
        email: string,
        picture: string,
        sub: string
    } =
        jwt_decode(credential);

        localStorage.setItem("token", credential);

    // destructure
    const { name, picture, sub } = decoded;

    const user = {
        _id: sub,
        _type: 'user',
        username: name,
        image: picture
    }
    await axios.post(`http://localhost:3000/api/auth`, user);
};

export default createorGetUser