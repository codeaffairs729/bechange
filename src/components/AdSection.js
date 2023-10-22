import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import styles from './typography/StyleTypography';
import { useNavigate } from 'react-router-dom';

export default function AdSection({ title, desc, articles }) {
  const navigate = useNavigate();

  const filteredArticles = articles?.slice(Math.max(articles.length - 2, 0));

  return (
    <Box sx={{ my: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography variant='h6' fontWeight={900} sx={styles.h6}>
            {title}
          </Typography>
          <Typography sx={styles.p}>{desc}</Typography>
        </Grid>
        {filteredArticles?.map(article => {
          return (
            <Grid item xs={12} sm={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{
                    height: 140,
                    background: 'black',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                  }}
                  image={article?.cover}
                  title={article?.title}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {article?.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {article?.desc.substring(0, 50)}...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' onClick={() => navigate(article?.slug)}>
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
