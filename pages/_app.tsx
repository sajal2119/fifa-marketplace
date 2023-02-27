import React from "react";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { StyledThemeProvider } from "@definitions/styled-components";
import { Provider } from "react-redux";
import store from "src/redux";
import { appWithTranslation } from "@i18n";

function App({ Component, pageProps }: AppProps): JSX.Element {
    const CustomComponent = Component as any;
    return (
        <StyledThemeProvider>
            <Provider store={store}>
                <CustomComponent {...pageProps} />
            </Provider>
        </StyledThemeProvider>
    );
}

export default App;
