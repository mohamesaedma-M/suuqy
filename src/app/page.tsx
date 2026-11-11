
export default function HomePage() {
  return (
    <div className="container">
      <section className="py-24 md:py-36">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[3px] text-muted uppercase mb-6">
            Welcome to SUUQY
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-navy leading-[1.08]">
            Quality products.
            <br />
            Better living.
          </h1>

          <p className="mt-7 text-base md:text-lg text-muted leading-8 max-w-lg">
            Discover furniture, gym equipment, office essentials
            and everyday products, all in one place.
          </p>

          <a
            href="/products"
            className="inline-flex mt-9 items-center justify-center bg-navy text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-navy-light transition-colors"
          >
            Explore products
          </a>
        </div>
      </section>
    </div>
  );
}
