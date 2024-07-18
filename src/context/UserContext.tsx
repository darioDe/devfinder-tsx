import { useContext, useState, createContext, ReactNode } from "react";

interface UserContextType { 
    userData: string;
    setUserData: (data: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    error: string | null;
    setError: (error: string | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = (  { children } ) =>{
    const [userData, setUserData] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    return (
        <UserContext.Provider value={{ userData, setUserData, loading, setLoading, error, setError }} >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if(!context) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}

