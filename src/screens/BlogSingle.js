import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  Box,
  Paper,
  IconButton,
  CircularProgress,
  Typography,
  Chip,
} from '@mui/material';
import { ArrowCircleLeft } from '@mui/icons-material';
import moment from 'moment';
import Jumbotron from '../components/Jumbotron';
import { getArticle } from '../redux/actions/blog';

const style = {
  container: { width: '90%', mx: 'auto', mt: '2em', mb: '3em' },
  paper: { p: 2, my: 3 },
  head: { display: 'flex', justifyContent: 'space-between' },
};

export default function BlogSingle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { subscreen } = useParams();
  const { loading, article } = useSelector(state => state.blog);

  const [tags, setTags] = useState([]);

  useEffect(() => {
    dispatch(getArticle(subscreen));
  }, [dispatch, subscreen]);

  useEffect(() => {
    setTags(article?.keywords?.split(','));
  }, [article, setTags]);

  return loading ? (
    <CircularProgress />
  ) : (
    <>
      <Jumbotron
        title={article?.title}
        desc={
          article?.category === 2
            ? 'Energie'
            : article?.category === 3
            ? 'Banking'
            : article?.category === 4
            ? 'Mobilfunk'
            : 'Allgemein'
        }
      />
      <Container sx={style.container}>
        <Box sx={style.head}>
          <IconButton size='large'>
            <ArrowCircleLeft
              fontSize='large'
              onClick={() => navigate('/bog')}
            />
          </IconButton>
          <Typography>
            Posted On: {moment(article?.created_at).format('DD.mm.yyyy H.mm')}
          </Typography>
        </Box>
        <Paper sx={style.paper}>
          <section dangerouslySetInnerHTML={{ __html: article?.content }} />
        </Paper>
        <Box>
          {tags?.map(tag => {
            return (
              <Chip key={tag} label={tag} color={'primary'} sx={{ mr: 1 }} />
            );
          })}
        </Box>
      </Container>
    </>
  );
}
