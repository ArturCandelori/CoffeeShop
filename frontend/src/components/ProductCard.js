import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card className='my-2'>
      <Card.Img variant='top' src={product.image} width='100%' />
      <Card.Body>
        <Card.Title as='h5'>{product.name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          ${product.price}
        </Card.Subtitle>
        <LinkContainer to={`/products/${product._id}`}>
          <Button size='sm' variant='secondary' block>
            Ver detalhes
          </Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
