import { Box, Grid, Typography } from '@mui/material';

export default function EnergyDesc({ data, RenderPieChart }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
        <Typography sx={style.title}>Tariff: {data?.name}</Typography>
        <Typography sx={{ mt: 1 }}>
          Preisgarantie:{' '}
          {data?.priceGuarantee.period
            ? `${data?.priceGuarantee.period.value} ${data?.priceGuarantee.period.unit}`
            : 'Keine'}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Kündigungsfrist:{' '}
          {`${data?.cancellationPeriod.value} ${data?.cancellationPeriod.unit}`}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Mindestvertragslaufzeit:{' '}
          {data?.minimumTerm
            ? `${data?.minimumTerm.value} ${data?.minimumTerm.unit}`
            : 'Keine'}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography>Grundpreis: {data?.price.basePrice} €/Monat</Typography>
          <Typography>
            Arbeitspreis: {data?.price.workingPrice} €/Monat
          </Typography>
          <Typography>
            Gesamtpreis:{' '}
            {Math.round(
              (data?.price.basePrice + data?.price.workingPrice) * 100
            ) / 100}{' '}
            €/Monat
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography sx={style.title}>
          Strommix ({data?.energyMixYear})
        </Typography>
        {data?.energyMix.map((energy, i) => {
          return (
            <Box key={i} sx={{ display: 'flex', placeItems: 'center' }}>
              <Box
                sx={{
                  width: '10px',
                  height: '10px',
                  background:
                    energy.source === 'wind'
                      ? '#bbe4e9'
                      : energy.source === 'hydro'
                      ? '#2e79ba'
                      : energy.source === 'solar'
                      ? '#f7aa00'
                      : energy.source === 'nuclear'
                      ? '#c9fdd7'
                      : 'black',
                  mr: 2,
                }}
              />
              <Typography>{energy.source}</Typography>
            </Box>
          );
        })}
        <Box sx={{ mt: 3 }}>
          <RenderPieChart
            energyMix={data?.energyMix}
            size={'50%'}
            showLabel={true}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography sx={style.title}>
          Vorteile: {data?.provider.name}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: data?.advantages }}></div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography sx={style.title}>Labels</Typography>
        {data?.labels.map((label, i) => {
          return <Typography key={i}>{label.authority}</Typography>;
        })}
      </Grid>
    </Grid>
  );
}

const style = {
  title: {
    fontWeight: 900,
    fontSize: '20px',
  },
};
