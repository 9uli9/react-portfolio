import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import RedirectExample from "./pages/RedirectExample";
import ProjectsIndex from "./pages/projects/Index";
import SingleProject from "./pages/projects/SingleProject";

// Components
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/redirect-example"} element={<RedirectExample />} />
        <Route path={"/projects"} element={<ProjectsIndex />} />
        <Route path="/projects/:slug" element={<SingleProject />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
