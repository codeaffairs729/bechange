import {
  Box,
  Paper,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Container,
} from '@mui/material';
import { Person } from '@mui/icons-material';
import SectionHeading from './typography/SectionHeading';

export default function Reviews() {
  const persons = [
    {
      id: 0,
      name: 'Anja Bayreuther',
      job: 'Partner of Polarstern',
    },
    {
      id: 1,
      name: 'Author Name',
      job: 'Marketing at EthikBank',
    },
    {
      id: 2,
      name: 'Author Name',
      job: 'Communication of WEtell',
    },
  ];
  return (
    <Container sx={{ width: '90%', my: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <SectionHeading title={'What others say'} />
      </Box>
      <Grid container sx={{ width: '90%', mx: 'auto' }}>
        {persons.map(person => {
          return (
            <Grid item xs={4} key={person.id}>
              <Paper variant='outlined' sx={{ maxWidth: 345, p: 3 }}>
                <CardContent>
                  <Typography variant='body1'>
                    “Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat.”
                  </Typography>
                </CardContent>
                <Grid
                  container
                  sx={{
                    p: 5,
                    bgcolor: 'background.light',
                    placeItems: 'center',
                  }}
                >
                  <Grid item xs={3}>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant='h5'>{person.name}</Typography>
                    <Typography>{person.job}</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
