export default function HomePage() {
  const featuredBrands = [
    {
      title: "Kratom Brands",
      text: "A cleaner way to explore standout brands and products worth closer attention.",
      tag: "Curated",
    },
    {
      title: "Botanical Products",
      text: "Selected with stronger standards for quality, consistency, and trust.",
      tag: "Focused",
    },
    {
      title: "Consumer Favorites",
      text: "Highlighted picks earning real attention from shoppers and repeat buyers.",
      tag: "Popular",
    },
  ];

  const trustItems = [
    {
      title: "Curated Products",
      text: "A tighter focus on products and brands that deserve real attention.",
    },
    {
      title: "Clearer Guidance",
      text: "Straightforward information that helps shoppers make better decisions.",
    },
    {
      title: "Better Transparency",
      text: "A stronger emphasis on quality, consistency, and what actually matters.",
    },
  ];

  const productCards = [
    {
      name: "Featured Brand One",
      note: "Short product or brand benefit line goes here.",
      price: "Starting Soon",
    },
    {
      name: "Featured Brand Two",
      note: "Use this space for a clean, confidence-building description.",
      price: "Coming Soon",
    },
    {
      name: "Featured Brand Three",
      note: "Built for clickable product collections and category pages.",
      price: "Launching Soon",
    },
    {
      name: "Featured Brand Four",
      note: "Swap these placeholders for your real inventory later.",
      price: "Coming Soon",
    },
    {
      name: "Featured Brand Five",
      note: "Keep product cards clean, evenly spaced, and easy to browse.",
      price: "Coming Soon",
    },
    {
      name: "Featured Brand Six",
      note: "The goal is premium and clear, not crowded and chaotic.",
      price: "Coming Soon",
    },
  ];

  return (
    <main className="page-shell">
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      <div className="glow glow-c" />

      <div className="container">
        <header className="site-header">
          <div>
            <div className="eyebrow">Pick A Batch</div>
            <div className="sub-eyebrow">Know Your Batch. Choose Better. Feel Better.</div>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section id="home" className="hero-grid">
          <div>
            <div className="pill">Know Your Batch</div>
            <h1 className="hero-title">
              Choose Better Products
              <span>With More Confidence</span>
            </h1>
            <p className="hero-copy">
              Pick A Batch helps consumers cut through clutter, hype, and inconsistent quality
              with clearer product guidance, stronger transparency, and a sharper focus on what
              is actually worth buying.
            </p>
            <div className="hero-buttons">
              <a href="#products" className="button primary">Browse Products</a>
              <a href="#about" className="button secondary">Learn More</a>
            </div>
            <div className="hero-note">Curated products. Clearer guidance. Better transparency.</div>
          </div>

          <div className="panel outer">
            <div className="panel inner">
              <div className="section-label">Featured Focus</div>
              <h2 className="panel-title">Premium look. Cleaner flow. Stronger first impression.</h2>
              <div className="stack">
                {featuredBrands.map((item) => (
                  <div key={item.title} className="card dark">
                    <div className="row">
                      <div className="card-title">{item.title}</div>
                      <span className="mini-tag">{item.tag}</span>
                    </div>
                    <p className="card-copy">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="trust-grid">
          {trustItems.map((item) => (
            <div key={item.title} className="card soft">
              <div className="card-title">{item.title}</div>
              <p className="card-copy">{item.text}</p>
            </div>
          ))}
        </section>

        <section id="products" className="section">
          <div className="section-head">
            <div>
              <div className="section-label">Products</div>
              <h2 className="section-title">Products Worth a Closer Look</h2>
              <p className="section-copy">
                Not everything deserves shelf space. Pick A Batch focuses on products, brands,
                and categories that stand out for the right reasons.
              </p>
            </div>
            <div className="section-side-note">Clean cards. Strong spacing. No chaos.</div>
          </div>

          <div className="products-grid">
            {productCards.map((item) => (
              <div key={item.name} className="product-card">
                <div className="product-image" />
                <div className="row top">
                  <div>
                    <div className="card-title">{item.name}</div>
                    <div className="product-note">{item.note}</div>
                  </div>
                  <div className="mini-outline">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about-grid">
          <div className="card soft">
            <div className="section-label">Why Pick A Batch</div>
            <h2 className="section-title">Built Around Better Choices</h2>
          </div>

          <div className="card soft">
            <p className="section-copy">
              Too often, consumers are left sorting through crowded shelves, inconsistent
              inventory, inflated pricing, and vague claims with very little useful direction.
            </p>
            <p className="section-copy">
              Pick A Batch was created to offer a better alternative — one built around practical
              guidance, stronger product awareness, and a more dependable way to identify what
              is actually worth your time and money.
            </p>
            <p className="section-copy">
              Rather than overwhelming people with endless options, the goal is to narrow the
              field to products, brands, and batches that truly deserve attention.
            </p>
          </div>
        </section>

        <section className="split-grid">
          <div className="card gradient">
            <div className="section-label">About</div>
            <h2 className="section-title">More than a storefront.</h2>
            <p className="section-copy">
              Pick A Batch was built to become a trusted resource for people seeking better products,
              better guidance, and better transparency in the botanical marketplace.
            </p>
            <p className="section-copy">
              This platform is designed to be more than just a place to browse products. It is a curated
              product and educational resource shaped to help people understand what they are buying and
              why certain products stand out from the rest.
            </p>
            <p className="section-copy">
              In categories where quality and consistency can vary widely from one batch to the next,
              better information matters.
            </p>
          </div>

          <div className="card soft">
            <div className="section-label">Email Signup</div>
            <h2 className="section-title">Get Updates Worth Opening</h2>
            <p className="section-copy">
              No clutter. Just updates on featured products, new brands, site additions,
              and curated picks worth paying attention to.
            </p>
            <div className="signup-box">
              <div className="fake-input">Enter your email</div>
              <button className="button primary full">Subscribe</button>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="card soft roomy">
            <div className="section-label">Contact</div>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-copy max">
              Questions, product inquiries, or business interest? Reach out and we’ll point you in the right direction.
            </p>
            <div className="contact-grid">
              <div className="card dark">
                <div className="contact-label">Email</div>
                <div className="contact-value">info@pickabatch.co.site</div>
              </div>
              <div className="card dark">
                <div className="contact-label">Phone</div>
                <div className="contact-value">+1 813-590-2661</div>
              </div>
              <div className="card dark">
                <div className="contact-label">Location</div>
                <div className="contact-value">Central Florida</div>
              </div>
              <div className="card dark">
                <div className="contact-label">Hours</div>
                <div
                  className="contact-value"
                  dangerouslySetInnerHTML={{
                    __html: "Mon–Fri: 10am–6pm<br />Sat: 10am–6pm<br />Sun: Closed",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">Know Your Batch. Choose Better. Feel Better.</footer>
      </div>
    </main>
  );
}
