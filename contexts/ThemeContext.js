import React from 'react';


export const THEMES = {
    light: {
        color: 'black',
        backgroundColor: 'white',
    },
    dark: {
        color: 'white',
        backgroundColor: '#222222',
    }
};

//THEMESのデフォルトは、dark。
export const ThemeContext = React.createContext([THEMES.dark, ()=>{}]);