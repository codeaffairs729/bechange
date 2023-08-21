import { Container } from '@mui/material';
import SectionHeading from '../components/typography/SectionHeading';
import AdSection from '../components/AdSection';
import RenderDetails from '../components/RenderDetails';

export default function Banking() {
  const style = {
    container: { width: '90%', mx: 'auto', mt: '8em', mb: '3em' },
  };
  return (
    <Container sx={style.container}>
      <SectionHeading title={'Banking'} />
      <AdSection
        title={'Dein Impact für Banking'}
        desc={'Lorem Ipsum Dolor Sit Amet'}
        text1={'Bio? Selbes gilt für Ökostrom'}
        text2={'Kostencheck: wie viel kostet es mich mehr?'}
      />
      <RenderDetails type={'banking'} />
    </Container>
  );
}
