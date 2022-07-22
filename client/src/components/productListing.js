import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import ProductCard from './productCard';
import { fetchCategoryAsync } from '../action/category-action';
import { ACTION_TYPES } from '../action/action-types';
import { addCartItem, createAction, getCartCount, getCartTotal } from '../utils/util';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.category.categories);
  const cartObj = useSelector((state) => state.cart);

  useEffect(() => {
    fetchProducts();
    !categoryList.length && dispatch(fetchCategoryAsync());
  }, []);

  const fetchProducts = ()=> {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }

  const handleCategorySelection = (e, categoryItem)=> {
    e.preventDefault();
    const category = selectedCategory == categoryItem.id ? '' : categoryItem.id;
    setSelectedCategory(category);
  }

  const handleBuyNow = (product) => {
    fetch('/addToCart',
     {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({productID: product.id})
    })
    .then((res) => res.json())
    .then((data) => {
      alert(data.responseMessage);
      addToCartAction(product);
    })
    .catch((error) => {
      alert("Error", error)
    });
  }

  const addToCartAction = ( productToAdd ) => {
    const newCartItems = addCartItem(cartObj.cartItems, productToAdd);
    const newCartCount = getCartCount(newCartItems);
    const newCartTotal = getCartTotal(newCartItems);

    dispatch(createAction(ACTION_TYPES.ADD_CART_ITEM, { cartItems: newCartItems, cartCount: newCartCount, cartTotal: newCartTotal }));
  }

  return (
    <Container className="product-container">
      <div class="row">
        <ul className="col-md-2 sidebar">
        {
          categoryList.length && categoryList.filter(item => item.enabled).map(category => (
            <li key={category.id} onClick={(e)=> handleCategorySelection(e, category)} className={category.id == selectedCategory? 'active' : ''}>{category.name}</li>
          ))
        }
        </ul>
        <div className="col-md-10">
          {
            products.length && products.filter(item => item.category.includes(selectedCategory)).map(product => (
              <ProductCard product={product} handleBuyNow={handleBuyNow}/>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export default ProductListing;
