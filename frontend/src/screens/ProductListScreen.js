import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

import ProductCard from '../components/ProductCard';
import Paginate from '../components/Paginate';

const ProductListScreen = ({ user }) => {
  const history = useHistory();
  const token = localStorage['@CoffeeShop:token'];

  if (!token || !user) {
    history.push('/login');
  }

  const params = useParams();

  const keyword = params.keyword;
  const pageNumber = params.pageNumber || 1;

  const [numberOfPages, setNumberOfPages] = useState(1);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        keyword && keyword !== ''
          ? `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
          : `/api/products?pageNumber=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProducts(data.products);
      setNumberOfPages(data.numberOfPages);
    };

    fetchProducts();
  }, [token, keyword, pageNumber]);

  return (
    <>
      <h2>Lista de produtos</h2>
      {products && (
        <Row>
          {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
      <Paginate
        pages={numberOfPages}
        page={pageNumber}
        keyword={keyword ? keyword : ''}
      />
    </>
  );
};

export default ProductListScreen;
