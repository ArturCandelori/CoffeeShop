import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import useForm from '../hooks/useForm';

import ProductForm from '../components/ProductForm';
import IngredientForm from '../components/IngredientForm';
import IngredientList from '../components/IngredientList';

const EditProductScreen = ({ user }) => {
  const history = useHistory();
  const token = localStorage['@CoffeeShop:token'];

  if (!token || !user) {
    history.push('/login');
  }

  const params = useParams();

  const [productForm, handleProductInput, setProductForm] = useForm({
    name: '',
    price: '',
    image: '',
  });

  const [ingredients, setIngredients] = useState([]);
  const [validatedProduct, setValidatedProduct] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProductForm({
        name: data.name,
        price: data.price,
        image: data.image,
      });

      setIngredients(data.ingredients);
    };

    fetchProduct();
  }, [token, params.id, setProductForm]);

  const handleSubmitProduct = async e => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() && ingredients.length > 0) {
      await axios.put(
        `/api/products/${params.id}`,
        {
          ...productForm,
          ingredients,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      history.push('/products');
    } else {
      e.stopPropagation();

      setValidatedProduct(true);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6} className='my-3'>
            <h2>Editar produto:</h2>
            <ProductForm
              ingredients={ingredients}
              validated={validatedProduct}
              productForm={productForm}
              handleProductInput={handleProductInput}
              handleSubmitProduct={handleSubmitProduct}
            />
          </Col>
          <Col xs={12} md={6} className='my-3'>
            <h2>Novo ingrediente:</h2>
            <IngredientForm
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          </Col>
        </Row>
      </Container>
      {ingredients.length > 0 ? (
        <IngredientList
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
      ) : (
        <p className='my-3 text-danger'>Insira pelo menos um ingrediente</p>
      )}
    </>
  );
};

export default EditProductScreen;
