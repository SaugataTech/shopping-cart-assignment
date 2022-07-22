import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { Link} from 'react-router-dom';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import CartContainerModal from './cart-container';


const HeaderContainer = () => {
  const [show, setShow] = useState(false);
  const cartObj = useSelector(state => state.cart);
  const {cartCount, cartTotal, cartItems} = cartObj;
  let navigate = useNavigate();

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  }

  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  }
  return (
    <div>
      <header className="page-header">
          <Container>
            <div className="row">
              <div className="col-md-3" style={{ paddingLeft: '0' }}>
                <Image src="images/logo_2x.png" className="img-fluid toggle-app-logo" alt="logo"/>
                <Image src="images/logo.png" className="img-fluid toggle-app-logo-small" alt="logo small" aria-hidden="true" />
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-10">
                  </div>
                  <div className="col-md-2">
                    <Navbar>
                      <Nav className="me-auto">
                        <Nav.Link as={Link} to="/signin">SignIn</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                      </Nav>
                    </Navbar>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10">
                    <Navbar>
                      <Nav className="me-auto navigation-link">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/productListing">Products</Nav.Link>
                      </Nav>
                    </Navbar>
                  </div>
                  <div className="col-md-2 cart-icon-container" onClick={(e)=>handleShow(e)}>
                    <div className="col-sm-3 col-md-3 cart-icon">
                      <Image src="images/cart.svg" className="" alt="logo"/>
                    </div>
                    <div className="col-sm-6 col-md-6 cart-count">
                      {cartCount} Item
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </Container>
      </header>

      <Modal show={show}>
        <Modal.Header className={cartCount ? 'modal-cart-header': 'modal-no-cart-header'}>
          {
            cartCount ? <Modal.Title>My Cart <span className="modal-title-count">({cartCount} Item)</span></Modal.Title>
            :
            <Modal.Title>My Cart</Modal.Title>
          }
          <button type="button" className={cartCount ? 'cart-close': 'no-cart-close'} aria-label="Close" onClick={(e)=>handleClose(e)}>X</button>
        </Modal.Header>
        <Modal.Body>
         {
           cartCount ? <CartContainerModal cartItems={cartItems}/> :
         <div style={{width: '100%', textAlign: 'center'}}>
          <h6>No items in your cart</h6>
          <div>Your favourite items are just a click away</div>
         </div>
       }
        </Modal.Body>
        <Modal.Footer>
          {cartCount && <div style={{textAlign: 'center', width: '100%'}}>Promo code can be applied on payment page</div>}
          <footer className="modal-footer-container" onClick={(e)=>handleClose(e)}>
          {
            cartCount ? (
              <div>
                <span className="proceed-text">Proceed to Checkout</span>
                <span className="subtotal">Rs.{cartTotal} ></span>
              </div>
            ) :
            <div class="start-shop">Start Shopping </div>
          }

          </footer>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default HeaderContainer;
