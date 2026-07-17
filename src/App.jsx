import Header from './features/Header/Header.jsx';
import PostCard from './features/Post/PostCard.jsx';
import Footer from './features/Footer/footer.jsx';
import Home from './features/Home/Home.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <main>
        <h2 className='welcome_header'>
          Wellcome to your Hub 
        </h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;