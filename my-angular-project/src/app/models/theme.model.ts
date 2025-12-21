export interface ThemeColors {
   readonly name: string;
   readonly palette: string;
   readonly value: string;
}

export interface ThemeScheme {
   readonly name: string;
   readonly value: string;
}

export interface Theme {
   readonly color?: ThemeColors;
   readonly scheme?: ThemeScheme;
}

export const THEME_SCHEMES: ThemeScheme[] = [
   { value: 'light', name: 'Light' },
   { value: 'dark', name: 'Dark' },
   { value: 'light-dark', name: 'Light & Dark' },
]

export const THEME_COLORS: ThemeColors[] = [
   { palette: 'azure',  value: 'rose',   name: 'Azure'},
   { palette: 'red',    value: 'pink',   name: 'Red'},
   { palette: 'blue',   value: 'lightgreen',   name: 'Blue'},
   { palette: 'green',  value: 'teal',   name: 'Green'},
]  

