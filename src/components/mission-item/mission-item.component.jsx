import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';

import { GET_PAST_MISSIONS } from '../../graphql/queries/past-missions';
import { useQuery } from '@apollo/client';

import noImage from '../../assets/no-image.jpg';

import './mission-item.styles.css';

const MissionItem = () => {
  const { error, data, loading } = useQuery(GET_PAST_MISSIONS);

  console.log({ error, loading, data }, 'heyyyy');

  if (error) {
    alert('Something went wrong!' + error);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

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
            data.launchesPast.map((launch, id) => (
              <Grid item xs={4} sm={4} md={4} key={id}>
                <Card>
                  <CardMedia
                    component='img'
                    height='240'
                    image={
                      launch.links?.flickr_images &&
                      launch.links.flickr_images.length > 0
                        ? launch.links.flickr_images[
                            getRandomInt(0, launch.links?.flickr_images.length)
                          ]
                        : noImage
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
