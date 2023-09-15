import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
const Book = (data) => {
  const navigate = useNavigate();
  const { _id, name, author, description, price, image } = data.book;

  // console.log(data.book);
  // console.log(data.book.price);
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/delete/${_id}`)
      .then((res) => res.data)
      .then(() => navigate("/"))
      .then(() => navigate("/books"));
  };

  return (
    <>
      <div className="card">
        <img src={image} alt={name} />
        <article>By {author}</article>
        <h3>{name}</h3>

        {description.split(" ").length > 20 ? (
          <p>{description.split(" ").slice(0, 20).join(" ")}...</p>
        ) : (
          <p>{description}</p>
        )}

        <h3>Rs {price}</h3>
      </div>
      <div>
        <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
          Update
        </Button>
        <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
          Delete
        </Button>
      </div>
    </>
  );
};

export default Book;
