import { createContext, ReactNode, useContext } from "react";

// Create context type
type userContextType = {
    user : null,
    login : {},
    logout :{},
};
// Create context default values
export const userContextDefaultValues: userContextType = {
    user : null,
    login : {},
    logout :{},
}

// createContext & useContext
const UserContext = createContext<userContextType>(userContextDefaultValues)

//call useContext and pass the content that has been created to it 
export function useUserContext() {
    return useContext(UserContext);
}

// Create a provider function
type Props = {
    children: ReactNode
};

export function UserAuthProvider({ children }: Props) {
    const value = {
     user : null,
       login : {},
       logout :{},
      
    }
    return (
        <>
            <UserContext.Provider value={value}>
                {children}
            </UserContext.Provider>
        </>
    )
}