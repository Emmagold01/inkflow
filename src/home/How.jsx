export default function How() {
  const data = [
    {
      id: "01",
      h3: "Upload your book",
      p: "Sign up with your Nigerian details. Upload your manuscript and cover art. No formatting stress.",
    },
    {
      id: "02",
      h3: "Set your price",
      p: " Choose ebook, physical, or both. Our royalty calculator shows your exact payout before you publish.",
    },
    {
      id: "03",
      h3: "Earn in Naira",
      p: "Readers buy, we print on demand and deliver. You get paid directly to your local bank account.",
    },
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-7 md:px-20 py-15">
      <div>
        <div className="text-coral mb-3 text-xs font-bold tracking-widest uppercase">
          How it works
        </div>
        <h2 className="font-playfair mb-12 max-w-2xl text-[30px] md:text-[42px] leading-[1.2] font-extrabold">
          From manuscript to marketplace in minutes.
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          {data.map((item) => (
            <div
              className="bg-card border-fbord rounded-2xl hover:border-coral border p-8 transition duration-500 ease-in-out"
              key={item.id}
            >
              <div className="text-coral text-md mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(255,107,71,0.12)] font-bold">
                {item.id}
              </div>
              <h3 className="text-lg font-semibold mb-2.5">{item.h3}</h3>
              <p className="text-sm text-muted leading-[1.6]">{item.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
