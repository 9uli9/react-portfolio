import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <h1>All Books</h1>
      <Link to="/books/1">Book 1</Link>
      <Link to="/books/2">Book 2</Link>
      <Link to="/books/3">Book 3</Link>
    </>
  );
};

export default Index;
