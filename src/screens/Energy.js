import { Container } from '@mui/material';
import Calculator from '../components/Calculator';

export default function Energy() {
  const style = {
    container: { width: '90%', mx: 'auto', mt: '8em', mb: '3em' },
  };

  return (
    <Container sx={style.container}>
      <Calculator />
    </Container>
  );
}
