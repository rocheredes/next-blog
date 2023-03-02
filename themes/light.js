import {createTheme} from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1C77C3',
            contrastText: '#fff'
        },

        secondary: {
            main: '#39A9DB',
            contrastText: '#fff'
        },

        info: {
            main: '#40BCD8',
            contrastText: '#fff'
        },

        warning: {
            main: '#F39237',
            contrastText: '#000'
        },

        error: {
            main: '#D63230',
            contrastText: '#fff'
        },

    },

    typography: {
        allVariants: {
            color: '#112A46'
        }
    },

    components: {

        MuiLink: {
            defaultProps: {
                underline: "none"
            },
        },

        MuiAppBar: {
            defaultProps: {
                elevation: 0

            },
            styleOverrides: {
                root: {
                    background: "#fff",
                }
            }
        },

        MuiButton: {
            defaultProps: {
                variant: 'contained',
                disableElevation: true,
                color: "primary"
            },

            styleOverrides: {
                root: {
                    textTransform: "none",
                    boxShadow: "none",
                }
            }
        }
    }

})