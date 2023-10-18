import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Section2 = ({ style }) => {
  const serverLoginList = [
    "Browsertyp und Browserversion",
    "Verwendetes Betriebssystem   ",
    "Referral URL",
    "Hostname des zugreifenden Rechners",
    "Uhrzeit der Serveranfrage",
    "IP-Adresse",
  ];
  return (
    <Box>
       <Typography
              noWrap={false}
              align={"start"}
        variant="h3"
        sx={{
          ...style.h3,
        }}
      >
        Datenerfassung auf dieser Website
      </Typography>

       <Typography
              noWrap={false}
              align={"start"}
        variant="h4"
        sx={{
          ...style.h4,
        }}
      >
        Cookies
      </Typography>
       <Typography
              noWrap={false}
              align={"start"}
        variant="p"
        sx={{
          ...style.p,
        }}
      >
        Unsere Internetseiten verwenden so genannte "Cookies". Cookies sind
        kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie
        werden entweder vorübergehend für die Dauer einer Sitzung
        (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät
        gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch
        gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis
        Sie diese selbst löschen oder eine automatische Löschung durch Ihren
        Webbrowser erfolgt. <br />
        <br />
        Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät
        gespeichert werden, wenn Sie unsere Seite betreten
        (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung
        bestimmter Dienstleistungen des Drittunternehmens (z.B. Cookies zur
        Abwicklung von Zahlungsdienstleistungen). <br />
        <br />
        Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch
        notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren
        würden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere
        Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung
        anzuzeigen. <br />
        <br />
        Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs
        (notwendige Cookies) oder zur Bereitstellung bestimmter, von Ihnen
        erwünschter Funktionen (funktionale Cookies, z. B. für die
        Warenkorbfunktion) oder zur Optimierung der Website (z.B. Cookies zur
        Messung des Webpublikums) erforderlich sind, werden auf Grundlage von
        Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere
        Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein
        berechtigtes Interesse an der Speicherung von Cookies zur technisch
        fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine
        Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt die
        Speicherung der betreffenden Cookies ausschließlich auf Grundlage dieser
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist
        jederzeit widerrufbar.
      </Typography>

       <Typography
              noWrap={false}
              align={"start"}
        variant="h4"
        sx={{
          ...style.h4,
        }}
      >
        Server-Log-Dateien
      </Typography>
       <Typography
              noWrap={false}
              align={"start"}
        variant="p"
        sx={{
          ...style.p,
        }}
      >
        Der Provider der Seiten erhebt und speichert automatisch Informationen
        in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
        übermittelt. Dies sind:
      </Typography>
      <ul>
        {serverLoginList.map((list) => (
          <li>
             <Typography
              noWrap={false}
              align={"start"}
              variant="p"
              sx={{
                ...style.p,
              }}
            >
              {list}
            </Typography>
          </li>
        ))}
      </ul>
       <Typography
              noWrap={false}
              align={"start"}
        variant="p"
        sx={{
          ...style.p,
        }}
      >
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
        vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6
        Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse
        an der technisch fehlerfreien Darstellung und der Optimierung seiner
        Website – hierzu müssen die Server-Log-Files erfasst werden.
      </Typography>

       <Typography
              noWrap={false}
              align={"start"}
        variant="h4"
        sx={{
          ...style.h4,
        }}
      >
        Kontaktformular
      </Typography>
       <Typography
              noWrap={false}
              align={"start"}
        variant="p"
        sx={{
          ...style.p,
        }}
      >
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
        Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
        Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
        Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
        Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf
        Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
        Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
        vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
        beruht die Verarbeitung auf unserem berechtigten Interesse an der
        effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
        lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO),
        sofern diese abgefragt wurde. Die von Ihnen im Kontaktformular
        eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
        auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
        für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung
        Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
        Aufbewahrungsfristen – bleiben unberührt.
      </Typography>

       <Typography
              noWrap={false}
              align={"start"}
        variant="h4"
        sx={{
          ...style.h4,
        }}
      >
        Anfrage per E-Mail oder Telefon
      </Typography>
       <Typography
              noWrap={false}
              align={"start"}
        variant="p"
        sx={{
          ...style.p,
        }}
      >
        Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage
        inklusive aller daraus hervorgehenden personenbezogenen Daten (Name,
        Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert
        und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung
        weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
        Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
        Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
        erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
        Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und / oder auf unseren
        berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein
        berechtigtes Interesse an der effektiven Bearbeitung der an uns
        gerichteten Anfragen haben. Die von Ihnen an uns per Kontaktanfragen
        übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
        auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
        für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung
        Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere
        gesetzliche Aufbewahrungsfristen – bleiben unberührt.
      </Typography>

       <Typography
              noWrap={false}
              align={"start"}
        variant="h4"
        sx={{
          ...style.h4,
        }}
      >
        Newsletter
      </Typography>
       <Typography
              noWrap={false}
              align={"start"}
        variant="p"
        sx={{
          ...style.p,
        }}
      >
        Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten,
        benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche
        uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen
        E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden
        sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis
        erhoben. Diese Daten verwenden wir ausschließlich für den Versand der
        angeforderten Informationen und geben diese nicht an Dritte weiter. Die
        Verarbeitung der in das Newsletter-Anmeldeformular eingegebenen Daten
        erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1
        lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der
        E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können
        Sie jederzeit widerrufen, etwa über den "Austragen"-Link im Newsletter.
        Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge
        bleibt vom Widerruf unberührt. Die von Ihnen zum Zwecke des
        Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer
        Austragung aus dem Newsletter gespeichert und nach der Abbestellung des
        Newsletters gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert
        wurden (z.B. E-Mail-Adressen für den Mitgliederbereich) bleiben hiervon
        unberührt.
      </Typography>

       <Typography
              noWrap={false}
              align={"start"}
        variant="h4"
        sx={{
          ...style.h4,
        }}
      >
        Bewerberdaten
      </Typography>
       <Typography
              noWrap={false}
              align={"start"}
        variant="p"
        sx={{
          ...style.p,
        }}
      >
        Wir bieten Ihnen die Möglichkeit, sich bei uns zu bewerben (z.B. per
        E-Mail, postalisch oder via Online-Bewerberformular). Im Folgenden
        informieren wir Sie über Umfang, Zweck und Verwendung Ihrer im Rahmen
        des Bewerbungsprozesses erhobenen personenbezogenen Daten. Wir
        versichern, dass die Erhebung, Verarbeitung und Nutzung Ihrer Daten in
        Übereinstimmung mit geltendem Datenschutzrecht und allen weiteren
        gesetzlichen Bestimmungen erfolgt und Ihre Daten streng vertraulich
        behandelt werden. Umfang und Zweck der Datenerhebung Wenn Sie uns eine
        Bewerbung zukommen lassen, verarbeiten wir Ihre damit verbundenen
        personenbezogenen Daten (z.B. Kontakt- und Kommunikationsdaten,
        Bewerbungsunterlagen, Notizen im Rahmen von Bewerbungsgesprächen etc.),
        soweit dies zur Entscheidung über die Begründung eines
        Beschäftigungsverhältnisses erforderlich ist. Rechtsgrundlage hierfür
        ist § 26 BDSG-neu nach deutschem Recht (Anbahnung eines
        Beschäftigungsverhältnisses), Art. 6 Abs. 1 lit. b DSGVO (allgemeine
        Vertragsanbahnung) und – sofern Sie eine Einwilligung erteilt haben –
        Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung ist jederzeit widerrufbar.
        Ihre personenbezogenen Daten werden innerhalb unseres Unternehmens
        ausschließlich an Personen weitergegeben, die an der Bearbeitung Ihrer
        Bewerbung beteiligt sind. Sofern die Bewerbung erfolgreich ist, werden
        die von Ihnen eingereichten Daten auf Grundlage von § 26 BDSG-neu und
        Art. 6 Abs. 1 lit. b DSGVO zum Zwecke der Durchführung des
        Beschäftigungsverhältnisses in unseren Datenverarbeitungssystemen
        gespeichert. Aufbewahrungsdauer der Daten Sofern wir Ihnen kein
        Stellenangebot machen können, Sie ein Stellenangebot ablehnen oder Ihre
        Bewerbung zurückziehen, behalten wir uns das Recht vor, die von Ihnen
        übermittelten Daten auf Grundlage unserer berechtigten Interessen (Art.
        6 Abs. 1 lit. f DSGVO) bis zu 6 Monate ab der Beendigung des
        Bewerbungsverfahrens (Ablehnung oder Zurückziehung der Bewerbung) bei
        uns aufzubewahren. Anschließend werden die Daten gelöscht und die
        physischen Bewerbungsunterlagen vernichtet. Die Aufbewahrung dient
        insbesondere Nachweiszwecken im Falle eines Rechtsstreits. Sofern
        ersichtlich ist, dass die Daten nach Ablauf der 6-Monatsfrist
        erforderlich sein werden (z.B. aufgrund eines drohenden oder anhängigen
        Rechtsstreits), findet eine Löschung erst statt, wenn der Zweck für die
        weitergehende Aufbewahrung entfällt. Eine längere Aufbewahrung kann
        außerdem stattfinden, wenn Sie eine entsprechende Einwilligung (Art. 6
        Abs. 1 lit. a DSGVO) erteilt haben oder wenn gesetzliche
        Aufbewahrungspflichten der Löschung entgegenstehen. In diesem Fall
        werden wir Sie gesondert über die Speicherdauer und die Kriterien zur
        Festlegung der Speicherdauer informieren.
      </Typography>
    </Box>
  );
};

export default Section2;
