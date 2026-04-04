const brands = [
  { name: "SJA Airlines", desc: "Premium airline service with AI-optimized routes, smart booking, sustainable aviation, and world-class in-flight experiences.", icon: "M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" },
  { name: "SJA Hotels", desc: "Luxury and budget hotel chain with smart rooms, AI concierge, contactless check-in, and personalized stays worldwide.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { name: "SJA Transport", desc: "Ground transportation and car rentals with AI-powered routing, electric vehicles, and seamless airport transfers.", icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" },
  { name: "SJA Tours", desc: "Curated travel packages, adventure tours, cultural experiences, and AI-personalized itineraries for every type of traveler.", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
  { name: "SJA Cruise", desc: "Ocean and river cruise experiences with smart ship technology, immersive entertainment, and luxury amenities.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" },
  { name: "SJA Visa", desc: "Hassle-free travel documentation, visa processing, travel insurance, and immigration assistance for global travelers.", icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" },
];

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/sja-logo-circle.png" alt="SJA Logo" width="40" height="40" className="rounded-full" />
            <span className="text-lg font-bold">Travel</span>
          </div>
          <a href="https://sja-thedude.github.io/sja-ecosystem" className="text-xs font-mono text-foreground/50 hover:text-sky-400 transition-colors">sja.com</a>
        </div>
      </nav>
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl" /></div>
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <p className="text-sky-400 text-sm font-mono mb-4 tracking-wider uppercase">Travel & Hospitality</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">Explore the World<br /><span className="text-sky-400">with SJA</span></h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto mb-8">From airlines to hotels, cruises to tours — complete travel and hospitality solutions redefining how you experience the world.</p>
          <a href="#brands" className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-medium transition-colors">Our Brands</a>
        </div>
      </section>
      <section id="brands" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sky-400 text-sm font-mono mb-3 tracking-wider uppercase">Our Brands</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Travel <span className="text-sky-400">Reimagined</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((s) => (
              <div key={s.name} className="rounded-xl bg-surface border border-border hover:border-sky-400/30 p-6 transition-all hover:bg-surface-2">
                <div className="w-12 h-12 rounded-xl bg-sky-400/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{s.name}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our <span className="text-sky-400">Mission</span></h2>
          <p className="text-foreground/60 leading-relaxed">SJA Travel is your gateway to the world. Whether flying with SJA Airlines, staying at SJA Hotels, or exploring with SJA Tours — we combine cutting-edge technology with warm hospitality to create unforgettable travel experiences.</p>
        </div>
      </section>
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-foreground/40 text-sm">Part of the <a href="https://sja-thedude.github.io/sja-ecosystem" className="text-sky-400 hover:underline">SJA Ecosystem</a></p>
          <p className="text-foreground/30 text-xs mt-2">&copy; 2025 SJA Travel. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
