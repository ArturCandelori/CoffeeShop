import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import useForm from '../hooks/useForm';

import ProductForm from '../components/ProductForm';
import IngredientForm from '../components/IngredientForm';
import IngredientList from '../components/IngredientList';
import Meta from '../components/Meta';

const CreateProductScreen = ({ user }) => {
  const history = useHistory();
  const token = localStorage['@CoffeeShop:token'];

  if (!token || !user) {
    history.push('/login');
  }

  const [productForm, handleProductInput] = useForm({
    name: '',
    price: '',
    image: '',
  });

  const [ingredients, setIngredients] = useState([]);
  const [validatedProduct, setValidatedProduct] = useState(false);

  const handleSubmitProduct = async e => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() && ingredients.length > 0) {
      await axios.post(
        '/api/products',
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
      <Meta title='Criar Produto' />
      <Container>
        <Row>
          <Col xs={12} md={6} className='my-3'>
            <h2>Novo produto:</h2>
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
        <Container>
          <p className='mt-5 text-center'>Insira pelo menos um ingrediente</p>
        </Container>
      )}
    </>
  );
};

export default CreateProductScreen;
