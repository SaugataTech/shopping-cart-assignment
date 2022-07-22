import { Routes, Route } from 'react-router-dom';
import {Container, Navbar, Nav } from 'react-bootstrap';
import Home from './components/home';
import ProductListing from './components/productListing';
import WrapperContainer from './components/wrapperContainer';
import CartContainer from './components/cart-container';
import SignUp from './components/sign-up';
import SignIn from './components/sign-in';
import 'bootstrap/dist/css/bootstrap.min.css';
import './asset/styles/main.css';

function App() {
  return (
    <Container fluid>
      <Routes>
        <Route path="/" element={<WrapperContainer />}>
          <Route index element={<Home />} />
          <Route path="/productListing" element={<ProductListing />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
