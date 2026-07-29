import { useEffect, useRef, useState } from 'react'
import './App.css'

// Kreis-Siegel: das Signatur-Element der Seite, angelehnt an
// Vereins-/Firmenstempel auf offiziellen Dokumenten.
function Seal({ size = 168, className = '' }) {
  const id = 'seal-path'
  return (
    <svg
      className={`seal ${className}`}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label="Siegel: traescher web, seit 2026, Zürich"
    >
      <defs>
        <path
          id={id}
          d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
        />
      </defs>
      <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="68" fill="none" stroke="currentColor" strokeWidth="1" />
      <text fill="currentColor" fontSize="11.5" letterSpacing="3" fontFamily="'IBM Plex Mono', monospace">
        <textPath href={`#${id}`} startOffset="0%">
          TRAESCHER WEB · KMU &amp; VEREINE · SEIT 2026 ·
        </textPath>
      </text>
      <g transform="translate(100,100)" stroke="currentColor" strokeWidth="1" fill="none">
        <path d="M -22,-6 L 0,16 L 22,-6" />
        <line x1="0" y1="16" x2="0" y2="-20" />
      </g>
    </svg>
  )
}

// Kleiner Hook: blendet Sektionen sanft ein, sobald sie in den
// Viewport scrollen. Respektiert prefers-reduced-motion via CSS.
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

function Reveal({ as: Tag = 'div', className = '', children }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}

const services = [
  {
    title: 'KMU-Websites',
    text: 'Eine professionelle Online-Präsenz für Ihr Unternehmen: übersichtlich, seriös und auf das Wesentliche reduziert – damit Kundschaft findet, was sie sucht.',
  },
  {
    title: 'Vereinswebseiten',
    text: 'Für Sportklubs, Kulturvereine und gemeinnützige Organisationen: Mitglieder informieren, Veranstaltungen ankündigen, Vereinsleben sichtbar machen.',
  },
]

const processSteps = [
  {
    n: '01',
    title: 'Erstgespräch',
    text: 'Wir hören zu: Wer sind Sie, was soll die Seite leisten, wer soll sie nutzen?',
  },
  {
    n: '02',
    title: 'Konzept',
    text: 'Struktur, Inhalte und Design entstehen gemeinsam – abgestimmt auf Ihre Zielgruppe.',
  },
    {
    n: '03',
    title: 'Vertrag',
    text: 'Nach Abschluss der Konzeptphase erstellen wir gemeinsam den passenden Vertrag für Service & Betrieb.',
  },
  {
    n: '04',
    title: 'Umsetzung',
    text: 'Die Seite wird gebaut, getestet und für alle Geräte optimiert.',
  },
  {
    n: '05',
    title: 'Übergabe & Support',
    text: 'Sie erhalten eine startklare Seite – inklusive Einweisung und Einführung in den Support-Prozess.',
  },
]

const trust = [
  { title: 'Klar & verständlich', text: 'Keine Fachbegriffe, keine überladenen Seiten – nur das, was zählt.' },
  { title: 'Fair kalkuliert', text: 'Transparente Preise, die auch zu kleinen Budgets passen.' },
  { title: 'Persönlich betreut', text: 'Direkter Kontakt, keine Warteschlaufen oder Callcenter.' },
  { title: 'Barrierefrei gedacht', text: 'Gut lesbar und bedienbar – für alle Besucherinnen und Besucher.' },
]

const about = [
  { title: 'Wer steht hinter traescher web', text: 'traescher web besteht aus einer Person, Simon Tresch.' },
  { title: 'Erfahrung', text: 'Langjährige Erfahrung im IT-Bereich, Projekte, Planung, Service & Betrieb, Weblösungen und E-Commerce.' },
  { title: 'Umsetzung', text: 'Unsere Webprojekte werden mit der passenden Web-Sprache umgesetzt: html, css, javascript, react usw.' },
  { title: 'Partner', text: 'Im Bereich, CI/CD, Gestaltung, Grafik, Design und Logos arbeite ich mit Ramona Gisler zusammen.' },
]

// Zeilen der Angebots-Tabelle. Reihenfolge hier = Reihenfolge in der Tabelle.
const pricingFeatures = [
  'Seiten',
  'Design - Default/Eigenes/Neues',
  'CI/CD - Default/Eigenes/Neues',
  'Bildergalerie - Lightbox',
  'Videos - iframe',
  'Newsfeed',
  'Kontaktformular',
  'M365 Business',
  'Mailbox',
  'Content-Pflege',
  'Hosting - Cloud',
  'Domain Name - Swizzonic',
  'Mehrsprachigkeit',
  'SEO-Grundlagen/Optimierung',
  'Support',
  'Reaktionszeit',
]

// Pakete: "values" muss exakt so viele Einträge haben wie pricingFeatures,
// in derselben Reihenfolge. highlight markiert das empfohlene Paket.
const packages = [
  {
    id: 'basis',
    name: 'Basis',
    price: 'ab CHF 490.–',
	aufbau: 'ab CHF 550.-',
    highlight: false,
    values: [
      '1 Seite (One-Pager)',
	  'Ja/Nein',
	  'Ja/Nein',
	  'Ja/Nein',
	  'Ja/Nein',
	  'Ja/Nein',
      'Mailto-Link',
	  'Ja/Nein',
	  'Ja/Nein',
	  'Selber',
      'Basis',
	  'Ja - Auswahl bestimmen',
	  '-',
      'Basis-Meta-Angaben',
	  'Ja/Nein',
      '120h',
    ],
  },
  {
    id: 's',
    name: 'S',
    price: 'ab CHF 890.–',
	aufbau: 'ab CHF 950.-',
    highlight: false,
    values: [
      'bis 4 Seiten',
	  'Ja/Nein',
	  'Ja/Nein',
	  'Ja/Nein',
	  'Ja/Nein',
	  'Ja/Nein',
      'Echtes Formular',
      'Ja/Nein',
	  'Ja/Nein',
	  'Selber',
      'Small',
	  'Ja - Auswahl bestimmen',
	  '-',
	  'Ja',
      'Ja/Nein',
      '48h',
    ],
  },
  {
    id: 'm',
    name: 'M',
    price: 'ab CHF 1590.–',
	aufbau: 'ab CHF 1750.-',
    highlight: true,
    values: [
      'ab 5 Seiten',
	  'Ja/Nein',
	  'Ja/Nein',
	  'Ja/Nein',
	  'Ja/Nein',
	  'Ja/Nein',
      'Formular mit Spamschutz',
      'Ja/Nein',
	  'Ja/Nein',
	  'Selber',
      'Medium',
	  'Ja - Auswahl bestimmen',
	  '–',
      'Erweitert',
	  'Ja/Nein',
      '24h',
    ],
  },
  {
    id: 'l',
    name: 'L',
    price: 'ab CHF 2490.–',
	aufbau: 'ab CHF 2750.-',
    highlight: false,
    values: [
      'ab 25 Seiten',
	  'Ja/Nein',
	  'Ja/Nein',
	  'Ja/Nein',
	  'Ja/Nein',
	  'Ja/Nein',
      'Mehrere Formulare',
      'Ja/Nein',
	  'Ja/Nein',
	  'Selber/traescher web',
      'Large',
	  'Ja - Auswahl bestimmen',
	  'Ja/Nein',
      'Umfassend + Google Eintrag',
	  'Ja/Nein',
      '8h',
    ],
  },
  {
    id: 'xl',
    name: 'XL',
    price: 'ab CHF 3990.–',
	aufbau: 'ab CHF 4250.-',
    highlight: false,
    values: [
      'ab 50 Seiten',
	  'Ja/Nein',
	  'Ja/Nein',
	  'Ja/Nein',
	  'Ja/Nein',
	  'Ja/Nein',
      'individuelle Prozesse',
      'Ja/Nein',
	  'Ja/Nein',
	  'Selber/traescher web',
      'Extra Large',
	  'Ja - Auswahl bestimmen',
	  'Ja/Nein',
      'Umfassend + laufende Betreuung',
	  'Ja/Nein',
      '4h',
    ],
  },
]

// Platzhalter-Portraitbild von Simon Tresch, erscheint zentriert
// unter dem "Wer sind wir"-Textblock. src später durch echtes Foto ersetzen.
const aboutPhoto = {
  id: 'about-simon',
  src: '/simon-tresch.jpg',
  alt: 'Simon Tresch, traescher web',
  caption: 'Simon Tresch – traescher web',
}

// Platzhalter-Portraitbild von Ramona Gisler, erscheint zentriert
// direkt im Partner-Textblock. src später durch echtes Foto ersetzen.
const partnerPhoto = {
  id: 'partner-ramona',
  src: 'https://picsum.photos/seed/traescher-ramona/700/700',
  alt: 'Ramona Gisler, Partnerin Gestaltung & CI/CD',
  caption: 'Ramona Gisler – Gestaltung, Grafik & CI/CD',
}

// Platzhalter-Referenzen. Bilder + Bildunterschriften: sobald echte
// Projekte vorliegen, hier einfach src/alt/caption ersetzen.
const gallery = [
  { id: 'g1', src: 'https://picsum.photos/seed/traescher-01/800/600', alt: 'Referenzprojekt Beispiel 1', caption: 'KMU-Website – Handwerksbetrieb' },
  { id: 'g2', src: 'https://picsum.photos/seed/traescher-02/800/600', alt: 'Referenzprojekt Beispiel 2', caption: 'Vereinswebseite – Sportklub' },
  { id: 'g3', src: 'https://picsum.photos/seed/traescher-03/800/600', alt: 'Referenzprojekt Beispiel 3', caption: 'KMU-Website – Ladengeschäft' },
  { id: 'g4', src: 'https://picsum.photos/seed/traescher-04/800/600', alt: 'Referenzprojekt Beispiel 4', caption: 'Vereinswebseite – Kulturverein' },
  { id: 'g5', src: 'https://picsum.photos/seed/traescher-05/800/600', alt: 'Referenzprojekt Beispiel 5', caption: 'KMU-Website – Beratung' },
  { id: 'g6', src: 'https://picsum.photos/seed/traescher-06/800/600', alt: 'Referenzprojekt Beispiel 6', caption: 'Vereinswebseite – Musikverein' },
]

// Lightbox: vergrösserte Ansicht mit Tastatur- und Klick-Navigation.
function Lightbox({ items, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext])

  if (index === null || index === undefined) return null
  const item = items[index]
  const showNav = items.length > 1

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.caption} onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Schliessen">×</button>
      {showNav && (
        <button
          className="lightbox-nav lightbox-prev"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Vorheriges Bild"
        >
          ‹
        </button>
      )}
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.alt} />
        <figcaption>{item.caption}</figcaption>
      </figure>
      {showNav && (
        <button
          className="lightbox-nav lightbox-next"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Nächstes Bild"
        >
          ›
        </button>
      )}
    </div>
  )
}

export default function App() {
  const [lightbox, setLightbox] = useState(null) // { items, index } | null

  const openLightbox = (items, index) => setLightbox({ items, index })
  const closeLightbox = () => setLightbox(null)
  const prevImage = () =>
    setLightbox((lb) =>
      lb ? { ...lb, index: lb.index === 0 ? lb.items.length - 1 : lb.index - 1 } : lb
    )
  const nextImage = () =>
    setLightbox((lb) =>
      lb ? { ...lb, index: lb.index === lb.items.length - 1 ? 0 : lb.index + 1 } : lb
    )

  return (
    <div className="page">
      <header className="site-header">
        <a href="#top" className="wordmark">traescher web</a>
        <nav className="nav">
          <a href="#leistungen">Leistungen</a>
          <a href="#angebot">Angebot</a>
          <a href="#referenzen">Referenzen</a>
          <a href="#prozess">Prozess</a>
          <a href="#warum">Warum wir</a>
		  <a href="#wir">Wer sind wir</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">Websites für KMU &amp; Vereine</p>
            <h1>
              Eine Website, die zu Ihrem <em>Betrieb</em> oder <em>Verein</em> passt.
            </h1>
            <p className="lead">
              traescher web gestaltet klare, verständliche Webseiten für kleine
              Unternehmen und Vereine – ohne Schnickschnack, dafür mit Substanz.
            </p>
            <a className="cta" href="#kontakt">Projekt anfragen</a>
          </div>
          <div className="hero-seal" aria-hidden="false">
            <Seal size={190} />
          </div>
        </section>

        <Reveal as="section" className="section" >
          <div id="leistungen" className="anchor" />
          <p className="eyebrow">Leistungen</p>
          <h2>Zwei Zielgruppen, ein Anspruch</h2>
          <div className="cards">
            {services.map((s) => (
              <div className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="section section-wide">
          <div id="angebot" className="anchor" />
          <p className="eyebrow">Angebot</p>
          <h2>Pakete für jede Grösse</h2>
          <p className="lead">
            Fünf Stufen, ein Prinzip: Sie zahlen für das, was Ihr Projekt
            wirklich braucht. Alle Preise verstehen sich als Richtwert und
            werden im Erstgespräch auf Ihr Vorhaben abgestimmt.
          </p>
          <div className="pricing-table-wrap">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th scope="col" className="pricing-row-label">
					<span className="pricing-name">Pakete</span>
					<span className="pricing-price">Service &amp; Betrieb (jährlich)</span>
					<span className="pricing-structure">Projekt Aufbau (einmalig)</span>
				</th>
                  {packages.map((p) => (
                    <th
                      scope="col"
                      key={p.id}
                      className={p.highlight ? 'pricing-highlight' : ''}
                    >
                      {p.highlight && <span className="pricing-badge">Empfehlung</span>}
                      <span className="pricing-name">{p.name}</span>
                      <span className="pricing-price">{p.price}</span>
					  <span className="pricing-structure">{p.aufbau}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingFeatures.map((feature, fi) => (
                  <tr key={feature}>
                    <th scope="row" className="pricing-row-label">{feature}</th>
                    {packages.map((p) => (
                      <td
                        key={p.id}
                        className={p.highlight ? 'pricing-highlight' : ''}
                      >
                        {p.values[fi]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="pricing-row-label"></td>
                  {packages.map((p) => (
                    <td key={p.id} className={p.highlight ? 'pricing-highlight' : ''}>
                      <a className="cta cta-small" href="#kontakt">Anfragen</a>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </Reveal>

        <Reveal as="section" className="section">
          <div id="referenzen" className="anchor" />
          <p className="eyebrow">Referenzen</p>
          <h2>Beispiele aus der Praxis</h2>
          <p className="lead gallery-intro">
            Platzhalterbilder – hier entstehen bald Einblicke in echte Projekte.
          </p>
          <div className="gallery-grid">
            {gallery.map((item, i) => (
              <button
                key={item.id}
                className="gallery-item"
                onClick={() => openLightbox(gallery, i)}
                aria-label={`${item.caption} vergrössern`}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span className="gallery-caption">{item.caption}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="section">
          <div id="prozess" className="anchor" />
          <p className="eyebrow">Ablauf</p>
          <h2>So entsteht Ihre Seite</h2>
          <ol className="process">
            {processSteps.map((step) => (
              <li className="process-step" key={step.n}>
                <span className="process-n">{step.n}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal as="section" className="section">
          <div id="warum" className="anchor" />
          <p className="eyebrow">Warum traescher web</p>
          <h2>Klein, direkt, verlässlich</h2>
          <div className="trust-grid">
            {trust.map((t) => (
              <div className="trust-item" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
		
		  <Reveal as="section" className="section">
          <div id="wir" className="anchor" />
          <p className="eyebrow">Wer sind wir</p>
          <h2>Nah, unkompliziert und beratend</h2>
          <div className="about-grid">
            {about.map((t) => (
              <div className="about-item" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
                {t.title === 'Partner' && (
                  <button
                    className="single-image single-image-inline"
                    onClick={() => openLightbox([partnerPhoto], 0)}
                    aria-label={`${partnerPhoto.caption} vergrössern`}
                  >
                    <img src={partnerPhoto.src} alt={partnerPhoto.alt} loading="lazy" />
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            className="single-image single-image-centered"
            onClick={() => openLightbox([aboutPhoto], 0)}
            aria-label={`${aboutPhoto.caption} vergrössern`}
          >
            <img src={aboutPhoto.src} alt={aboutPhoto.alt} loading="lazy" />
          </button>
        </Reveal>

        <Reveal as="section" className="section kontakt-section">
          <div id="kontakt" className="anchor" />
          <p className="eyebrow">Kontakt</p>
          <h2>Bereit für Ihre neue Webseite?</h2>
          <p className="lead">
            Schreiben Sie uns kurz, worum es geht – wir melden uns innerhalb von
            zwei Werktagen.
          </p>
          <a className="cta cta-outline" href="mailto:simon.tresch@traescher-web.com?subject=Projektanfrage%20traescher%20web">
			hallo@traescher-web.com
          </a>
        </Reveal>
      </main>

      <footer className="site-footer">
        <Seal size={64} className="seal-small" />
        <p>© 2026 traescher web · Switzerland</p>
      </footer>

      <Lightbox
        items={lightbox?.items ?? []}
        index={lightbox?.index}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </div>
  )
}
