import { Container, Carousel } from 'react-bootstrap';

const BannerCarousel = ({bannerList}) => {

return (
  <Container className="home-container">
    <Carousel variant="dark">
    {
      bannerList.length && bannerList.map(banner => (
        <Carousel.Item key={banner.id}>
          <img
            className="d-block w-100"
            src={ banner.bannerImageUrl}
            alt={ banner.bannerImageAlt }
          />
        </Carousel.Item>
      ))
    }
    </Carousel>
  </Container>
)
}

export default BannerCarousel;
