import './App.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BookEdit from './components/BookEdit';
import BookShow from './components/BookShow';
import {useState} from 'react';
import bookCreate from './components/BookCreate';


function App() {
	const [books, setBooks] = useState([{id: Number, title: ''}]);

	const createBook = title => {
		setBooks([...books, {id: Number, title: title}]);
	};

	return (
		<div>
			{/*passes createBook function to BookCreate.
			BookCreate gives back user input for App.js to store in "books" state*/}
			<BookCreate onCreate={createBook}/>
			{/*Map books state & display on screen*/}
			{books.map((book, id) =>
				<div key={id}><p>{book.title}</p></div>)}
		</div>
	);
}

export default App;

