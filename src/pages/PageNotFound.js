import { useLocation } from "react-router-dom";

const PageNotFound = () => {
    let location = useLocation();

    console.log(location);

    return (<h2>Sorry, 404 the page {location.pathname} cannot be found.</h2>);
};

export default PageNotFound;
