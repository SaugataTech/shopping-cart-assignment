import { Button, Card } from 'react-bootstrap';

function ProductCard({product, handleBuyNow}) {
  return (
    <Card className="prod-card-container" key={product.id}>
      <div>
        <h5 className="prod-card-title">{product.name}</h5>
      </div>
      <div className="prod-card-img">
        <Card.Img variant="top" src={product.imageURL} />
      </div>
      <Card.Body className="prod-card-body">
        <Card.Text className="card-desc">
          {product.description}
        </Card.Text>
        <div className="card-btn-container">
          <div className="col-md-6 prod-price">
            MRP Rs.{product.price}
          </div>
          <div className="col-md-6 btn-container">
            <Button variant="primary" onClick={() => handleBuyNow(product)}>Buy Now</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
