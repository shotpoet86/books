import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookCreate() {
  const { createBook } = useContext(BooksContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          className="input"
          type="text"
          placeholder="Enter Book Name"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
