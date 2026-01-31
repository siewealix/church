import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
  </Helmet>
);

export default Meta;
