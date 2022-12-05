import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = () => {
      return [...books, { id: Math.round((Math.random() * 1000) / 2), title }];
    };
    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBook = books.filter((book) => book.id !== id);
    setBooks(updatedBook);
  };

  return (
    <div className="app">
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}

export default App;
