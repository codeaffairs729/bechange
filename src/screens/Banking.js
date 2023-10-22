import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Container } from '@mui/material';
import SectionHeading from '../components/typography/SectionHeading';
import AdSection from '../components/AdSection';
import RenderDetails from '../components/RenderDetails';
import { Parallax } from 'react-parallax';
import Checkbox from '../components/CheckboxHeader';
import Registration from '../components/RenderDetails/Registration';
import { getSection } from '../redux/actions/blog';

export default function Banking() {
  const [isSubscribed, setIsSubscribed] = useState(true);

  const style = {
    container: { mx: 'auto', mt: '12em', mb: '7em' },
  };
  const labels = [
    { label: 'Alter' },
    { label: 'Kreditkarte' },
    { label: 'Gemeinschaftskonto' },
  ];

  const dispatch = useDispatch();
  const { section, articles } = useSelector(state => state.blog);

  useEffect(() => {
    dispatch(getSection('banking', 3));
  }, [dispatch]);

  return (
    <Box sx={{ background: '#fffafa' }}>
      {/* <Parallax bgImage={"/cover.png"} strength={500}>
        <Box sx={style.container}>
          <Checkbox labels={labels} />
        </Box>
      </Parallax> */}
      <Box mt={5} mb={5}>
        <Container maxWidth='lg'>
          <SectionHeading title={'Banking'} />
          <AdSection
            title={section?.heading}
            desc={section?.description}
            articles={articles}
          />
          {isSubscribed && <RenderDetails type={'banking'} />}
        </Container>
        {!isSubscribed && <Registration />}
      </Box>
    </Box>
  );
}
