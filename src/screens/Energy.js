import { useState } from 'react';
import { Container, Divider } from '@mui/material';
import Calculator from '../components/Calculator';
import EnergyList from '../components/RenderDetails/EnergyList';

export default function Energy() {
  const style = {
    container: { width: '90%', mx: 'auto', mt: '8em', mb: '3em' },
  };

  const [tariffData, setTariffData] = useState([]);

  return (
    <Container sx={style.container}>
      <Calculator setTariffData={setTariffData} />
      <Divider sx={{ my: 5 }} />
      <EnergyList tariffData={tariffData} />
    </Container>
  );
}
