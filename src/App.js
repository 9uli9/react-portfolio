import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import RedirectExample from "./pages/RedirectExample";
import BooksIndex from ".pages/books/Index";
import BooksShow from ".pages/books/Show";

// Components
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path={"/home"} element={<Home />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/redirect-example"} element={<RedirectExample />} />
                <Route path={"/books"} element={<Index />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
