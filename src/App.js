import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from './Pages/Home';
import Calculator2 from './Pages/Calculator2';
import Quote from './Pages/Quote';
import Error from './Pages/Error';

function App() {
  return (
    <Router>
      <div className="nav-bar">
        <header>
          <h1 className="header">Math Magicians</h1>
        </header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Calculator2">Calculator</Link>
          <Link to="/Quote">Quote</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home className="home" />} />
        <Route path="/Calculator2" element={<Calculator2 />} />
        <Route path="/Quote" element={<Quote className="quotes" />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <div>
        <footer className="footer">
          &copy; created by&#160;
          <strong><a href="https://github.com/MMGGYY66" target="_blank" rel="noreferrer">Mohamed Eldimardash</a></strong>
        </footer>
      </div>
    </Router>
  );
}

export default App;
