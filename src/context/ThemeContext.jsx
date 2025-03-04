import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';

// create context and export theme 

export const ThemeContext = createContext();

// create provider

const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const toggleTheme = () => {
        setMode((prev) => prev == 'light' ? 'dark' : 'light')
    }
    
    const theme = useMemo(() => createTheme({
        palette: {
            mode,
        }
    }), [mode])

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider