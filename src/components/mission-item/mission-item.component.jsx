import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';

import { GET_PAST_LAUNCHES } from '../../graphql/queries/past-launches.query.js';
import { useQuery } from '@apollo/client';

import './mission-item.styles.css';
import Loading from '../loading/loading.component.jsx';

const MissionItem = () => {
  const { loading, error, data } = useQuery(GET_PAST_LAUNCHES);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    alert('Something went wrong!' + error);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const filteredLaunches = data?.launchesPast.filter(
    (launch) =>
      launch.links.article_link && launch.links.flickr_images.length > 0
  );

  return (
    <Container maxWidth='xl'>
      <Box sx={{ flexGrow: 1 }} mt={4}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {loading ? (
            <div>Spinner...</div>
          ) : (
            filteredLaunches.map((launch, id) => (
              <Grid item xs={4} sm={4} md={4} key={id}>
                <Card>
                  <CardMedia
                    component='img'
                    height='240'
                    image={
                      launch.links.flickr_images[
                        getRandomInt(0, launch.links?.flickr_images.length)
                      ]
                    }
                    alt={launch.mission_name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      {launch.mission_name}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {launch.launch_site.site_name_long}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default MissionItem;
