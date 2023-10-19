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

  p: {
    fontSize: {
      xs: "12px",
      sm: "16px",
    },
    fontFamily: "Ubuntu, sans-serif",
    lineHeight: "1.5",
    marginBottom: {
      xs: "0.5rem",
      sm: "1rem",
    },
  },
};

const terms = [
  {
    title: "1 Geltungsbereich ",
    desc: [
      "1.1 Die folgenden Allgemeinen Geschäftsbedingungen gelten für die von BeChange angebotenen Dienstleistungen, die von Tizian Amadeus Luciani, Via Monte Pastello 14, 37019 Peschiera del Garda, VR, Italien, auf der Website BeChange.Earth (&quot;	Website&quot;	) angeboten und nachfolgend näher als &quot;	Tarifvergleich&quot;	 und &quot;	Wechselservice&quot;	 beschrieben werden (nachfolgend gemeinsam als &quot;	Dienstleistungen&quot;	 bezeichnet). ",
      "1.2 Das Angebot von BeChange richtet sich ausschließlich an natürliche Personen, die in ihrem Wohnsitzland Deutschland, voll geschäftsfähig sind und die Dienstleistungen für eigene Zwecke nutzen (&quot;Benutzer&quot;).",
      "1.3 Durch die Nutzung der Dienstleistungen akzeptiert der Benutzer die Allgemeinen Geschäftsbedingungen von BeChange in ihrer jeweils aktuellen Fassung für alle rechtlichen Beziehungen zwischen ihm und BeChange. Die Allgemeinen Geschäftsbedingungen können jederzeit per E-Mail angefordert werden.",
      "1.4 Sollten einzelne Klauseln dieser Allgemeinen Geschäftsbedingungen ganz oder teilweise unwirksam sein, hat dies keine Auswirkungen auf die Gültigkeit der übrigen Klauseln.",
      "1.5 Das Rechtsverhältnis zwischen BeChange und dem Benutzer unterliegt dem italienischen Recht unter Ausschluss des Übereinkommens der Vereinten Nationen über Verträge über den internationalen Warenkauf und der Kollisionsregeln des internationalen Privatrechts.",
    ],
  },
  {
    title: "2 Tarifvergleich",
    desc: [
      "2.1 BeChange bietet einen Überblick über Tarife für Strom, Bankwesen, Telekommunikation und Versicherungen auf der Website und ermöglicht es Benutzern, die dargestellten Tarife miteinander zu vergleichen (&quot;Tarifvergleich&quot;). ",
      "2.2 Die im Tarifvergleich angezeigten Tarife basieren auf Informationen, die BeChange von ausgewählten Versorgungsunternehmen (&quot;Anbieter&quot;) erhält. BeChange übernimmt keine Garantie und gibt keine Zusicherung hinsichtlich der Genauigkeit der präsentierten Informationen. Falls sich die im Tarifvergleich angezeigten Informationen von den Informationen der Anbieter unterscheiden, ist allein die vom Anbieter bereitgestellte Information maßgeblich. ",
      "2.2.1 Speziell der Tarifvergleich für Strom wird über eine Programmierschnittstelle von Switch for Climate gemeinnützige UG (haftungsbeschränkt), Chapeaurougeweg 32, 20535 Hamburg („Switch for Climate“) unterstützt. ",
      "2.3 Die Nutzung des Tarifvergleichs ist für den Benutzer kostenlos.",
      "2.4 Eine kommerzielle Nutzung der Informationen aus dem Tarifvergleich durch den Benutzer ist nicht gestattet.",
      "2.5 BeChange bemüht sich, nur die Tarife derjenigen Anbieter in ihren Tarifvergleich aufzunehmen, die unseren festgelegten Lieferantenkriterien entsprechen.",
      "2.6 Um die Einhaltung der Lieferantenkriterien zu überprüfen, stützt sich BeChange auf Informationen, von denen einige nicht öffentlich verfügbar sind. Aufgrund der großen Anzahl von Anbietern am Markt ist es BeChange nicht möglich, umfassende eigene Recherchen zur Einhaltung der Lieferantenkriterien durchzuführen.",
      "2.7 Die Rangfolge im Tarifvergleich basiert ausschließlich auf dem Preis als Standard. Hierzu werden die Kosten verglichen, die ein Neukunde im Suchgebiet im ersten Vertragsjahr voraussichtlich für die angegebene Kaufmenge haben wird.",
      "2.8 Zu Informationszwecken werden die Stromtarife im Tarifvergleich zusätzlich mit einem vom Benutzer auswählbaren Referenztarif verglichen. Der Preisvergleich erfolgt auf Grundlage der durchschnittlich erwarteten Kosten im ersten Vertragsjahr der im Tarifvergleich angezeigten Stromtarife mit den erwarteten Kosten für eine einjährige Versorgung im ausgewählten Referenztarif. Der Grundversorgungstarif des Grundversorgers in der vom Benutzer angegebenen Postleitzahl wird standardmäßig als Referenztarif ausgewählt. Der Benutzer hat die Möglichkeit, einen anderen Tarif als Referenztarif auszuwählen. Switch for Climate erhält die Preisdaten für die wählbaren Referenztarife aus den öffentlich verfügbaren Informationen der jeweiligen Anbieter. Switch for Climate kann die Währung und Richtigkeit dieser Informationen nicht überprüfen und übernimmt daher keine Haftung für die Richtigkeit der Preisdaten und gibt keine Garantie oder Zusicherung, dass eine im Preisvergleich angegebene Ersparnis tatsächlich erzielt werden kann. ",
    ],
  },
  {
    title: "Wechselservice",
    desc: [
      "3.1 BeChange ermöglicht Benutzern, einige der im Tarifvergleich enthaltenen Anbieter über ein webbasiertes Bestellformular zu kontaktieren, um einen Liefervertrag abzuschließen (&quot;Wechselservice&quot;). Die Tarife, für die der Wechselservice angeboten wird, sind im Tarifvergleich mit &quot;Switch/Wechsel&quot; gekennzeichnet. Webbasierte Bestellformulare für den Abschluss eines Stromwechselservices&quot; werden über unseren Partner Switch for Climate durchgeführt. ",
      "3.2 Durch Ausfüllen des auf der Website bereitgestellten Bestellformulars und Anklicken der Schaltfläche &quot;Kauf abschließen&quot; erteilt der Benutzer BeChange (und für Strom unseren Partner Switch for Climate) den Auftrag, dem ausgewählten Stromversorgungsunternehmen ein rechtlich verbindliches Angebot des Benutzers zur Abwicklung eines Versorgungsvertrags zu den im Tarifvergleich für den jeweiligen Tarif angezeigten Bedingungen zu übermitteln. ",
      "3.3 Die Nutzung des Wechselservice ist für den Benutzer kostenlos. Wenn ein Versorgungsvertrag abgeschlossen wird, können für die Nutzung der Dienstleistungen des Versorgungsunternehmens Kosten für den Benutzer anfallen.",
      "3.4 BeChange hat keinen Einfluss darauf, ob ein Vertrag tatsächlich zwischen dem Benutzer und dem Versorgungsunternehmen abgeschlossen wird. Die Entscheidung zur Annahme des Angebots des Benutzers liegt allein im Ermessen des jeweiligen Anbieters.",
      "3.5 Im Falle des Abschlusses eines Versorgungsvertrags wird dieser ausschließlich zwischen dem einzelnen Anbieter und dem Benutzer abgeschlossen. BeChange ist nicht an der Erbringung von Dienstleistungen durch das Versorgungsunternehmen beteiligt. ",
      "3.6 BeChange handelt eigenständig und tritt nicht als Vertreter eines bestimmten Versorgungsunternehmens auf. Die Abgabe von Willenserklärungen und die Vornahme anderer rechtlich relevanter Handlungen im Hinblick auf das Vertragsverhältnis zwischen dem Benutzer und dem Anbieter erfolgen ausschließlich gegenüber dem Anbieter. Dies gilt insbesondere für einen Widerruf des Vertragsangebots durch den Benutzer.",
    ],
  },
  {
    title: "4 Kommunikation",
    desc: [
      "4.1 Wir werden in erster Linie per E-Mail mit Ihnen korrespondieren und optional telefonisch. Es liegt in Ihrer Verantwortung sicherzustellen, dass Sie unter der von Ihnen angegebenen Adresse erreichbar sind und unsere E-Mails oder Anrufe erhalten. Überprüfen Sie daher regelmäßig Ihren SPAM-Ordner und klassifizieren Sie die von uns erhaltenen E-Mails richtig (z. B., indem Sie unsere E-Mail-Adresse in Ihr Online-Adressbuch aufnehmen oder unsere E-Mails als &quot;sicher&quot; klassifizieren).",
    ],
  },
  {
    title: "5 Zusammenarbeit mit Kooperationspartnern",
    desc: [
      "5.1 Wenn der Wechselservice für einen Tarif nicht angeboten wird, bietet BeChange dem Benutzer die Möglichkeit, über einen indikativen Link direkt zur Website des Anbieters zu gelangen. ",
      "5.2 Durch die Weiterleitung zur Website des Anbieters gibt der Benutzer kein verbindliches Angebot zum Abschluss eines Vertrags mit dem Anbieter ab. BeChange übernimmt auch keine Verantwortung für den Abschluss eines Vertragsverhältnisses zwischen dem Benutzer und dem Anbieter. Im Falle des Vertragsabschlusses ist allein der zwischen dem Benutzer und dem Anbieter vereinbarte Inhalt maßgeblich, wobei die Vertragsbedingungen von den im Tarifvergleich präsentierten Informationen abweichen können.",
      "5.3 In einigen Fällen arbeitet BeChange mit Kooperationspartnern der Anbieter zusammen. In diesen Fällen kann BeChange eine Provision für die Weiterleitung zur Website des Anbieters erhalten. Die Zusammenarbeit mit Kooperationspartnern und etwaige Provisionszahlungen haben keinen Einfluss auf die Darstellung der Tarife des betreffenden Anbieters im Tarifvergleich.",
    ],
  },
  {
    title: "6 Provisionszahlungen und deren Verwendung",
    desc: [
      "6.1 BeChange kann von einigen Anbietern oder Kooperationspartnern eine Provision für die Vermittlung von Kunden erhalten. Im Stromsegment werden die Provisionen zwischen Switch for Climate und BeChange aufgeteilt.",
      "6.2 BeChange wird am Ende eines jeden Quartals Spenden an gemeinnützige Projekte leisten. Die Höhe der von BeChange am Ende des Jahres weitergeleiteten Spenden hängt von individuellen Vereinbarungen mit den gemeinnützigen Organisationen ab.",
    ],
  },
  {
    title: "7 Pflichten des Benutzers ",
    desc: [
      "7.1 Der Benutzer sichert zu, dass die in den Bestellformularen angegebenen Informationen korrekt und vollständig sind. Insbesondere wird der Benutzer die Dienste von BeChange nicht unter einer Identität verwenden, die nicht seiner/ihrer wahren Identität entspricht.",
      "7.2 BeChange weist ausdrücklich darauf hin, dass die Bereitstellung falscher Informationen dazu führen kann, dass BeChange und/oder Dritte Schadensersatzansprüche gegen den Benutzer geltend machen.",
    ],
  },
  {
    title: "8 Verantwortung und Haftungsbeschränkung",
    desc: [
      "8.1 BeChange übernimmt keine Haftung für die Richtigkeit und Vollständigkeit der kostenlos auf der Website bereitgestellten Informationen. BeChange legt Wert auf eine aktuelle und fehlerfreie Darstellung der im Tarifvergleich gezeigten Tarife. Das Angebot auf der Website basiert jedoch auf den BeChange von Dritten bereitgestellten Informationen, insbesondere von den Stromversorgungsunternehmen. Das bedeutet, dass alle Informationen, insbesondere über den Leistungsumfang, die Preise und Bedingungen, auf den vom Anbieter oder von Dritten bereitgestellten Informationen basieren. Selbst wenn eine ständige Überprüfung erfolgt, um sicherzustellen, dass die Informationen zu den Tarifen aktuell, korrekt und vollständig sind, kann in dieser Hinsicht keine Garantie gegeben werden. Insbesondere enthalten die Angebote keine Aussagen zur Eignung, Verfügbarkeit und Qualität für den einzelnen Benutzer.",
      "8.2 BeChange haftet für Vorsatz und grobe Fahrlässigkeit sowie für Schäden, die auf einer schuldhaften Verletzung wesentlicher Vertragspflichten durch BeChange oder durch einen gesetzlichen Vertreter oder Erfüllungsgehilfen von BeChange beruhen. Für Schäden, die auf leicht fahrlässiger Verletzung nicht wesentlicher vertraglicher Pflichten durch BeChange beruhen, haftet BeChange nur für den vorhersehbaren Schaden, der typisch für den Vertrag ist. Wesentliche Vertragspflichten sind Pflichten, deren Erfüllung für die ordnungsgemäße Durchführung des Vertragsverhältnisses mit BeChange wesentlich ist und auf deren Einhaltung der Benutzer regelmäßig vertraut und vertrauen darf. Ansonsten ist die Haftung von BeChange ausgeschlossen",
      "8.3 Der Benutzer hat keinen Anspruch auf die zukünftige Nutzung der Website. BeChange kann das Angebot der Dienstleistungen jederzeit nach eigenem Ermessen und ohne Angabe von Gründen einstellen.",
      "8.4 BeChange haftet nicht für die Verfügbarkeit der Website. Insbesondere wird keine Haftung für die Störung oder den Ausfall der Website und etwaige daraus resultierende Schäden für Dritte übernommen.",
      "8.5 Aus Gründen der Benutzerfreundlichkeit stellt BeChange externe Links zu Websites bereit, die nicht von BeChange betrieben werden und für deren Inhalt ausschließlich der jeweilige Website-Betreiber verantwortlich ist. ",
      "8.6 BeChange distanziert sich ausdrücklich von sämtlichen Inhalten der Server hinter diesen Links, weiteren Links und anderen sichtbaren und unsichtbaren Inhalten. BeChange übernimmt diese Inhalte auch nicht als eigene. Diese Inhalte werden nicht überprüft, obwohl BeChange darauf Wert legt, dass diese Inhalte nicht gegen geltendes Recht verstoßen. Die Nutzung der Links und der Websites sowie der Abschluss eines Vertrags erfolgt in der Verantwortung des Benutzers.",
    ],
  },
  {
    title:
      "9 Datenschutz: Zum Thema Datenschutz verweisen wir auf die aktuelle Datenschutzerklärung.",
    desc: [""],
  },
  {
    title:
      "10 Hinweis zur Streitbeilegung nach dem Verbraucherstreitbeilegungsgesetz ",
    desc: [
      "BeChange ist weder bereit noch verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    ],
  },
  {
    title:
      "11 Informationen zur Online-Streitbeilegung gemäß ODR-Verordnung 524/2013",
    desc: [
      "Die EU-Kommission stellt eine Plattform zur außergerichtlichen",
      " Online-Streitbeilegung (ODR-Plattform) zur Verfügung, die unter",
    ],
  },
];

const Terms = () => {
  return (
    <Box
      py={{ xs: 0, sm: 4 }}
      px={{ xs: 4, sm: 16 }}
      sx={{ ...style.container, flexDirection: "column" }}
    >
      <Typography
        variant="h2"
        sx={{
          ...style.h3_2,
        }}
      >
        1. Allgemeine Geschäftsbedingungen für den Tarifvergleichs- und
        Wechselservice
      </Typography>

      {terms.map((term) => (
        <>
          <Typography
            variant="h2"
            sx={{
              ...style.h3_2,
              fontFamily: "Ubuntu, sans-serif",
            }}
          >
            {term.title}
          </Typography>

          {term.desc.map((info) => (
            <Typography
              variant="p"
              noWrap={false}
              align={"start"}
              sx={{
                ...style.p,
              }}
            >
              {info}
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
        <Link
          to="https://ec.europa.eu/consumers/odr"
          style={{ wordBreak: "break-all" }}
        >
          https://ec.europa.eu/consumers/odr
        </Link>
        &nbsp;&nbsp;abgerufen werden kann.
      </Typography>
    </Box>
  );
};

export default Terms;
