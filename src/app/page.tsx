import Link from "next/link";
import { siteConfig as cfg } from "../../site.config";

const c = cfg.colors;

function LeafIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.5S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
    </svg>
  );
}

function Icon({ path, className = "w-6 h-6" }: { path: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <LeafIcon className="w-7 h-7" style={{ color: c.primary }} />
            <span className="text-xl font-bold tracking-tight text-gray-900">
              {cfg.brand.name}
              <span style={{ color: c.primary }}>{cfg.brand.tagline}</span>
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href={cfg.nav.loginHref} className="text-sm hover:opacity-80 transition" style={{ color: c.textMuted }}>
              {cfg.nav.loginText}
            </Link>
            <Link
              href={cfg.nav.registerHref}
              className="hidden sm:inline-flex rounded-full text-white px-6 py-2.5 text-sm font-semibold transition"
              style={{ backgroundColor: c.primary }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = c.primaryHover)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = c.primary)}
            >
              {cfg.nav.registerText}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white pt-16 pb-24 sm:pt-24 sm:pb-32 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-8"
            style={{ backgroundColor: c.primaryLight, color: c.primary }}
          >
            <LeafIcon className="w-4 h-4" />
            {cfg.hero.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" style={{ color: c.text }}>
            {cfg.hero.title.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
            <br />
            <span style={{ color: c.primary }}>{cfg.hero.titleAccent}</span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: c.textMuted }}>
            {cfg.hero.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={cfg.hero.primaryButton.href}
              className="rounded-full text-white px-8 py-4 text-lg font-semibold transition"
              style={{ backgroundColor: c.primary }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = c.primaryHover)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = c.primary)}
            >
              {cfg.hero.primaryButton.text}
            </Link>
            <a
              href={cfg.hero.secondaryButton.href}
              className="rounded-full bg-gray-100 text-gray-700 px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition"
            >
              {cfg.hero.secondaryButton.text}
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 sm:py-24 px-6" style={{ backgroundColor: c.surface }}>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4" style={{ color: c.text }}>
            {cfg.features.title}
          </h2>
          <p className="text-center max-w-xl mx-auto mb-16" style={{ color: c.textMuted }}>
            {cfg.features.subtitle}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cfg.features.items.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 hover:shadow-sm transition">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: c.primaryLight }}
                >
                  <Icon path={item.iconPath} className="w-6 h-6" style={{ color: c.primary } as any} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: c.text }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: c.textMuted }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="bg-white py-20 sm:py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: c.text }}>
                {cfg.showcase.title}
                <br />
                <span style={{ color: c.primary }}>{cfg.showcase.titleAccent}</span>
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: c.textMuted }}>
                {cfg.showcase.description}
              </p>
              <p className="leading-relaxed" style={{ color: c.textMuted }}>
                {cfg.showcase.secondaryText}
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ backgroundColor: c.surface }}>
              <pre className="font-mono text-sm whitespace-pre leading-loose" style={{ color: c.textMuted }}>
                {cfg.showcase.visual}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 sm:py-24 px-6" style={{ backgroundColor: c.surface }}>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16" style={{ color: c.text }}>
            {cfg.steps.title}
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {cfg.steps.items.map((item) => (
              <div key={item.num}>
                <div className="text-4xl font-bold opacity-40 mb-4" style={{ color: c.primary }}>
                  {item.num}
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: c.text }}>{item.title}</h3>
                <p className="leading-relaxed" style={{ color: c.textMuted }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: c.primaryLight }}
          >
            <Icon path={cfg.cta.iconPath} className="w-8 h-8" style={{ color: c.primary } as any} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: c.text }}>
            {cfg.cta.title}
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: c.textMuted }}>
            {cfg.cta.description}
          </p>
          <Link
            href={cfg.cta.buttonHref}
            className="inline-flex rounded-full text-white px-8 py-4 text-lg font-semibold transition"
            style={{ backgroundColor: c.primary }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = c.primaryHover)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = c.primary)}
          >
            {cfg.cta.buttonText}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6" style={{ backgroundColor: c.surface }}>
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <LeafIcon className="w-5 h-5" style={{ color: c.primary }} />
              <span className="text-sm font-semibold" style={{ color: c.text }}>
                {cfg.brand.name}
                <span style={{ color: c.primary }}>{cfg.brand.tagline}</span>
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm" style={{ color: c.textLight }}>
              {cfg.footer.links.map((link) => (
                <a key={link.text} href={link.href} className="hover:opacity-70 transition">
                  {link.text}
                </a>
              ))}
            </div>
            <div className="text-sm" style={{ color: c.textLight }}>
              {cfg.brand.copyright}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
