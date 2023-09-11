import './App.css';
import Router from './components/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import './sass/main.css';

function App() {
  return (
    <div id="router">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
