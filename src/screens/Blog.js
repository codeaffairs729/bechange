import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import Jumbotron from "../components/Jumbotron";
import { getArticles } from "../redux/actions/blog";

export default function Blog() {
  const style = {
    container: { width: "90%", mx: "auto", mt: "2em", mb: "3em" },
    paper: { p: 2, my: 2 },
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, articles } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  const [general, setGeneral] = useState([]);
  const [energy, setEnergy] = useState([]);
  const [banking, setBanking] = useState([]);
  const [telecom, setTelecom] = useState([]);

  useEffect(() => {
    setGeneral(articles?.filter((article) => article._id === 1));
    setEnergy(articles?.filter((article) => article._id === 2));
    setBanking(articles?.filter((article) => article._id === 3));
    setTelecom(articles?.filter((article) => article._id === 4));
  }, [articles]);

  return (
    <>
      <Jumbotron title={"Blog"} />
      <Container style={style.container}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {general?.map((gen) => (
              <Paper sx={style.paper}>
                <Typography variant="h3" key={gen?._id}>
                  Allgemein
                </Typography>
                <Box sx={{ my: "5em" }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140, background: "black" }}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {gen?.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {gen?.desc}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={() => navigate(gen?.slug)}>
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              </Paper>
            ))}
            {energy?.map((eng) => (
              <Paper sx={style.paper}>
                <Typography variant="h3" key={eng?._id}>
                  Energie
                </Typography>
                <Box sx={{ my: "5em" }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140, background: "black" }}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {eng?.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {eng?.desc}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={() => navigate(eng?.slug)}>
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              </Paper>
            ))}
            {banking?.map((bank) => (
              <Paper sx={style.paper}>
                <Typography variant="h3" key={bank?._id}>
                  Banking
                </Typography>
                <Box sx={{ my: "5em" }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140, background: "black" }}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {bank?.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {bank?.desc}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={() => navigate(bank?.slug)}>
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              </Paper>
            ))}
            {telecom?.map((tel) => (
              <Paper sx={style.paper}>
                <Typography variant="h3" key={tel?._id}>
                  MobilFunk
                </Typography>
                <Box sx={{ my: "5em" }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140, background: "black" }}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {tel?.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {tel?.desc}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={() => navigate(tel?.slug)}>
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              </Paper>
            ))}
          </>
        )}
      </Container>
    </>
  );
}
