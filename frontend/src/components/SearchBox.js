import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/products/search/${keyword}`);
    } else {
      history.push('/products');
    }
  };

  return (
    <Form onSubmit={handleSubmit} inline>
      <Form.Control
        size='sm'
        type='text'
        name='q'
        onChange={e => setKeyword(e.target.value)}
        placeholder='Buscar por nome'
        //className='mr-sm-2 ml-sm-5'
        className='mx-sm-2'
      />
      <Button type='submit' className='p-2' size='sm'>
        Pesquisar
      </Button>
    </Form>
  );
};

export default SearchBox;
