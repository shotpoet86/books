import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleSubmit = (id, newTitle) => {
    onEdit(book.id, newTitle);
    setShowEdit(false);
  };
  const content = <BookEdit book={book} onSubmit={handleSubmit} />;

  return (
    <div className="book-show">
      {!showEdit && book.title ? book.title : content}
      <div className="actions">
        <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
        <button className="delete" onClick={() => onDelete(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
