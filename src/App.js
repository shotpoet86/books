import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updateBooks = () => {
      return [...books, { id: Math.round((Math.random() * 1000) / 2), title }];
    };
    setBooks(updateBooks);
  };
  const deleteBookById = (id) => {
    const updatedBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBook);
  };

  return (
    <div className="app">
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} />
    </div>
  );
}

export default App;
