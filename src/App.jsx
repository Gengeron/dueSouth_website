import {Route, Routes} from 'react-router-dom'

import RootLayout from "./layouts/RootLayout.jsx";

import HomePage from "./pages/HomePage.jsx";
import About from "./pages/AbouthMePage.jsx";
import Trips from "./pages/TripPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";



function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<RootLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/trips" element={<Trips/>}/>
                    <Route path="/gallery" element={<GalleryPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App