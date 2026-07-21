import Header from './features/Header/Header.jsx';
import Footer from './features/Footer/footer.jsx';
import Home from './features/Home/Home.jsx';
import Menu from './features/Menu/Menu.jsx';
import Search from './features/Search/Search.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Menu /> */}
      {/* <Search /> */}
      <Home />
      <main />
      <Footer />
    </div>
  );
}

export default App;