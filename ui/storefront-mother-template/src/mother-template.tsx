import Link from "next/link"
import { neutralData } from "./neutral-data"

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <div className="announcement" data-slot="announcement">ANNOUNCEMENT SLOT</div>
      <header className="site-header" data-slot="header">
        <Link className="brand" href="/">{neutralData.brand}</Link>
        <nav className="primary-nav" aria-label="Primary">
          {neutralData.nav.map((item) => <span key={item}>{item}</span>)}
        </nav>
        <div className="header-actions"><span>ACTION 01</span><span>ACTION 02</span></div>
      </header>
      {children}
      <footer className="site-footer" data-slot="footer">
        <div><strong>{neutralData.brand}</strong><p>FOOTER COPY SLOT</p></div>
        <div className="footer-links"><span>LINK 01</span><span>LINK 02</span><span>LINK 03</span></div>
      </footer>
    </div>
  )
}

export function MediaSlot({ label = "IMAGE SLOT", className = "" }: { label?: string; className?: string }) {
  return <div className={`media-slot ${className}`} data-slot="media"><span>{label}</span></div>
}

export function HomeTemplate() {
  return (
    <SiteShell>
      <main>
        <section className="hero section" data-slot="hero">
          <div className="hero-copy"><p className="eyebrow">EYEBROW</p><h1>{neutralData.heroTitle}</h1><p>SUPPORTING COPY SLOT</p><div className="action-shape">PRIMARY ACTION</div></div>
          <MediaSlot label="HERO IMAGE SLOT" className="hero-media" />
        </section>
        <section className="section" data-slot="grid-section">
          <div className="section-heading"><span>SECTION LABEL</span><h2>FEATURED GRID SLOT</h2></div>
          <div className="product-grid">
            {[1,2,3,4].map((i) => <article className="product-card" key={i}><MediaSlot label={`IMAGE ${i}`} /><div className="product-card-copy"><span>ITEM {i}</span><span>VALUE</span></div></article>)}
          </div>
        </section>
      </main>
    </SiteShell>
  )
}

export function ProductTemplate() {
  return (
    <SiteShell>
      <main className="section pdp" data-slot="pdp">
        <div className="pdp-gallery" data-slot="gallery">
          <MediaSlot label="PRIMARY IMAGE" className="pdp-primary" />
          <MediaSlot label="SECONDARY IMAGE 01" />
          <MediaSlot label="SECONDARY IMAGE 02" />
        </div>
        <aside className="pdp-buybox" data-slot="buybox">
          <p className="eyebrow">CATEGORY</p>
          <h1>{neutralData.productTitle}</h1>
          <p className="price">{neutralData.priceLabel}</p>
          <p>DESCRIPTION SLOT</p>
          <div className="option-group"><span>OPTION LABEL</span><div className="option-row">{neutralData.optionLabels.map((option) => <div className="option" key={option}>{option}</div>)}</div></div>
          <div className="primary-action">PRIMARY ACTION</div>
          <div className="pdp-meta"><span>DETAIL ROW 01</span><span>DETAIL ROW 02</span><span>DETAIL ROW 03</span></div>
        </aside>
      </main>
    </SiteShell>
  )
}
