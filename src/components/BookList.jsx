import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map((book) => (
    <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />
  ));
  return (
    <div className="book-list">
      {/*Map books state & display on screen*/}
      {renderedBooks}
    </div>
  );
}

export default BookList;
