import './App.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BookEdit from './components/BookEdit';
import BookShow from './components/BookShow';
import {useState} from 'react';

function App() {
	const [books, setBooks] = useState([{id: 2, title: 'moby dick'}]);
	return (
		<div>
			<h1>{books[0].title}</h1>
			<BookCreate/>
			<BookList/>
			<BookEdit/>
			<BookShow/>
		</div>
	);
}

export default App;

