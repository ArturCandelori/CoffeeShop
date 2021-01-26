import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import useForm from '../hooks/useForm';

const IngredientForm = ({ ingredients, setIngredients }) => {
  const [ingredientForm, handleIngredientInput] = useForm({
    name: '',
    quantity: '',
    cost: '',
  });
  const [validated, setValidated] = useState(false);

  const handleSubmitIngredient = e => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity()) {
      setIngredients([...ingredients, { ...ingredientForm }]);
    } else {
      e.stopPropagation();

      setValidated(true);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmitIngredient}>
      <Form.Group controlId='nome'>
        <Form.Label>Nome</Form.Label>
        <Form.Control
          required
          type='text'
          placeholder='Nome do ingrediente'
          name='name'
          value={ingredientForm.name}
          onChange={handleIngredientInput}
        />
        <Form.Control.Feedback type='invalid'>
          Insira o nome do ingrediente
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='quantity'>
        <Form.Label>Quantidade</Form.Label>
        <Form.Control
          required
          type='number'
          min='0'
          step='0.01'
          placeholder='Quantidade utilizada'
          name='quantity'
          value={ingredientForm.quantity}
          onChange={handleIngredientInput}
        />
        <Form.Control.Feedback type='invalid'>
          Insira uma quantidade válida
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='cost'>
        <Form.Label>Custo</Form.Label>
        <Form.Control
          required
          type='number'
          min='0'
          step='0.01'
          placeholder='Custo do ingrediente'
          name='cost'
          value={ingredientForm.cost}
          onChange={handleIngredientInput}
        />
        <Form.Control.Feedback type='invalid'>
          Insira um custo válido
        </Form.Control.Feedback>
      </Form.Group>
      <Button type='submit'>Adicionar</Button>
    </Form>
  );
};

export default IngredientForm;
