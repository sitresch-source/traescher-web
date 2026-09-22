import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";

export default function Datenschutz() {
  return (
    <div className="page">
      <SiteHeader base="/" />

      <main className="legal-main">
        <p className="eyebrow">Rechtliches</p>
        <h1>Datenschutzerklärung</h1>
        <p className="legal-updated">Stand: August 2026</p>

        <div className="legal-block">
          <h2>Verantwortliche Stelle</h2>
          <p>Simon Tresch, traescher web (since 2026), eine traescher Group Firma</p>
          <p>Wyden 8, 6462 Seedorf, UR, Schweiz</p>
          <p>
            <a href="mailto:simon.tresch@traescher-web.com">
              simon.tresch@traescher-web.com
            </a>
          </p>

          <h2>Grundsatz</h2>
          <p>
            Diese Website erhebt aktuell keine Daten über Formulare,
            Analyse- oder Tracking-Tools. Es werden keine Cookies gesetzt.
            Personenbezogene Daten fallen ausschliesslich an, wenn Sie von
            sich aus per E-Mail Kontakt aufnehmen.
          </p>

          <h2>Kontaktaufnahme per E-Mail</h2>
          <p>
            Wenn Sie mich über die angezeigte E-Mail-Adresse kontaktieren,
            werden die von Ihnen mitgeteilten Daten (z. B. Name,
            E-Mail-Adresse, Inhalt Ihrer Nachricht) ausschliesslich zur
            Bearbeitung Ihrer Anfrage sowie für den Fall von
            Anschlussfragen verarbeitet und gespeichert.
          </p>
          <p>
            Rechtsgrundlage ist die Erfüllung eines (vor-)vertraglichen
            Verhältnisses bzw. mein berechtigtes Interesse an der
            Beantwortung Ihrer Anfrage. Ihre Daten werden gelöscht, sobald
            sie für die Bearbeitung nicht mehr benötigt werden, sofern
            keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>

          <h2>Hosting</h2>
          <p>
            Diese Website wird bei einem Hosting-Anbieter betrieben. Beim
            Aufruf der Seite werden durch den Hosting-Anbieter automatisch
            technische Daten (z. B. IP-Adresse, Zugriffszeitpunkt,
            aufgerufene Seite) in Server-Logfiles verarbeitet, wie dies bei
            jedem Website-Aufruf technisch üblich und notwendig ist. Diese
            Daten werden nicht mit anderen Datenquellen zusammengeführt und
            nicht für Analyse- oder Marketingzwecke genutzt.
          </p>

          <h2>Cookies und Tracking</h2>
          <p>
            Diese Website setzt derzeit keine Cookies und keine Analyse-
            oder Tracking-Tools (z. B. Google Analytics) ein. Sollte sich
            dies ändern, wird diese Datenschutzerklärung entsprechend
            angepasst und – falls gesetzlich erforderlich – ein
            Cookie-Hinweis eingebunden.
          </p>

          <h2>Ihre Rechte</h2>
          <p>
            Nach dem Schweizer Datenschutzgesetz (DSG) haben Sie das
            Recht, Auskunft über die von mir bearbeiteten Daten zu Ihrer
            Person zu verlangen sowie deren Berichtigung oder Löschung zu
            beantragen, soweit keine gesetzlichen Aufbewahrungspflichten
            entgegenstehen. Wenden Sie sich dazu einfach an die oben
            genannte E-Mail-Adresse.
          </p>

          <h2>Änderungen</h2>
          <p>
            Diese Datenschutzerklärung wird angepasst, sobald sich die
            Datenverarbeitung auf dieser Website ändert (z. B. durch
            Einführung eines Kontaktformulars, von Tracking-Tools oder bei
            Angeboten für Kunden aus dem EU-Raum).
          </p>
        </div>

        <p className="legal-back">
          <Link to="/">← Zurück zur Startseite</Link>
          {" · "}
          <Link to="/impressum">Impressum</Link>
        </p>
      </main>

      <footer className="site-footer">
        <img src="/logo.png" alt="traescher web Logo" className="logo-image logo-image-footer" />
        <p>© 2026 traescher web · Switzerland</p>
        <p className="footer-legal">
          <Link to="/impressum">Impressum</Link> · <Link to="/datenschutz">Datenschutz</Link>
        </p>
      </footer>
    </div>
  );
}
