import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Gemeinsamer Header mit Burger-Menü, nutzbar auf der Startseite und auf
// Unterseiten wie Impressum/Datenschutz. "base" bestimmt, wohin die
// Anker-Links zeigen: auf der Startseite reicht "#kontakt", auf einer
// Unterseite muss zuerst zur Startseite navigiert werden ("/#kontakt").
export default function SiteHeader({ base = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    function handleKey(e) {
      if (e.key === "Escape") closeMenu();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? "Menü schliessen" : "Menü öffnen"}
        >
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
        </button>
        <Link to="/" className="wordmark" onClick={closeMenu}>
          <img src="/header-logo.png" alt="traescher web" className="wordmark-logo" />
        </Link>
        <nav id="site-nav" className={`nav-flyout ${menuOpen ? "is-open" : ""}`}>
          <a href={`${base}#leistungen`} onClick={closeMenu}>Leistungen</a>
          <a href={`${base}#angebot`} onClick={closeMenu}>Angebot</a>
          <a href={`${base}#referenzen`} onClick={closeMenu}>Referenzen</a>
          <a href={`${base}#prozess`} onClick={closeMenu}>Prozess</a>
          <a href={`${base}#warum`} onClick={closeMenu}>Warum wir</a>
          <a href={`${base}#wir`} onClick={closeMenu}>Wer sind wir</a>
          <a href={`${base}#kontakt`} onClick={closeMenu}>Kontakt</a>
        </nav>
      </header>
      {menuOpen && <div className="nav-backdrop" onClick={closeMenu} />}
    </>
  );
}
