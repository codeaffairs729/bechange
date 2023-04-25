import { Container } from '@mui/material';
import SectionHeading from '../components/typography/SectionHeading';
import AdSection from '../components/AdSection';
import RenderDetails from '../components/RenderDetails';

export default function Mobile() {
  const style = {
    container: { width: '90%', mx: 'auto', mt: '8em', mb: '3em' },
  };
  return (
    <Container sx={style.container}>
      <SectionHeading title={'Mobile'} />
      <AdSection
        title={'Dein Impact im Mobilfunk'}
        desc={
          'Was ist an den herkömmlichen Mobiltarifen verkehrt? Informiere Dich in den nebenstehende Blogs zur Thematik.'
        }
        text1={'Wie groß ist der Fußabdruck unserer Fixkosten?'}
        text2={'Kostencheck: wie viel kostet es mich mehr?'}
      />
      <RenderDetails />
    </Container>
  );
}
