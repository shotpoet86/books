import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Edit</label>
      <input
        className="input"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
