export interface Theme { 
    name: string,
    colors: {
        backgroundPrimary: string,
        backgroundSecondary: string,
        textColor: string,
        headerText: string,
        activeColor: string,
        primaryColor: string,
        accentColor: string,
        borderColor: string
    }
}
export interface Themes { 
    [key: string]: Theme
}
