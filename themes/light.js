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

        textMuted: {
            main: '#6c757d',
            contrastText: '#000'
        }

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
                elevation: 0,
                position:'relative'

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
        },

        MuiMenu: {
            defaultProps: {
                transformOrigin: {horizontal: 'right', vertical: 'top'},
                anchorOrigin: {horizontal: 'right', vertical: 'bottom'},
                PaperProps: {
                    elevation: 0,
                    sx: {
                        borderRadius: 3,
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                    },
                }
            }
        },
    }

})