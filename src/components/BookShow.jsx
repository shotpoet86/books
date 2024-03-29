import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "./hooks/use-books-context";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();
  const handleSubmit = () => {
    setShowEdit(false);
  };

  const content = <BookEdit book={book} onSubmit={handleSubmit} />;

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}300/200`}
        alt="picsum.photos random image"
      />
      {!showEdit && book.title ? book.title : content}
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
