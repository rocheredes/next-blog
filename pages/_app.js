import {ThemeProvider, CssBaseline} from "@mui/material";
import {lightTheme} from "../themes/light";
import '../styles/globals.css'
export default function App({Component, pageProps}) {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
