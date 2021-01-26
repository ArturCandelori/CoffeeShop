import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ProductForm = ({
  validated,
  productForm,
  handleProductInput,
  handleSubmitProduct,
}) => {
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmitProduct}>
      <Form.Group controlId='name'>
        <Form.Label>Nome</Form.Label>
        <Form.Control
          required
          type='text'
          placeholder='Nome do produto'
          name='name'
          value={productForm.name}
          onChange={handleProductInput}
        />
        <Form.Control.Feedback type='invalid'>
          Insira o nome do produto
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='price'>
        <Form.Label>Preço</Form.Label>
        <Form.Control
          required
          type='number'
          min='0'
          step='0.01'
          placeholder='Preço'
          name='price'
          value={productForm.price}
          onChange={handleProductInput}
        />
        <Form.Control.Feedback type='invalid'>
          Insira um preço válido
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='image'>
        <Form.Label>Imagem</Form.Label>
        <Form.Control
          required
          type='url'
          placeholder='URL da imagem'
          name='image'
          value={productForm.image}
          onChange={handleProductInput}
        />
        <Form.Control.Feedback type='invalid'>
          Insira uma url válido
        </Form.Control.Feedback>
      </Form.Group>
      <Button type='submit'>Enviar</Button>
    </Form>
  );
};

export default ProductForm;
