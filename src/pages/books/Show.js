import { useParams } from "react-router-dom";

const Show = () => {
  let { id } = useParams();
  return <h1>Hello from books / show page youre looking at book with id: {id}</h1>;
};

export default Show;
