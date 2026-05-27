export default function Features() {
  const data = [
    {
      icon: "📦",
      h3: "Naira Payouts",
      p: "No warehouse, no upfront cost. When a reader orders a physical copy, we print and ship it automatically.",
    },
    {
      icon: "💳",
      h3: "Print-on-Demand",
      p: "Connect your Nigerian bank account and receive royalties directly — no dollar conversions, no stress.",
    },
    {
      icon: "📱",
      h3: "Ebook + Physical Toggle",
      p: "One book listing, two formats. Readers pick ebook for instant download or paperback for doorstep delivery.",
    },
    {
      icon: "📊",
      h3: "Author Dashboard",
      p: " Track sales, monitor royalties, and manage your catalog — all in one clean dashboard built for you.",
    },
    {
      icon: "🚚",
      h3: "Doorstep Delivery",
      p: "We partner with local logistics providers like GIG to delive physical copies anywhere in Nigeria.",
    },
    {
      icon: "🌍",
      h3: "Global Ebook Sales",
      p: "Readers in Ghana, UK, US, Canada — anywhere in the world can buy your ebook instantly.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-10 py-15 pt-0 md:px-20">
      <div>
        <div className="text-coral mb-3 text-xs font-bold tracking-widest uppercase">
          Features
        </div>
        <h2 className="font-playfair mb-12 max-w-2xl text-[30px] leading-[1.2] font-extrabold md:text-[42px]">
          Everything an African author actually needs.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-card border-fbord flex items-start gap-4 rounded-2xl border p-7 transition duration-500 ease-in-out hover:border-[rgba(255,107,71,0.4)]"
            >
              <div className="shrink-0 text-[28px]">{item.icon}</div>
              <div>
                <h3 className="text-[16px] font-semibold mb-1.5">{item.h3}</h3>
                <p className="text-[13px] text-muted leading-[1.6]">{item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
