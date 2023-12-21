import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyTopBar from "./components/TopBar";
import MyFooter from "./components/Footer";
import MyAlert from "./components/Welcome";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import scifi from "./data/scifi.json";
import history from "./data/history.json";
import horror from "./data/horror.json";
/*import MyCard from "./components/AllTheBooks";*/

function App() {
	return (
		<div>
			<MyTopBar />
			<MyAlert />
			{/*<MyCard genere="Fantasy" />*/}
			<BookList genere="Fantasy" booksArray={fantasy} />
			<BookList genere="Sci-Fi" booksArray={scifi} />
			<BookList genere="History" booksArray={history} />
			<BookList genere="Horror" booksArray={horror} />
			<MyFooter />
		</div>
	);
}

export default App;
