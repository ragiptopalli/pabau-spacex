import './home.styles.css';

import { GET_COMPANY_INFO } from '../../graphql/queries/company.query';
import { useQuery } from '@apollo/client';
import Loading from '../../components/loading/loading.component';
import Error from '../../components/error/error.component';

const Home = () => {
  const { error, loading, data } = useQuery(GET_COMPANY_INFO);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className='home-container'>
      <div className='company-container'>
        <h1 className='company-name'>{data.company.name}</h1>
        <p className='company-summary'>{data.company.summary}</p>
      </div>
    </div>
  );
};

export default Home;
