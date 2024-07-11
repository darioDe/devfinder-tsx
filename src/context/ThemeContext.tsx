import { createContext, useState, useContext, ReactNode } from "react";

// Typing the value context
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
};

// Create the context
const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark-theme',
    toggleTheme: () => {},
});

// Create the provider
export const ThemeProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [theme, setTheme] = useState('dark-theme');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'))
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// Hook for use the Theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used whithin a ThemeProvider')
    }
    return context;
}

