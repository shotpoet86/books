import useBooksContext from "./hooks/use-books-context";
import BookShow from "./BookShow";

function BookList() {
  /*Receive books from context */
  const { books } = useBooksContext();

  /*map through books and send results to BookShow component via props
   * to display on screen*/
  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));

  return (
    <div className="book-list">
      {/*Map books state & display on screen*/}
      {renderedBooks}
    </div>
  );
}

export default BookList;
