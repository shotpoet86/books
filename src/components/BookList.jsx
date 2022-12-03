import BookShow from "./BookShow";

function BookList({ books, onDelete }) {
  const renderedBooks = books.map((book, id) => (
    <BookShow onDelete={onDelete} key={id} book={book} />
  ));
  return (
    <div className="book-list">
      {/*Map books state & display on screen*/}
      {renderedBooks}
    </div>
  );
}

export default BookList;
