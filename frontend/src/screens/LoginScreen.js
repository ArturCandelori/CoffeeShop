import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import useForm from '../hooks/useForm';

const LoginScreen = ({ setUser }) => {
  console.log(setUser);

  const history = useHistory();

  const [loginForm, handleLoginChange] = useForm({
    email: '',
    password: '',
  });
  const [validated, setValidated] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity()) {
      const { data } = await axios.post('/api/users/login', {
        ...loginForm,
      });

      setUser(data.name);

      localStorage.setItem('@CoffeeShop:token', data.token);

      history.push('/products');
    } else {
      e.stopPropagation();

      setValidated(true);
    }
  };

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          <h1>Login</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId='email'>
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Digite seu e-mail'
                name='email'
                value={loginForm.email}
                onChange={handleLoginChange}
              />
              <Form.Control.Feedback type='invalid'>
                Insira um e-mail válido
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Senha</Form.Label>
              <Form.Control
                required
                minLength='6'
                type='password'
                placeholder='Digite sua senha'
                name='password'
                value={loginForm.password}
                onChange={handleLoginChange}
              />
              <Form.Control.Feedback type='invalid'>
                Senha deve conter no mínimo 6 caracteres
              </Form.Control.Feedback>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Entrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
