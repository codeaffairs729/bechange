import { Box, Typography } from "@mui/material";
import styles from "./typography/StyleTypography";
import { Link } from "react-router-dom";

const style = {
  container: {
    width: "100%",
    mx: "auto",
    mt: "2em",
    display: "flex",
    justifyContent: "start",
    justifyItems: "start",
    alignContent: "start",
    alignItems: "start",
  },

  h2: {
    fontSize: {
      xs: "20px",
      sm: "40px",
      lg: "40px",
    },
    fontFamily: "Playfair Display, serif",
    fontWeight: "bold",
  },

  heading: {
    fontSize: {
      xs: "14px",
      sm: "24px",
      lg: "32px",
    },
    fontFamily: "Playfair Display, serif",
    fontWeight: "bold",
    marginBottom: "12px",
    marginTop: "12px",
  },

  h3_2: {
    fontSize: {
      xs: "14px",
      sm: "16px",
      lg: "18px",
    },
    fontFamily: "Playfair Display, serif",
    fontWeight: "bold",
    marginTop: "1rem",
    marginBottom: {
      xs: "0.5rem",
      sm: "1rem",
    },
  },

  flexCenter: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    alignContent: "center",
    alignItems: "center",
  },

  h4: {
    fontSize: {
      xs: "11px",
      sm: "16px",
      lg: "px",
    },
    fontFamily: "Playfair Display, serif",
    fontWeight: "bold",
    marginBottom: {
      xs: "5px",
      sm: "1rem",
    },
  },
  p: {
    fontSize: {
      xs: "12px",
      sm: "16px",
    },
    fontFamily: "Ubuntu, sans-serif",
    lineHeight: "1.5",
    marginBottom: {
      xs: "0.5rem",
      sm: "2rem",
    },
  },
  p1: {
    fontSize: {
      xs: "12px",
      sm: "16px",
    },
    fontFamily: "Ubuntu, sans-serif",
    lineHeight: "1.5",
    marginBottom: {
      xs: "0.3rem",
      sm: "1rem",
    },
  },
};

const imprintInfo = [
  {
    title: "Haftung für Inhalte",
    desc: [
      " Als Diensteanbieter  sind wir für eigene Inhalte  aufdiesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
    ],
  },
  {
    title: "Haftung für Links",
    desc: [
      "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
      "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
    ],
  },
  {
    title: "Urheberrecht",
    desc: [
      "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem italienischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
      "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
    ],
  },
];

const iconInfo = [
  {
    name: "Fair trade icons",
    link: "https://www.flaticon.com/free-icons/fair-trade",
    created: "created by Freepik – Flaticon",
  },
  {
    name: "Telecommunication icons",
    link: "https://www.flaticon.com/free-icons/telecommunication",
    created: "created by Freepik – Flaticon",
  },
  {
    name: "Green energy icons",
    link: "https://www.flaticon.com/free-icons/green-energy%22",
    created: "created by Freepik – Flaticon",
  },
  {
    name: "Search icons",
    link: "https://www.flaticon.com/free-icons/search",
    created: "created by Maxim Basinski Premium - Flaticon",
  },
  {
    name: "Efficiency icons",
    link: "https://www.flaticon.com/free-icons/efficiency",
    created: "created by Eucalyp - Flaticon",
  },
  {
    name: "Transparent icons",
    link: "https://www.flaticon.com/free-icons/transparent",
    created: "created by Smashicons – Flaticon",
  },
  {
    name: "Energy icons",
    link: "https://www.flaticon.com/free-icons/efficiency",
    created: "created by Freepik – Flaticon",
  },
];
const Imprint = () => {
  return (
    <Box
      py={{ xs: 0, sm: 4 }}
      px={{ xs: 4, sm: 16 }}
      sx={{ ...style.container, flexDirection: "column" }}
    >
      <Typography
        variant="h2"
        sx={{
          ...style.heading,
        }}
      >
        Bechange – Dein wirklich grüner Vergleich & Wechsel
      </Typography>
      <Typography
        variant="h2"
        sx={{
          ...style.h3_2,
        }}
      >
        Inhaber & Verantwortlicher für den Inhalt
      </Typography>
      <Typography
        variant="p"
        sx={{
          ...style.p,
        }}
      >
        Tizian Amadeus Luciani
        <br />
        Via Monte Pastello 14
        <br />
        37019 Peschiera del Garda
        <br />
        Verona, Italien
        <br />
        UST ID Italien (P. IVA): <b>IT12345678901</b>
        <br />
      </Typography>

      <Typography variant="p" sx={style.p}>
        Website:
        <Link to="https://bechange.earth"> https://bechange.earth </Link>
      </Typography>
      <Typography variant="p" sx={style.p}>
        E-Mail:<Link to="info@bechLinknge.earth"> info@bechLinknge.earth</Link>
      </Typography>
      <Typography
        variant="h2"
        sx={{
          ...style.h3_2,
        }}
      >
        Quellenangaben für verwendete Grafiken
      </Typography>
      {iconInfo.map((icon) => (
        <Typography variant="p" sx={style.p1}>
          <Link to={icon.link}> {icon.name}</Link>
          {icon.created}
        </Typography>
      ))}
      <Typography variant="p" sx={style.p}>
        AI-Images created by Midjourney, inspired by
        <Link to={"https://www.leonatsume.com/"}>Leo Natsume</Link>
      </Typography>
      <Typography
        variant="h2"
        sx={{
          ...style.h3_2,
          textAlign: "center",
        }}
      >
        EU-Streitschlichtung
      </Typography>
      <Typography
        variant="p"
        sx={{
          ...style.p,
        }}
      >
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <Link to={"https://ec.europa.eu/consumers/odr"}>
          https://ec.europa.eu/consumers/odr
        </Link>
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </Typography>

      <Typography
        variant="h2"
        noWrap={false}
        align={"start"}
        sx={{
          ...style.h3_2,
        }}
      >
        Verbraucherstreitbeilegung / Universalschlichtungsstelle
      </Typography>
      <Typography
        variant="p"
        sx={{
          ...style.p,
        }}
      >
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </Typography>
      <Typography
        variant="h2"
        sx={{
          ...style.h3_2,
          textAlign: "center",
        }}
      >
        Disclaimer
      </Typography>

      {imprintInfo.map((info) => (
        <>
          <Typography
            variant="h2"
            sx={{
              ...style.h3_2,
              textAlign: "center",
            }}
          >
            {info.title}
          </Typography>

          {info.desc.map((section) => (
            <Typography
              variant="p"
              sx={{
                ...style.p,
              }}
            >
              {section}
            </Typography>
          ))}
        </>
      ))}
      <Typography
        variant="h4"
        sx={{
          ...style.h3_2,
        }}
      >
        © Bechange.earth 2023
      </Typography>
    </Box>
  );
};

export default Imprint;
