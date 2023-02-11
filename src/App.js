import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Register />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
