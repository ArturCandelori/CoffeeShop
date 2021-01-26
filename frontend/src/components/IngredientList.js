import { ListGroup, Button } from 'react-bootstrap';

const IngredientList = ({ ingredients, setIngredients }) => {
  const deleteIngredient = i => {
    setIngredients(
      ingredients.filter(ingredient => ingredients.indexOf(ingredient) !== i)
    );
  };

  return (
    <>
      <h2 className='my-3'>Ingredientes:</h2>
      <ListGroup>
        {ingredients.map((ingredient, i) => (
          <ListGroup.Item key={i}>
            ingrediente: {ingredient.name} | quantidade: {ingredient.quantity}
            g/ml | custo: R${Number(ingredient.cost).toFixed(2)}{' '}
            <Button
              className='ml-auto'
              variant='danger'
              size='sm'
              onClick={() => deleteIngredient(i)}
            >
              Apagar
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default IngredientList;
