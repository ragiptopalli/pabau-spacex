import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

import CommentForm from '../comment-form/comment-form-component';
import LaunchDetailsItem from '../launch-details-item/launch-details-item.component';

const LaunchDetails = () => {
  const { launchId } = useParams();

  return (
    <Grid container component='main' spacing={2}>
      <LaunchDetailsItem launchId={launchId} />
      <CommentForm />
    </Grid>
  );
};

export default LaunchDetails;
