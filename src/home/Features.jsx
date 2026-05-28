import { Icon } from "@iconify/react";

export default function Features() {
  const data = [
    {
      icon: "iconamoon:box-thin",
      h3: "Naira Payouts",
      p: "No warehouse, no upfront cost. When a reader orders a physical copy, we print and ship it automatically.",
    },
    {
      icon: "uiw:pay",
      h3: "Print-on-Demand",
      p: "Connect your Nigerian bank account and receive royalties directly — no dollar conversions, no stress.",
    },
    {
      icon: "teenyicons:toggle-outline",
      h3: "Ebook + Physical Toggle",
      p: "One book listing, two formats. Readers pick ebook for instant download or paperback for doorstep delivery.",
    },
    {
      icon: "solar:chart-bold",
      h3: "Author Dashboard",
      p: " Track sales, monitor royalties, and manage your catalog — all in one clean dashboard built for you.",
    },
    {
      icon: "carbon:delivery",
      h3: "Doorstep Delivery",
      p: "We partner with local logistics providers like GIG to delive physical copies anywhere in Nigeria.",
    },
    {
      icon: "ion:earth-outline",
      h3: "Global Ebook Sales",
      p: "Readers in Ghana, UK, US, Canada — anywhere in the world can buy your ebook instantly.",
    },
  ];
  return (
    <section
      id="features"
      className="mx-auto max-w-6xl px-7 py-15 pt-0 md:px-20"
    >
      <div>
        <div className="text-coral mb-3 text-xs font-bold tracking-widest uppercase">
          Features
        </div>
        <h2 className="font-playfair mb-12 max-w-2xl text-[30px] leading-[1.2] font-extrabold md:text-[42px]">
          Everything an African author actually needs.
        </h2>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-card border-fbord flex items-start gap-4 rounded-2xl border p-7 transition duration-500 ease-in-out hover:border-[rgba(255,107,71,0.4)]"
            >
              <div className="shrink-0">
                <Icon icon={item.icon} className="text-coral text-3xl" />
              </div>
              <div>
                <h3 className="mb-1.5 text-[16px] font-semibold">{item.h3}</h3>
                <p className="text-muted text-[13px] leading-[1.6]">{item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
