import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Checkbox,
  CssBaseline,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';

import { GET_ROCKET_DETAILS } from '../../graphql/queries/rocket-details.query';
import { useQuery } from '@apollo/client';
import Loading from '../loading/loading.component';
import Error from '../error/error.component';

const LaunchDetails = () => {
  const { launchId } = useParams();

  const { loading, error, data } = useQuery(GET_ROCKET_DETAILS);

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  let currencyFormatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  });

  let massFormatter = new Intl.NumberFormat('de-DE', {
    style: 'unit',
    unit: 'kilogram',
  });

  return (
    <Grid container component='main' spacing={2}>
      <CssBaseline />
      <Grid
        xs={4}
        md={8}
        sx={{
          p: 2,
          margin: 'auto',
          height: '100vh',
          display: 'flex',
          alignItems: 'top',
          justifyContent: 'center',
          flexGrow: 1,
        }}
      >
        {data.launchesPast.map((pastLaunch) => {
          if (pastLaunch.id === launchId) {
            return (
              <Box
                key={pastLaunch.id}
                sx={{
                  my: 4,
                  mx: 2,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Grid container>
                  <Grid item xs container direction='column' spacing={2}>
                    <Grid item xs>
                      <Typography variant='h2'>
                        Launch Rocket Details
                      </Typography>
                      <Typography variant='h6'>
                        Mission <strong>{pastLaunch.mission_name}</strong>
                      </Typography>
                      <Divider />
                      <Typography variant='h5' sx={{ marginTop: '50px' }}>
                        Rocket: <strong>{pastLaunch.rocket.rocket_name}</strong>{' '}
                      </Typography>
                      <Typography variant='h5'>
                        Landing Vehicle:{' '}
                        <strong>
                          {
                            pastLaunch.rocket?.first_stage.cores[0]
                              .landing_vehicle
                          }
                        </strong>
                      </Typography>
                      <Typography variant='h5'>
                        Landing Type:{' '}
                        <strong>
                          {pastLaunch.rocket?.first_stage.cores[0].landing_type}
                        </strong>
                      </Typography>
                      <Typography variant='h5'>
                        Launch Cost{' '}
                        <strong>
                          {currencyFormatter.format(
                            pastLaunch.rocket.rocket.cost_per_launch
                          )}
                        </strong>
                      </Typography>
                      <Typography variant='h5'>
                        Rocket Mass:{' '}
                        <strong>
                          {massFormatter.format(
                            pastLaunch.rocket.rocket.mass?.kg
                          )}
                        </strong>
                      </Typography>
                      <Typography variant='h5'>
                        Description :{' '}
                        <strong>{pastLaunch.rocket.rocket.description}</strong>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            );
          } else {
            return null;
          }
        })}
      </Grid>
      <Grid item xs={6} md={4} component={Paper} elevation={6}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h5'>
            Add a comment below
          </Typography>
          <Box
            component='form'
            noValidate
            // onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='name'
              label='Name'
              name='name'
              autoComplete='name'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='comment'
              label='Comment'
              type='text-area'
              id='comment'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Post comment
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LaunchDetails;
