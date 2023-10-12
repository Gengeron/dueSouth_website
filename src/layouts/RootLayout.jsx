import {Outlet} from "react-router-dom";

import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

function RootLayout() {
    return (
        <>
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="h-100 d-flex flex-column">
                        <div className="row">
                            <header>
                                <Navigation />
                            </header>
                        </div>

                        <div className="row bg-light flex-grow-1">
                            <main>
                                <div className="container bg-white px-1 py-3 bg-light h-100">
                                    <Outlet />
                                </div>

                            </main>
                        </div>

                        <div className="row">
                            <footer>
                                <Footer/>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RootLayout