import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { decode } from "punycode";

type Profile = {
  name: string;
  picture: string;
  sub: string;
};

// Create context type
type userContextType = {
  user: Profile;
  login: {};
  logout: {};
  createorGetUser?: (response: any) => Promise<void>;
};
// Create context default values
export const userContextDefaultValues: userContextType = {
  user: { name: "", picture: "", sub: "" },
  login: {},
  logout: {},
};

// createContext & useContext
const UserContext = createContext<userContextType>(userContextDefaultValues);

//call useContext and pass the content that has been created to it
export function useUserContext() {
  return useContext(UserContext);
}

// Create a provider function
type Props = {
  children: ReactNode;
};

export function UserAuthProvider({ children }: Props) {
  const [userProfile, setUserProfile] = useState({
    user: userContextDefaultValues.user,
  });
  const value = {
    ...userProfile,
    login: {},
    logout: {},
  };
  const createorGetUser = async (response: any) => {
    const { credential } = response;

    const decoded: {
      name: string;
      email: string;
      picture: string;
      sub: string;
    } = jwt_decode(credential);
    console.log("dddd", decoded.sub);  

    localStorage.setItem("token", credential);
    localStorage.setItem("email", decoded.email);
     localStorage.setItem("sub", decoded.sub);

    // destructure
    const { name, picture, sub } = decoded;
    setUserProfile({ user: { name, picture, sub } });

    const user = {
      _id: sub,
      _type: "user",
      username: name,
      image: picture,
    };
    await axios.post(`http://localhost:3000/api/auth`, user);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded: {
        name: string;
        email: string;
        picture: string;
        sub: string;
      } = jwt_decode(token);

      const { name, picture, sub } = decoded;
      setUserProfile({ user: { name, picture, sub } });
    }
  }, []);
  return (
    <>
      <UserContext.Provider value={{ ...value, createorGetUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
