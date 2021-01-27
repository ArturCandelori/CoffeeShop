import { Helmet } from 'react-helmet';

const Meta = ({ title }) => {
  return (
    <Helmet>
      <title>CoffeeShop | {title}</title>
    </Helmet>
  );
};

export default Meta;
