import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Features } from "./components/Features";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Features />
      <Register />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
