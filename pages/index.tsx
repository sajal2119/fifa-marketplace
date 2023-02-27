import React from "react";

import { Wrapper as Gradient, Header, Main, Footer } from "@components";

const Home: React.FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Gradient />
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Home;
