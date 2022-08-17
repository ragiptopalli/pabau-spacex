import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';

const CommentForm = () => {
  return (
    <Grid
      item
      sm={4}
      md={4}
      component={Paper}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'bottom',
      }}
      elevation={6}
    >
      <Box
        sx={{
          my: 8,
          mx: 4,
        }}
      >
        <Typography component='h1' variant='h5'>
          Add a comment
        </Typography>
        <Box
          component='form'
          noValidate
          // onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <TextField
            fullWidth
            required
            id='standard-multiline-flexible'
            label='Name'
            // onChange={handleChange}
            variant='standard'
          />
          <TextField
            fullWidth
            required
            id='filled-textarea'
            label='Write a comment'
            maxRows={3}
            placeholder='Placeholder'
            multiline
            variant='standard'
          />
          <Button
            type='submit'
            variant='outlined'
            sx={{
              mt: 3,
              mb: 2,
              borderColor: '#000',
              color: '#000',
              ':hover': {
                bgcolor: '#000',
                color: '#fff',
                borderColor: '#000',
              },
            }}
          >
            Comment
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default CommentForm;
