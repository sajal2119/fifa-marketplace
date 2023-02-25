import React from "react";

import { Wrapper, Header, Main, Footer, Cards } from "@components";

const Home: React.FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Wrapper />
            <Header />
            <Main />
            <Cards />
            <Footer />
        </div>
    );
};

export default Home;
