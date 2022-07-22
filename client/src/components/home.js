import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import BannerCarousel from './bannerCarousel';
import CategoryList from './categoryList';
import { fetchCategoryAsync } from '../action/category-action';

const Home = () => {
  const [bannerList, setBannerList] = useState([]);

  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.category.categories);

  useEffect(() => {
    fetchBanners();
    dispatch(fetchCategoryAsync());
  }, []);

  const fetchBanners = ()=> {
    fetch("/banners")
      .then((res) => res.json())
      .then((data) => setBannerList(data));
  }

  return (
    <Container className="home-container">
      <BannerCarousel bannerList={bannerList} />
      <CategoryList categoryList={categoryList} />
    </Container>
   )
}

export default Home;
