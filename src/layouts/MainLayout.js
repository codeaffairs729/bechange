import { useParams } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Energy from "../screens/Energy";
import Home from "../screens/Home";
import Mobile from "../screens/Mobile";
import Quality from "../screens/Quality";
import Banking from "../screens/Banking";
import Blog from "../screens/Blog";
import BlogSingle from "../screens/BlogSingle";
import About from "../screens/About";
import Imprint from "../components/Imprint";
import Terms from "../components/Terms";
import Privacy from "../components/Privacy";

const RenderPage = () => {
  const { screen } = useParams();
  switch (screen) {
    case "energie":
      return <Energy />;
    case "mobile-funk":
      return <Mobile />;
    case "banking":
      return <Banking />;
    case "qualitaet":
      return <Quality />;
    case "blog":
      return <Blog />;
    case "about":
      return <About />;
    case "imprint":
      return <Imprint />;
    case "terms":
      return <Terms />;
    case "privacy":
      return <Privacy />;
    default:
      return <Home />;
  }
};

export default function MainLayout() {
  const { subscreen } = useParams();

  return (
    <Box>
      <CssBaseline />
      <Header />
      {subscreen ? <BlogSingle /> : <RenderPage />}
      <Footer />
    </Box>
  );
}
