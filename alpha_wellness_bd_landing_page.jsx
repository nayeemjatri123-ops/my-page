export default function AlphaWellnessLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black px-6 py-20 text-center">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.3),transparent_50%)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide text-yellow-400 drop-shadow-lg">
            ALPHA WELLNESS BD
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-zinc-300 leading-relaxed">
            Confidence • Privacy • Care
          </p>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-8 text-lg">
            Premium men’s wellness & personal care solutions with discreet delivery all over Bangladesh.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://m.me/"
              className="px-8 py-4 rounded-2xl bg-yellow-500 text-black font-bold text-lg shadow-2xl hover:scale-105 transition"
            >
              Inbox Now
            </a>

            <a
              href="https://wa.me/8800000000000"
              className="px-8 py-4 rounded-2xl border border-yellow-500 text-yellow-400 font-semibold text-lg hover:bg-yellow-500 hover:text-black transition"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'Premium Quality',
            desc: 'Imported wellness products with premium packaging and trusted quality.',
          },
          {
            title: 'Privacy Protected',
            desc: '100% discreet packaging and confidential order handling.',
          },
          {
            title: 'Cash On Delivery',
            desc: 'Nationwide delivery available with easy COD service.',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-xl hover:border-yellow-500 transition"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">{item.title}</h3>
            <p className="text-zinc-400 leading-7">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Product Section */}
      <section className="px-6 py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-yellow-500 p-10 shadow-2xl text-center">
              <div className="h-80 rounded-2xl border border-zinc-700 bg-zinc-950 flex items-center justify-center text-zinc-500 text-lg">
                Product Image Here
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 leading-tight">
              Vega Delay Spray
            </h2>

            <p className="mt-6 text-zinc-300 leading-8 text-lg">
              A premium imported men’s wellness product designed for modern self care and confidence.
            </p>

            <ul className="mt-8 space-y-4 text-zinc-300 text-lg">
              <li>✔ Easy To Use</li>
              <li>✔ Compact & Travel Friendly</li>
              <li>✔ Premium Imported Quality</li>
              <li>✔ Privacy Protected Delivery</li>
            </ul>

            <button className="mt-10 px-8 py-4 rounded-2xl bg-yellow-500 text-black font-bold text-lg hover:scale-105 transition shadow-xl">
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-6 py-16 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-400">
          Trusted Wellness Store In Bangladesh
        </h2>

        <p className="mt-6 text-zinc-400 text-lg leading-8 max-w-3xl mx-auto">
          We focus on premium quality, customer privacy, and professional service to provide a smooth and secure shopping experience.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500 text-sm">
        © 2026 Alpha Wellness BD • Confidence • Privacy • Care
      </footer>
    </div>
  )
}
