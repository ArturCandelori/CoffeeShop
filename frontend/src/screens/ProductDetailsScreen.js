import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';

const ProductDetailsScreen = ({ user }) => {
  const history = useHistory();
  const token = localStorage['@CoffeeShop:token'];

  if (!token || !user) {
    history.push('/login');
  }

  const params = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProduct(data);
    };

    fetchProduct();
  }, [token, params.id]);

  const handleDelete = async () => {
    await axios.delete(`/api/products/${params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    history.push('/products');
  };

  return (
    <>
      <LinkContainer to='/'>
        <Button variant='secondary'>Voltar</Button>
      </LinkContainer>
      {product && (
        <Row className='my-2'>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
            <Row className='mt-2'>
              <Col xs={6} lg={4}>
                <LinkContainer to={`/products/save/${params.id}`}>
                  <Button block>Editar</Button>
                </LinkContainer>
              </Col>
              <Col xs={6} lg={4}>
                <Button variant='danger' block onClick={handleDelete}>
                  Deletar
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Preço: R${product.price.toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                Ingredientes:
                <ListGroup variant='flush'>
                  {product.ingredients.map((ingredient, i) => (
                    <ListGroup.Item key={i}>
                      {ingredient.name} | qtd.: {ingredient.quantity} | custo:
                      R$
                      {ingredient.cost.toFixed(2)}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductDetailsScreen;
