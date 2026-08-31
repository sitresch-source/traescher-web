import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";

export default function Impressum() {
  return (
    <div className="page">
      <SiteHeader base="/" />

      <main className="legal-main">
        <p className="eyebrow">Rechtliches</p>
        <h1>Impressum</h1>

        <div className="legal-block">
          <h2>Anbieter</h2>
          <p>Traescher Web (since 2026)</p>
          <p>eine Traesch Group Firma</p>

          <h2>Verantwortlich</h2>
          <p>Simon Tresch</p>
          <p>Einzelfirma, nicht im Handelsregister eingetragen</p>

          <h2>Adresse</h2>
          <p>Wyden 8</p>
          <p>6462 Seedorf, UR</p>
          <p>Schweiz</p>

          <h2>Kontakt</h2>
          <p>
            <a href="mailto:simon.tresch@traescher-web.com">
              simon.tresch@traescher-web.com
            </a>
          </p>
        </div>

        <p className="legal-back">
          <Link to="/">← Zurück zur Startseite</Link>
          {" · "}
          <Link to="/datenschutz">Datenschutzerklärung</Link>
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
